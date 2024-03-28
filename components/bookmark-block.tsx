/* eslint-disable @next/next/no-img-element */
import { BlockProps } from "@/types/notion-renderer"

export default function BookmarkBlock(props: BlockProps) {
    if (props.blockData.type != "bookmark") return null
    const { title, description, link } = props.blockData.properties
    const { bookmark_cover } = props.blockData.format

    return (
        <a className="no-underline border rounded flex my-3 hover:bg-accent/50" href={link.toString()} target="_blank">
            <div className="p-4">
                <div className="text-sm font-semibold">{title}</div>
                <p className="text-gray-400 text-sm my-1 max-h-11 overflow-hidden">{description}</p>
                <div className="max-w-md truncate">
                    <img
                        src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${link}&size=32`}
                        className="w-4 m-0 mr-2 inline-block"
                        alt="link icon"
                    />
                    <span className="text-xs font-semibold">{link}</span>
                </div>
            </div>
            <div
                style={{ backgroundImage: `url(${bookmark_cover})` }}
                className="flex-none w-56 bg-center bg-cover"
            ></div>
        </a>
    )
}
