import { colors } from "@/components/constants/notion-colors"
import { cn } from "@/lib/utils"
import { BlockProps } from "@/types/notion-renderer"
import { PageLogo } from "./logo-component"
import TextBlock from "./text-block"

export default function CalloutBlock(props: BlockProps) {
    const { blockData } = props
    const color = (blockData.format.block_color || "gray_background") as string
    if (blockData.properties) {
        return (
            <aside className={cn("flex flex-row px-1 py-2.5 my-2 rounded", colors[color])}>
                <div className="mx-2.5 my-1">
                    <PageLogo blockData={blockData} />
                </div>
                <div>
                    <TextBlock {...props} />
                </div>
            </aside>
        )
    } else {
        return null
    }
}
