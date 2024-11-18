import { Metadata } from "next"
import CartTemplate from "@modules/cart/templates"

import { retrieveCart } from "@lib/data/cart"

export const metadata: Metadata = {
  title: "Cart",
  description: "View your cart",
}

const fetchCart = async () => {
  const cart = await retrieveCart()

  if (!cart) {
    return null
  }

  return cart
}

export default async function Cart() {
  const cart = await fetchCart()

  return <CartTemplate cart={cart} customer={null} />
}
