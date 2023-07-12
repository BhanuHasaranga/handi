import {
  Navbar
} from "@nextui-org/react";
import React from "react";
import Image from 'next/image'
import logo from 'assets/Logo.png'
import { usePathname } from "next/navigation";

export default function Header() {
  // const pathName = usePathname();

  return (
    <div>
      <Navbar css={{ w: "100%", boxShadow: "none" }}>
        <Navbar.Brand>
          <Image
            width={60}
            height={60}
            src={logo}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link color={'primary'} href="#">
            User Manual
          </Navbar.Link>
          <Navbar.Link color={'primary'} href="#">
            Seller Log in
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
      {/* <Text>Redirecting...</Text> */}
    </div>
  );
}
