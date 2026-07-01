"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function HashScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") return

    const scrollToHash = () => {
      const hash = window.location.hash
      if (!hash) return
      const id = hash.replace("#", "")
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }

    scrollToHash()
    window.addEventListener("hashchange", scrollToHash)
    return () => window.removeEventListener("hashchange", scrollToHash)
  }, [pathname])

  return null
}
