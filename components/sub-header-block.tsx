import { BlockProps } from "@/types/notion-renderer"
import TextComponent from "./text-component"

export default function SubHeaderBlock(props: BlockProps) {
    if (props.blockData.type != "sub_header") return null
    return (
        <h3>
            <TextComponent {...props} />
        </h3>
    )
}
