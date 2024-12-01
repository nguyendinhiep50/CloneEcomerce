"use server";

import { createSession } from "@lib/data/cookies";
import apiServices from "api/api.services";
import { LoginRequest } from "api/rb.api";
import { LoginFormSchema } from "utils/validators/userValidator";

export async function signup(_currentState: unknown, formData: FormData) {
  return null;
}
export async function login(_currentState: unknown, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return `Login failed`;
  }

  const { email, password } = validatedFields.data;

  try {
    const model: LoginRequest = {
      userName: email,
      password: password,
    } as LoginRequest;
    const res = await apiServices.RbApi.login(model);

    if (res.isSuccess) {
      const jwt = res.data?.token ?? "";
      await createSession(jwt);
    }
    return process.env.CONST_IS_LOGIN_SUCCESS;
  } catch (error: any) {
    return `Login failed`;
  }
}

export async function signout(countryCode: string) {
  return null;
}

export const addCustomerAddress = async (
  _currentState: unknown,
  formData: FormData
): Promise<any> => {
  const address = {
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    company: formData.get("company") as string,
    address_1: formData.get("address_1") as string,
    address_2: formData.get("address_2") as string,
    city: formData.get("city") as string,
    postal_code: formData.get("postal_code") as string,
    province: formData.get("province") as string,
    country_code: formData.get("country_code") as string,
    phone: formData.get("phone") as string,
  };

  return null;
};

export const deleteCustomerAddress = async (
  addressId: string
): Promise<void> => {};

export const updateCustomerAddress = async (
  currentState: Record<string, unknown>,
  formData: FormData
): Promise<any> => {
  const addressId = currentState.addressId as string;

  const address = {
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    company: formData.get("company") as string,
    address_1: formData.get("address_1") as string,
    address_2: formData.get("address_2") as string,
    city: formData.get("city") as string,
    postal_code: formData.get("postal_code") as string,
    province: formData.get("province") as string,
    country_code: formData.get("country_code") as string,
    phone: formData.get("phone") as string,
  };

  return null;
};
