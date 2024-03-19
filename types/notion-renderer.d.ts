import type { Block, ExtendedRecordMap } from "notion-types"

export interface BlockProps {
    recordMap?: ExtendedRecordMap
    blockMap: BlockProvider
    blockData: Block
    RenderBlock: ({ blockId: string }) => Promise<JSX.Element>
}

export type BlockComponent = (blockProps: BlockProps) => any
export type BlockProvider = { [type: string]: [notionBlockProvider: BlockComponent] }