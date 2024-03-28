import type { Block, RecordMap } from "notion-types"

export interface RenderBlockProps {
    blockId?: string, block?: Block, props?: any
}

export interface BlockProps {
    recordMap?: RecordMap
    blockMap: BlockProvider
    blockData: Block
    RenderBlock: (props: RenderBlockProps) => Promise<JSX.Element>
}

export type BlockComponent = (blockProps: BlockProps) => any
export type BlockProvider = { [type: string]: [notionBlockProvider: BlockComponent] }