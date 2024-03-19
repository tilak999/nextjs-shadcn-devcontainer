/* eslint-disable @next/next/no-img-element */
import { defaultMapImageUrl } from "@/lib/map-image-url"
import { BlockProps } from "@/types/notion-renderer"
import TextComponent from "./text-component"

export default function PageBlock(props: BlockProps) {
    const { blockData } = props
    if (blockData.type != "page") return null
    const isUrl = blockData.format.page_icon?.startsWith("http")

    return (
        <li className="list-none space-x-1 flex hover:bg-gray-800 rounded">
            <div className="w-8 flex justify-center items-center">
                {isUrl && blockData.format.page_icon ? (
                    <img
                        className="my-0"
                        src={defaultMapImageUrl(blockData.format.page_icon, blockData) + "&width=20"}
                        alt="page-icon"
                    />
                ) : (
                    <span>{blockData.format.page_icon}</span>
                )}
            </div>
            <a className="inline-block flex-grow" href={blockData.id}>
                <TextComponent {...props} />
            </a>
        </li>
    )
}
