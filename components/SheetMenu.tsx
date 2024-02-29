import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Menu } from "lucide-react";
import UserMenu from "./navbar/UserMenu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { User } from "@prisma/client";

const NavbarList = [
  {name: "Home",href: "Home"},
  {name: "Explore", href: "Explore"},
  {name: "Support us", href: "SupportUs"},
  {name: "Join the fayre", href: "JoinTheFayre"},
  {name: "Blogs", href: "Blogs"},

]
interface NavbarProps {
  currentUser?: User | null;
}
const SheetMenu:React.FC<NavbarProps> = ({ currentUser }) => {
 
  return (
    <>
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
        <Menu size={20}/>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Our Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-20 justify-center items-center pt-12 cursor-pointer">
        {
          NavbarList.map((item,i) => (
            <>
              <Link href={item.href}>
                {item.name}
                 </Link>
            </>
          ))

        }
        <UserMenu currentUser={currentUser}/>
        </div>
       
      
      </SheetContent>
    </Sheet>
    </>
  )
}
export default SheetMenu;