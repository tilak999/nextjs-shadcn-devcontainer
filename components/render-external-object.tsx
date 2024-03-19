import { BlockProvider } from "@/types/notion-renderer"
import { ExtendedRecordMap, SubDecoration } from "notion-types"

interface ExternalObjectProps {
    subDecoration: SubDecoration
    recordMap?: ExtendedRecordMap
    blockMap: BlockProvider
}

//logo.clearbit.com/notion.com?size=20

export default function RenderExternalObject({ recordMap, subDecoration: [key, val], blockMap }: ExternalObjectProps) {
    const blockData = recordMap?.block[val as string].value
    return blockData ? "" : "Unknown external block"
}

//<RenderBlock blockData={blockData} blockMap={blockMap} recordMap={recordMap} />
