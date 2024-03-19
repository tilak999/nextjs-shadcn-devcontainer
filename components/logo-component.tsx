/* eslint-disable @next/next/no-img-element */
import { defaultMapImageUrl } from "@/lib/map-image-url"
import { Block } from "notion-types"

export function PageLogo({ blockData }: { blockData: Block }) {
    const isUrl = blockData.format.page_icon?.startsWith("http")
    if (isUrl)
        return (
            <img
                className="my-1 mx-1.5"
                src={defaultMapImageUrl(blockData.format.page_icon, blockData) + "&width=20"}
                alt="logo"
            />
        )
    else return blockData.format.page_icon
}
