import { BlockProps } from "@/types/notion-renderer"

export default function ColumnListBlock({ blockData, recordMap, RenderBlock }: BlockProps) {
    if (blockData.type != "column_list") return null
    return (
        <div className="flex flex-row">
            {blockData.content?.map((id: string) => (
                <div key={id} className="px-2 flex-grow">
                    {recordMap?.block[id].value.content?.map((id) => (
                        <RenderBlock key={id} blockId={id} />
                    ))}
                </div>
            ))}
        </div>
    )
}
