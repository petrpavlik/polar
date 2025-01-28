import {
  BreadcrumbLink,
  BreadcrumbPageParams,
  BreadcrumbSeparator,
} from '../../Breadcrumb'

export default async function BreadcrumbLayout({
  params,
  children,
}: {
  params: BreadcrumbPageParams
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSeparator />
      <BreadcrumbLink
        href={`/dashboard/${params.organization}/sales/subscriptions`}
      >
        Subscriptions
      </BreadcrumbLink>
      {children}
    </>
  )
}
