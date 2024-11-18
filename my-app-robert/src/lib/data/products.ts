import { cache } from "react"

export const getProductsById = cache(async function ({
  ids,
  regionId,
}: {
  ids: string[]
  regionId: string
}) {
  return null
})

export const getProductByHandle = cache(async function (
  handle: string,
  regionId: string
) {
  return null

})

