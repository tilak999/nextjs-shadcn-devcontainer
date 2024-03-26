import { BlockProps } from "@/types/notion-renderer"
import { Block } from "notion-types"
import ToggleBlockClient from "./toggle-block-client"

export interface ToggleBlockProps extends BlockProps {
    title?: JSX.Element
}

export default async function ToggleBlock(props: React.PropsWithChildren<ToggleBlockProps>) {
    const { children, RenderBlock } = props

    let titleComponent = children
    if (!titleComponent) {
        const titleBlock = { ...props.blockData, type: "text" } as Block
        titleComponent = await RenderBlock({ block: titleBlock })
    }

    return (
        <ToggleBlockClient title={titleComponent}>
            {props.blockData.content?.map((id) => RenderBlock({ blockId: id }))}
        </ToggleBlockClient>
    )
}
