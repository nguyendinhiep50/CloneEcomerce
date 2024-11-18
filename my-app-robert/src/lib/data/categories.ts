import { cache } from "react"

export const listCategories = cache(async function () {
  return null
})

export const getCategoriesList = cache(async function (
  offset: number = 0,
  limit: number = 100
) {
  return null
})

export const getCategoryByHandle = cache(async function (
  categoryHandle: string[]
) {

  return null
})
