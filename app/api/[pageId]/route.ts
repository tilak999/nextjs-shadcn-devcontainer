import { NextRequest, NextResponse } from "next/server"
import { NotionAPI } from "notion-client"

const notion = new NotionAPI()

export async function GET(request: NextRequest, { params }: { params: { pageId: string } }) {
    const uuid = params.pageId || `067dd719-a912-471e-a9a3-ac10710e7fdf`
    const recordMap = await notion.getPage(uuid.replaceAll('-', ''))
    return NextResponse.json(recordMap)
}

/*
const page = recordMap.block[uuid]
    if (page.value.type == "page") {
        console.log("=> Page found: " + uuid)
        let contents = null
        if (page.value.content) {
            contents = page.value.content.map(id =>
                recordMap.block[id]
            )
        }
        return NextResponse.json({ ...page.value, contents })
    }
    return NextResponse.json({ error: "failed to find the page" })

*/