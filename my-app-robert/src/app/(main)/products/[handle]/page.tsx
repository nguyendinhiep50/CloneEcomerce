import { Metadata } from "next"
import { notFound } from "next/navigation"

import ProductTemplate from "@modules/products/templates"
import { getProductByHandle } from "@lib/data/products"

type Props = {
  params: { countryCode: string; handle: string }
}

export default async function ProductPage({ params }: Props) {


  const pricedProduct = await getProductByHandle(params.handle, "1")
  if (!pricedProduct) {
    notFound()
  }

  return (
    <ProductTemplate
      product={pricedProduct}
      region={null}
      countryCode={params.countryCode}
    />
  )
}
