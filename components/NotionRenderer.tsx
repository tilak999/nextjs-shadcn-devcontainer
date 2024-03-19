import { mergeBlockComponentMap } from "@/lib/NotionHelper"
import { BlockProps, BlockProvider } from "@/types/notion-renderer"
import { NotionAPI } from "notion-client"
import { Block, ExtendedRecordMap } from "notion-types"
import ErrorBlock from "./ErrorBlock"

interface PropType {
    pageId: string
    blockProviders?: BlockProvider
    fetchRecordMap?: (pageId: string) => ExtendedRecordMap
}

export default async function NotionRenderer({ pageId, blockProviders, fetchRecordMap }: PropType) {
    const blockMap = mergeBlockComponentMap(blockProviders)
    const notion = new NotionAPI()
    const getRecordMap = async (pageId: string) => {
        if (fetchRecordMap) return await fetchRecordMap(pageId)
        else return await notion.getPage(pageId)
    }

    const getBlockById = async (blockId: string, recordMap?: ExtendedRecordMap) => {
        if (recordMap && recordMap.block[blockId]) return recordMap.block[blockId].value
        else fetchRecordMap && (await getBlockById(blockId, await fetchRecordMap(blockId)))
    }

    try {
        const recordMap = await getRecordMap(pageId)
        const content = recordMap.block[pageId].value.content
        if (content) {
            const x = content.map(async (id: string) => await getBlockById(id, recordMap))
            const contents = await Promise.all(x)
            return contents.map((block, i) => {
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
    getBlockById: (blockId: string, recordMap?: ExtendedRecordMap) => Promise<Block | undefined>
}

export function RenderPage({ blockMap, blockData, recordMap, getBlockById }: RenderPageProps) {
    const RenderBlock = async ({ blockId }: { blockId: string }) => {
        try {
            const block = await getBlockById(blockId, recordMap)
            if (block)
                return (
                    <RenderPage
                        blockMap={blockMap}
                        recordMap={recordMap}
                        blockData={block}
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
