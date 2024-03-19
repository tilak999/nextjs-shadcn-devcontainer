import DividerBlock from "@/components/DividerBlock"
import BulletedListBlock from "@/components/bulleted-list-block"
import CalloutBlock from "@/components/callout-block"
import ColumnListBlock from "@/components/column-list-block"
import GithubEOI from "@/components/external-object/GithubEOI"
import HeaderBlock from "@/components/header-block"
import PageBlock from "@/components/page-block"
import SubHeaderBlock from "@/components/sub-header-block"
import TextBlock from "@/components/text-block"
import TransclusionContainerBlock from "@/components/transclusion-container-block"
import { BlockProvider } from "@/types/notion-renderer"

export const blockProviders: BlockProvider = {
    "text": [TextBlock],
    "callout": [CalloutBlock],
    "header": [HeaderBlock],
    "column_list": [ColumnListBlock],
    "sub_header": [SubHeaderBlock],
    "page": [PageBlock],
    "divider": [DividerBlock],
    "transclusion_container": [TransclusionContainerBlock],
    "bulleted_list": [BulletedListBlock],
    "external_object_instance": [GithubEOI]
}