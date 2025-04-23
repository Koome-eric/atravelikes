import "server-only";
import { SubscribeNewsletter } from "@/components/SubscribeNewsletter";
import { QuickLinks } from "@/components/QuickLinks";
import { Subscription } from "@/lib/db/models";
import { auth } from "@/lib/auth";
import Link from "next/link";
export async function Footer() {
  const user = (await auth())?.user;
  let isSubscribed;
  if (user) {
    isSubscribed = (await Subscription.exists({ userId: user.id }))?.subscribed;
  }
  return (
    <footer className="relative pb-5">
      <SubscribeNewsletter isSubscribed={isSubscribed} />
      <QuickLinks />
      <div className="relative z-10 text-sm text-center font-medium">
        Developed by{" "}
        <Link
          aria-label={"Link to Github of the developer"}
          className="inline text-white"
          href="https://wibblex.com/pricing/digital-marketing-pricing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wibblex
        </Link>
      </div>
      <div className="relative text-sm z-10 text-center font-medium">
        2024 &nbsp;
        <Link
          aria-label={"Link to Figma Community"}
          className="inline text-white"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Atravelikes
        </Link>
      </div>
    </footer>
  );
}
