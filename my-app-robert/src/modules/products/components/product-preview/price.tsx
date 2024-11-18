import { Text, clx } from "@medusajs/ui"
import { VariantPrice } from "types/global"

export default async function PreviewPrice() {

  return (
    <>
      <Text
        className="line-through text-ui-fg-muted"
        data-testid="original-price"
      >
        200000
      </Text>
      <Text
        className={clx("text-ui-fg-muted", {
          "text-ui-fg-interactive": "sale" === "sale",
        })}
        data-testid="price"
      >
        10000
      </Text>
    </>
  )
}
