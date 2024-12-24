import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";

export default function NavMobile() {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="size-7 mt-2" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="hidden">
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <NavLinks />
        </SheetContent>
      </Sheet>
    </div>
  );
}
