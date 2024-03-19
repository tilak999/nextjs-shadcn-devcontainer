import { defaultMapImageUrl } from "@/lib/map-image-url"
import Image from "next/image"
import { Block } from "notion-types"

function getEmojiSvgUrl(emoji: string) {
    const codepoint = emoji.codePointAt(0)
    if (codepoint) {
        const unicode = codepoint.toString(16)
        return `https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/${unicode}.svg`
    } else {
        return emoji
    }
}

/* eslint-disable @next/next/no-img-element */
function Banner({ pageBlock }: { pageBlock: Block }) {
    const coverImage = pageBlock.format.page_cover
    return (
        <>
            <div className="h-11"></div>
            {coverImage ? (
                <div className="h-60 w-full overflow-hidden" aria-description="banner image of the page">
                    <img src={defaultMapImageUrl(coverImage, pageBlock)} className="w-full" alt="cover" />
                </div>
            ) : (
                <div className="h-28"></div>
            )}
        </>
    )
}

function Icon({ pageBlock }: { pageBlock: Block }) {
    const icon = pageBlock.format.page_icon
    const isEmoji = /\p{Extended_Pictographic}/u.test(pageBlock.format.page_icon)
    const imgSrc = isEmoji ? getEmojiSvgUrl(icon) : defaultMapImageUrl(icon, pageBlock)
    return (
        <div className="width-full max-w-[708px] mx-auto relative top-[-74px]">
            <div className={`w-32 h-32 ${isEmoji ? "pr-6" : ""}`}>
                <Image src={imgSrc} alt="icon" width={128} height={128} />
            </div>
        </div>
    )
}

const Header = { Banner, Icon }
export default Header
