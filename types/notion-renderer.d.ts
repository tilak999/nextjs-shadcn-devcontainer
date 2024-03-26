import type { Block, RecordMap } from "notion-types"

export interface BlockProps {
    recordMap?: RecordMap
    blockMap: BlockProvider
    blockData: Block
    RenderBlock: ({ blockId, block }: { blockId?: string, block?: Block }) => Promise<JSX.Element>
}

export type BlockComponent = (blockProps: BlockProps) => any
export type BlockProvider = { [type: string]: [notionBlockProvider: BlockComponent] }