import { BlockProps } from "@/types/notion-renderer"
import TextComponent from "./text-component"

//<TextComponent key={i} title={t} />

export default function HeaderBlock(props: BlockProps) {
    if (props.blockData.type != "header") return null
    return (
        <h2>
            <TextComponent {...props} />
        </h2>
    )
}
