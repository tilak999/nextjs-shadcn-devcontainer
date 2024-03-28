import { colors } from "@/components/constants/notion-colors"
import { BlockProps } from "@/types/notion-renderer"
import { SubDecoration } from "notion-types"
import { Fragment } from "react"

export default function TextComponent({ blockData, RenderBlock }: Pick<BlockProps, "blockData" | "RenderBlock">) {
    // if there are not modifiers return 1st item of array
    const title = blockData.properties.title

    return (
        <>
            {Array.isArray(title)
                ? title.map((t: string[], i: number) => {
                      if (t.length == 1) return <Fragment key={i}>{t[0]}</Fragment>

                      let text = t[0]
                      const actions = t[1]

                      if (Array.isArray(actions)) {
                          for (const subDecoration of actions) {
                              text = inlineRender({ subDecoration, text, RenderBlock })
                          }
                      }
                      return <Fragment key={i}>{text}</Fragment>
                  })
                : title}
        </>
    )
}

interface InlineRenderProps extends Pick<BlockProps, "RenderBlock"> {
    subDecoration: SubDecoration
    text: any
}

function inlineRender({ subDecoration, text, RenderBlock }: InlineRenderProps) {
    switch (subDecoration[0]) {
        case "a":
            return <a href={subDecoration[1]}>{text}</a>
        case "i":
            return <i>{text}</i>
        case "b":
            return <b>{text}</b>
        case "_":
            return <u>{text}</u>
        case "s":
            return <s>{text}</s>
        case "c":
            return <code className="not-prose inline bg-gray-800 px-2 py-1 rounded text-notion-red">{text}</code>
        case "eoi":
            return <RenderBlock blockId={subDecoration[1]} props={{ inline: true }} />
        case "p":
            return <RenderBlock blockId={subDecoration[1]} />
        case "h":
            return <span className={colors[subDecoration[1]]}>{text}</span>
        default:
            console.log(`${subDecoration} => ${text}`)
            return text
    }
}
