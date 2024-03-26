import { BlockProps } from "@/types/notion-renderer"
import TextComponent from "./text-component"

//<TextComponent key={i} title={t} />

export default function QuoteBlock(props: BlockProps) {
    if (props.blockData.type != "quote") return null
    return (
        <div className="px-4 border-l-2 border-gray-800 dark:border-white">
            <TextComponent {...props} />
        </div>
    )
}
