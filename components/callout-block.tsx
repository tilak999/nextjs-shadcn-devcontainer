import { cn } from "@/lib/utils"
import { BlockProps } from "@/types/notion-renderer"
import { PageLogo } from "./logo-component"
import TextBlock from "./text-block"

const blockColorMap: { [k: string]: string } = {
    gray_background: "bg-gray-900",
    yellow_background: "bg-yellow-900",
}

export default function CalloutBlock(props: BlockProps) {
    const { blockData } = props
    const color = (blockData.format.block_color || "gray_background") as string
    if (blockData.properties) {
        return (
            <aside className={cn("flex flex-row px-1 py-2.5 my-2 rounded", blockColorMap[color])}>
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
