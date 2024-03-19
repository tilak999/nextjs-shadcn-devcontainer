import { BlockProps } from "@/types/notion-renderer"

export default function TransclusionContainerBlock({ blockData, recordMap, RenderBlock }: BlockProps) {
    if (blockData.type != "transclusion_container") return null
    return (
        <div>
            {blockData.content?.map((id: string) => (
                <div key={id} className="flex-grow">
                    {recordMap && <RenderBlock key={id} blockId={id} />}
                </div>
            ))}
        </div>
    )
}
