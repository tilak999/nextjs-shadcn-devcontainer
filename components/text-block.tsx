import { BlockProps } from "@/types/notion-renderer"
import TextComponent from "./text-component"

export default function TextBlock(props: BlockProps) {
    if (props.blockData.properties) {
        return (
            <p className="my-1 whitespace-pre-wrap break-words">
                <TextComponent {...props} />
            </p>
        )
    } else {
        return <div className="min-h-[1em]"></div>
    }
}
