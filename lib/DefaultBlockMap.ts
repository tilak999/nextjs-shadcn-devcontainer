import DividerBlock from "@/components/DividerBlock"
import BookmarkBlock from "@/components/bookmark-block"
import BulletedListBlock from "@/components/bulleted-list-block"
import CalloutBlock from "@/components/callout-block"
import ColumnListBlock from "@/components/column-list-block"
import GithubEOI from "@/components/external-object/GithubEOI"
import HeaderBlock from "@/components/header-block"
import PageBlock from "@/components/page-block"
import QuoteBlock from "@/components/quote-block"
import TextBlock from "@/components/text-block"
import ToggleBlock from "@/components/toggle-block"
import TransclusionContainerBlock from "@/components/transclusion-container-block"
import TweetBlock from "@/components/twitter-block"
import { BlockProvider } from "@/types/notion-renderer"

export const blockProviders: BlockProvider = {
    "text": [TextBlock],
    "callout": [CalloutBlock],
    "column_list": [ColumnListBlock],
    "header": [HeaderBlock],
    "sub_header": [HeaderBlock],
    "sub_sub_header": [HeaderBlock],
    "page": [PageBlock],
    "divider": [DividerBlock],
    "transclusion_container": [TransclusionContainerBlock],
    "transclusion_reference": [TransclusionContainerBlock],
    "bulleted_list": [BulletedListBlock],
    "external_object_instance": [GithubEOI],
    "quote": [QuoteBlock],
    "bookmark": [BookmarkBlock],
    "tweet": [TweetBlock],
    "toggle": [ToggleBlock]
}