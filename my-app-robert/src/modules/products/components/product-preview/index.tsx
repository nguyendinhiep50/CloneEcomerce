import { Text } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {

  const images = [
    { url: "https://laptopre.vn/upload/picture/picture-01723536805.jpg" },
    { url: "https://laptopre.vn/upload/picture/picture-01723536805.jpg" }
  ];

  return (
    <LocalizedClientLink href={`/products/`} className="group">
      <div data-testid="product-wrapper">
        <Thumbnail
          thumbnail=""
          images={images}
          size="full"
          isFeatured={true}
        />
        <div className="flex txt-compact-medium mt-4 justify-between">
          <Text className="text-ui-fg-subtle" data-testid="product-title">
            product 01
          </Text>
          <div className="flex items-center gap-x-2">
            <PreviewPrice />
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
