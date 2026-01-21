import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const cookieStore = cookies()
  const token = (await cookieStore).get("token")?.value;

  if (token) {
    redirect("/home");
  } else {
    redirect("/login");
  }

  return null;
}