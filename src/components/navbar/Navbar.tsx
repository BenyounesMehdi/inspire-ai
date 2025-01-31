import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { Button } from "../ui/button";
import NavMobile from "./NavMobile";
import UserAvatar from "./UserAvatar";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default async function Navbar() {
  return (
    <nav className="container mx-auto mt-5 flex justify-around items-center">
      <Logo />
      <div className="flex justify-center items-center gap-3">
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <SignedOut>
          <Button className="p-5" asChild>
            <Link href={"/sign-in"}>Sign in</Link>
          </Button>
        </SignedOut>
        <SignedIn>
          <div className="flex justify-center items-center gap-3">
            <Button className="p-5" asChild>
              <UserAvatar />
            </Button>
            <NavMobile />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
