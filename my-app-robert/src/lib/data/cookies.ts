import "server-only"
import { cookies } from "next/headers"

export const getAuthHeaders = (): { authorization: string } | {} => {

  return {}
}

export const setAuthToken = (token: string) => {

}

export const removeAuthToken = () => {

}

export const getCartId = () => {
}

export const setCartId = (cartId: string) => {

}

export const removeCartId = () => {
}
