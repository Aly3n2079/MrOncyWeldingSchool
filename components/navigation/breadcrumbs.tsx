import Breadcrumb from "@/components/ui/breadcrumb"
import BreadcrumbSchema from "@/components/structured-data/breadcrumb-schema"

interface BreadcrumbItem {
  label: string
  path: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  homeLabel?: string
  baseUrl?: string
}

export default function Breadcrumbs({
  items = [],
  homeLabel = "Home",
  baseUrl = "https://weldingschool.vercel.app",
}: BreadcrumbsProps) {
  // Create schema items from breadcrumb items
  const schemaItems = [
    { name: homeLabel, item: baseUrl },
    ...items.map((item) => ({
      name: item.label,
      item: `${baseUrl}${item.path}`,
    })),
  ]

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <Breadcrumb items={items} homeLabel={homeLabel} />
    </>
  )
}
