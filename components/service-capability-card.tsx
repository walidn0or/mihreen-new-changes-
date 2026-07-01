import type { LucideIcon } from "lucide-react"

type ServiceCapabilityCardProps = {
  eyebrow: string
  title: string
  description: string
  featuresLabel?: string
  features: string[]
  icon: LucideIcon
}

export function ServiceCapabilityCard({
  eyebrow,
  title,
  description,
  featuresLabel = "Key capabilities",
  features,
  icon: Icon,
}: ServiceCapabilityCardProps) {
  return (
    <article className="service-capability-card">
      <div className="svc-icon">
        <Icon className="size-6" strokeWidth={2} aria-hidden />
      </div>
      <span className="capability-eyebrow">{eyebrow}</span>
      <h2 className="capability-title">{title}</h2>
      <p className="capability-lead">{description}</p>
      <h3 className="capability-features-label">{featuresLabel}</h3>
      <ul className="capability-features">
        {features.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}
