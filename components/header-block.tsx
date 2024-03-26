import { BlockProps } from "@/types/notion-renderer"
import React from "react"
import TextComponent from "./text-component"
import ToggleBlock from "./toggle-block"

const Header = (props: React.PropsWithChildren<{ type: string; className?: string }>) => {
    switch (props.type) {
        case "header":
            return <h2 {...props}>{props.children}</h2>
        case "sub_header":
            return <h2 {...props}>{props.children}</h2>
        case "sub_sub_header":
            return <h2 {...props}>{props.children}</h2>
        default:
            return null
    }
}

export default function HeaderBlock(props: BlockProps) {
    if (props.blockData.content) {
        return (
            <ToggleBlock {...props}>
                <Header className="my-2" type={props.blockData.type}>
                    <TextComponent {...props} />
                </Header>
            </ToggleBlock>
        )
    } else {
        return (
            <Header type={props.blockData.type}>
                <TextComponent {...props} />
            </Header>
        )
    }
}
