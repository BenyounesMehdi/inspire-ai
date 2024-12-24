import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "../ui/button";
import NavMobile from "./NavMobile";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="container mx-auto mt-5 flex justify-around items-center">
      <Logo />
      <div className="flex justify-center items-center gap-3">
        <div className="hidden md:block">
          <NavLinks />
        </div>
        {!user ? (
          <Button className="p-5" asChild>
            <LoginLink>Sign in</LoginLink>
          </Button>
        ) : (
          <div className="flex justify-center items-center gap-3">
            <Button className="p-5" asChild>
              <LogoutLink>Log out</LogoutLink>
            </Button>
            <NavMobile />
          </div>
        )}
      </div>
    </nav>
  );
}
