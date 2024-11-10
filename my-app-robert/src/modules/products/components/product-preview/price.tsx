import { Text, clx } from "@medusajs/ui"
import { VariantPrice } from "types/global"

export default async function PreviewPrice() {

  return (
    <>
      <Text
        className="line-through text-ui-fg-muted"
        data-testid="original-price"
      >
        "price.original_price"
      </Text>
      <Text
        className={clx("text-ui-fg-muted", {
          "text-ui-fg-interactive": "sale" === "sale",
        })}
        data-testid="price"
      >
        price.calculated_price
      </Text>
    </>
  )
}
