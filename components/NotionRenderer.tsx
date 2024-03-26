import { mergeBlockComponentMap } from "@/lib/NotionHelper"
import { BlockProps, BlockProvider } from "@/types/notion-renderer"
import { NotionAPI } from "notion-client"
import { Block, RecordMap } from "notion-types"
import ErrorBlock from "./ErrorBlock"

interface PropType {
    pageId: string
    blockProviders?: BlockProvider
    fetchRecordMap?: (pageId: string) => RecordMap
}

const notion = new NotionAPI()

export default async function NotionRenderer({ pageId, blockProviders, fetchRecordMap }: PropType) {
    const blockMap = mergeBlockComponentMap(blockProviders)
    const getRecordMap = async (pageId: string) => {
        const request = fetchRecordMap != null ? fetchRecordMap(pageId) : (await notion.getPageRaw(pageId)).recordMap
        const recordMap = await request
        console.debug(`Total payload size for page [${pageId}]: ${JSON.stringify(recordMap).length}`)
        return recordMap
    }

    const getBlockById = async (blockId: string, recordMap?: RecordMap): Promise<Block> => {
        if (recordMap && recordMap.block[blockId]) {
            return recordMap.block[blockId].value
        } else {
            const record = await getRecordMap(blockId)
            return await getBlockById(blockId, record)
        }
    }

    try {
        const recordMap = await getRecordMap(pageId)
        const content = recordMap.block[pageId].value.content
        if (content) {
            const promises = content.map(async (id: string) => await getBlockById(id, recordMap))
            const contentBlocks = await Promise.all(promises)
            return contentBlocks.map((block, i) => {
                return (
                    <RenderPage
                        getBlockById={getBlockById}
                        blockMap={blockMap}
                        blockData={block}
                        recordMap={recordMap}
                        key={i}
                    />
                )
            })
        }
    } catch (e) {
        console.error(e)
    }
}

interface RenderPageProps extends Partial<BlockProps> {
    getBlockById: (blockId: string, recordMap?: RecordMap) => Promise<Block>
}

export function RenderPage({ blockMap, blockData, recordMap, getBlockById }: RenderPageProps) {
    const RenderBlock = async ({ blockId, block }: { blockId?: string; block?: Block }) => {
        try {
            const blockData = block || (blockId && (await getBlockById(blockId, recordMap)))
            if (blockData)
                return (
                    <RenderPage
                        blockMap={blockMap}
                        recordMap={recordMap}
                        blockData={blockData}
                        getBlockById={getBlockById}
                        RenderBlock={RenderBlock}
                    />
                )
        } catch (e) {
            console.error(e)
        }
        return <></>
    }

    if (blockMap && blockData && blockData.type in blockMap) {
        for (const NotionBlockComponent of blockMap[blockData.type]) {
            const component = NotionBlockComponent({ blockData, blockMap, recordMap, RenderBlock })
            if (component) return component
        }
    } else {
        return <ErrorBlock blockData={blockData} />
    }
}
