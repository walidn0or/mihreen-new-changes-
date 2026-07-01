"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/#about")
  }, [router])

  return (
    <div className="page-container flex min-h-[50vh] items-center justify-center text-[15px] text-[var(--text-muted)]">
      Redirecting…
    </div>
  )
}
