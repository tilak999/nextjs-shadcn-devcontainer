"use client"

import { cn } from "@/lib/utils"
import React, { useState } from "react"

const ArrowRight = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={cn("fill-white w-3 transition-transform", className)}>
        <polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon>
    </svg>
)

export default function ToggleBlockClient({ children, title }: React.PropsWithChildren<{ title: any }>) {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className="flex items-center space-x-2">
                <span className="p-1.5 hover:bg-white/20 rounded-md" onClick={() => setShow(!show)}>
                    {<ArrowRight className={show ? "rotate-180" : "rotate-90"} />}
                </span>
                <span>{title}</span>
            </div>
            <div className="ml-8">{show && children}</div>
        </div>
    )
}
