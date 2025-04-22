import { redirect } from "next/navigation"

export default function RootPage() {
  // Redirect to the English version at the root level
  redirect("/he")
}

