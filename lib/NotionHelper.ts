import { BlockProvider } from "@/types/notion-renderer"
import { blockProviders } from "./DefaultBlockMap"

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

