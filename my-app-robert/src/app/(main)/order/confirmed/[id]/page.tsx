import { Metadata } from "next"

import OrderCompletedTemplate from "@modules/order/templates/order-completed-template"
import { notFound } from "next/navigation"
import { retrieveOrder } from "@lib/data/orders"

type Props = {
  params: { id: string }
}

async function getOrder(id: string) {
  const order = await retrieveOrder(id)

  return null
}

export const metadata: Metadata = {
  title: "Order Confirmed",
  description: "You purchase was successful",
}

export default async function OrderConfirmedPage({ params }: Props) {
  const order = await getOrder(params.id)
  if (!order) {
    return notFound()
  }

  return <OrderCompletedTemplate order={order} />
}
