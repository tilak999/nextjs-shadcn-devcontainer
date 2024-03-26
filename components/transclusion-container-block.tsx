import { BlockProps } from "@/types/notion-renderer"

export default function TransclusionContainerBlock({ blockData, RenderBlock }: BlockProps) {
    if (blockData.type == "transclusion_container") {
        return (
            <div>
                {blockData.content?.map((id: string) => (
                    <div key={id} className="flex-grow">
                        {<RenderBlock key={id} blockId={id} />}
                    </div>
                ))}
            </div>
        )
    } else if (blockData.type == "transclusion_reference") {
        const id = blockData.format["transclusion_reference_pointer"].id
        return <RenderBlock blockId={id} />
    }
    return null
}
