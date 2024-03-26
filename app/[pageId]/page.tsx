import NotionRenderer from "@/components/NotionRenderer"
import Header from "@/components/ui/Header"
import { NotionAPI } from "notion-client"
import { cache } from "react"

const indexPage = "067dd719-a912-471e-a9a3-ac10710e7fdf"
const notion = new NotionAPI()

const getPage = cache(async (pageId: string) => {
    const data = await notion.getPageRaw(pageId.replaceAll("-", ""))
    return data
})

export default async function Page({ params }: { params: { pageId: string } }) {
    const pageId = params.pageId || indexPage
    const data = await getPage(params.pageId || pageId)
    const pageBlock = data.recordMap.block[pageId].value

    return (
        <main className="w-full h-screen">
            <div>
                <Header.Banner pageBlock={pageBlock} />
                <Header.Icon pageBlock={pageBlock} />
            </div>

            <div className="width-full max-w-[708px] mx-auto relative top-[-60px] prose dark:prose-invert">
                <h1 className="my-3">{pageBlock.properties.title}</h1>
                <NotionRenderer pageId={pageId} />
            </div>
        </main>
    )
}
