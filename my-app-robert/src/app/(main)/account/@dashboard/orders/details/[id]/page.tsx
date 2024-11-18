import { Metadata } from "next"
import { notFound } from "next/navigation"

import OrderDetailsTemplate from "@modules/order/templates/order-details-template"

type Props = {
  params: { id: string }
}

async function getOrder(id: string) {
  return null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const order = await getOrder(params.id).catch(() => null)

  if (!order) {
    notFound()
  }

  return {
    title: `Order `,
    description: `View your order`,
  }
}

export default async function OrderDetailPage({ params }: Props) {
  const order = await getOrder(params.id).catch(() => null)

  if (!order) {
    notFound()
  }

  return <OrderDetailsTemplate order={order} />
}
