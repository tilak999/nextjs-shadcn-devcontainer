import { BlockProps } from "@/types/notion-renderer"

export default function DividerBlock({ blockData }: BlockProps) {
    if (blockData.type != "divider") return null
    return <hr />
}
