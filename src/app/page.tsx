import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/core/constants/i18n.constant";

export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
