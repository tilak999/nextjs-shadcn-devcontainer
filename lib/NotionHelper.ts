import { BlockProvider } from "@/types/notion-renderer"
import { blockProviders } from "./DefaultBlockMap"

export function decorateText(entry: any[]) {
    if (Array.isArray(entry)) {
        let t = ""
        for (const item of entry) {
            if (!Array.isArray(item)) {
                t += item
            } else {
                item.map(([ops, val]: [string, string]) => {
                    if (ops == "a") {
                        t = `<a href="${val}">${t}</a>`
                    } else if (ops == "i") {
                        t = `<i>${t}</i>`
                    }
                })
            }
        }
        return t
    }
    return entry
}

export function mergeBlockComponentMap(providers: BlockProvider | undefined) {
    const defaultProviderMap = blockProviders
    if (providers) {
        Object.keys(providers).map((key: string) => {
            if (key in defaultProviderMap) {
                defaultProviderMap[key].push(...providers[key])
            } else {
                defaultProviderMap[key] = providers[key]
            }
        })
    }
    return defaultProviderMap
}

