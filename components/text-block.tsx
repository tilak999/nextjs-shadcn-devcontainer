import { cn } from "@/lib/utils"
import { BlockProps } from "@/types/notion-renderer"
import { colors } from "./constants/notion-colors"
import TextComponent from "./text-component"

export default function TextBlock(props: BlockProps) {
    if (props.blockData.properties) {
        const { block_color } = props.blockData.format || { block_color: null }
        return (
            <p className={cn("my-1 whitespace-pre-wrap break-words", block_color && colors[block_color])}>
                <TextComponent {...props} />
            </p>
        )
    } else {
        return <div className="min-h-[1em]"></div>
    }
}
