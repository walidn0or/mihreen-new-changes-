"use client"

import { usePathname, useRouter } from "next/navigation"

type ContactSectionLinkProps = {
  className?: string
  children: React.ReactNode
  onBeforeNavigate?: () => void
}

export function ContactSectionLink({
  className,
  children,
  onBeforeNavigate,
}: ContactSectionLinkProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = () => {
    onBeforeNavigate?.()

    window.setTimeout(() => {
      if (pathname !== "/") {
        router.push("/#contact")
        return
      }

      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", "#contact")
    }, 280)
  }

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  )
}
