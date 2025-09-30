import * as React from "react"

export function useMediaQuery(query: string) {
  const [value, setValue] = React.useState(false)

  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches)
    }

    // Check if we're in browser environment
    if (typeof window !== 'undefined' && window.matchMedia) {
      const result = window.matchMedia(query)
      result.addEventListener("change", onChange)
      setValue(result.matches)

      return () => result.removeEventListener("change", onChange)
    }
  }, [query])

  return value
}