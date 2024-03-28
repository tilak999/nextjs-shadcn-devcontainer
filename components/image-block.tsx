/* eslint-disable @next/next/no-img-element */
import { defaultMapImageUrl } from "@/lib/map-image-url"
import { cn } from "@/lib/utils"
import { BlockProps } from "@/types/notion-renderer"
import Image from "next/image"
import { Block } from "notion-types"
import TextComponent from "./text-component"

const ImgComponent = (props: { width?: number; height?: number; src: string; alt: string; className: string }) => {
    const { width, height, alt } = props
    if (width && height) return <Image {...props} alt={alt} />
    else return <img {...props} alt={alt} />
}

export default function ImageBlock(props: BlockProps) {
    const { source, caption, title, size } = props.blockData.properties
    const { block_width, block_height, block_full_width, block_page_width, block_aspect_ratio } = props.blockData.format

    return (
        <div className={cn("my-2 flex flex-col space-y-2", block_full_width == false && "items-center")}>
            <ImgComponent
                src={defaultMapImageUrl(source.toString(), props.blockData)}
                className={cn("m-0", block_full_width == false ? "max-w-full" : "w-full")}
                alt={title}
                width={block_width}
                height={block_height}
            />
            <span className="text-gray-500">
                <TextComponent
                    RenderBlock={props.RenderBlock}
                    blockData={{ ...props.blockData, properties: { title: caption } } as Block}
                />
            </span>
        </div>
    )
}
