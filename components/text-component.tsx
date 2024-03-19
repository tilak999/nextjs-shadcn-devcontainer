import { BlockProps } from "@/types/notion-renderer"
import { SubDecoration } from "notion-types"

export default function TextComponent({ blockData, recordMap, blockMap, RenderBlock }: BlockProps) {
    // if there are not modifiers return 1st item of array
    const title = blockData.properties.title

    return (
        <>
            {title.map((t: string[]) => {
                if (t.length == 1) return t[0]

                let text = t[0]
                const actions = t[1]

                if (Array.isArray(actions)) {
                    for (const subDecoration of actions) {
                        text = inlineRender({ subDecoration, text, RenderBlock })
                    }
                }
                return text
            })}
        </>
    )
}

interface InlineRenderProps {
    subDecoration: SubDecoration
    text: any
    RenderBlock: any
}

function inlineRender({ subDecoration, text, RenderBlock }: InlineRenderProps) {
    switch (subDecoration[0]) {
        case "a":
            return <a href={subDecoration[1]}>{text}</a>
        case "i":
            return <i>{text}</i>
        case "b":
            return <b>{text}</b>
        case "eoi":
            return <RenderBlock blockId={subDecoration[1]} />
        default:
            return text
    }
}
