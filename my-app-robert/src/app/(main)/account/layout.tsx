import AccountLayout from "@modules/account/templates/account-layout"
import { cookies } from "next/headers";

export default async function AccountPageLayout({
  dashboard,
  login,
}: {
  dashboard?: React.ReactNode
  login?: React.ReactNode
}) {
  const customer = (await cookies()).get("session")?.value;

  return (
    <AccountLayout customer={customer}>
      {customer ? dashboard : login}
    </AccountLayout>
  )
}
