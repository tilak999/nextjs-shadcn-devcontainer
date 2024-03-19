"use client"

import * as notion from "notion-types"
import { useState } from "react"

export default function ErrorBlock({ blockData }: { blockData?: notion.Block }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-red-700 rounded-md my-2 p-1">
            <h5 onClick={() => setOpen(!open)}>👉 Unknown notion block type: {blockData?.type || "UNKNOWN"}</h5>
            {open && <pre className="p-3 rounded-lg bg-black text-sm">{JSON.stringify(blockData, null, 2)}</pre>}
        </div>
    )
}
