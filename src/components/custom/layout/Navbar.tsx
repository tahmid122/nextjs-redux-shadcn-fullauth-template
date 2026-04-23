import Image from "next/image";
import ContainerWrapper from "../common/ContainerWrapper";
import logo from "@/assets/logo/logo.png";
import Link from "next/link";
import SearchBox from "../common/SearchBox";
import { Bell, Mail, ShoppingCart } from "lucide-react";
import { ProfileDropdown } from "../common/ProfileDropdown";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const user = false;
  return (
    <header className="border-b border-b-gray-200 py-3.5 sticky top-0 z-50 bg-background">
      <ContainerWrapper>
        <nav className="flex items-center justify-between gap-11">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={60}
              className="h-15 object-contain"
            />
          </Link>
          {/* Search bar */}
          <div className="hidden md:flex flex-1">
            <SearchBox />
          </div>
          {/* Cart and profile icons */}
          <div className="flex items-center">
            <div className="hidden lg:flex items-center gap-3">
              <Link href={"/cart"}>
                <ShoppingCart className="h-5  w-5 text-gray-700 " />
              </Link>
              <Link href={"/profile"}>
                <Bell className="h-5 w-5 text-gray-700" />
              </Link>
              <Link href={"/profile"}>
                <Mail className="h-5 w-5 text-gray-700" />
              </Link>
            </div>
            {/* profile icon */}
            <div className="lg:border-l lg:ml-5 lg:px-5">
              {user ? (
                <ProfileDropdown />
              ) : (
                <div className="flex items-center gap-2">
                  <Link href={"/register"}>
                    <Button variant="outline"> Register</Button>
                  </Link>
                  <Link href={"/login"}>
                    <Button> Login</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </ContainerWrapper>
    </header>
  );
};

export default Navbar;
