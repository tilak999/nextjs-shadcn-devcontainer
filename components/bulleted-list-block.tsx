import { BlockProps } from "@/types/notion-renderer"
import TextComponent from "./text-component"

export default function BulletedListBlock({ blockData, recordMap, blockMap, RenderBlock }: BlockProps) {
    if (blockData.properties) {
        return (
            <li className="my-1 whitespace-pre-wrap break-words">
                <TextComponent
                    blockData={blockData}
                    recordMap={recordMap}
                    blockMap={blockMap}
                    RenderBlock={RenderBlock}
                />
                <ul>
                    {blockData.content?.map((id) => (
                        <RenderBlock key={id} blockId={id} />
                    ))}
                </ul>
            </li>
        )
    } else {
        return <div className="min-h-[1em]"></div>
    }
}
