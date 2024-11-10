import { Text } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { getProductsById } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"

export default async function ProductPreview({
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {


  return (
    <LocalizedClientLink href={`/products/`} className="group">
      <div data-testid="product-wrapper">
        <Thumbnail
          thumbnail=""
          images={[]}
          size="full"
          isFeatured={true}
        />
        <div className="flex txt-compact-medium mt-4 justify-between">
          <Text className="text-ui-fg-subtle" data-testid="product-title">
            product.title
          </Text>
          <div className="flex items-center gap-x-2">
            <PreviewPrice />
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
