"use client";
import React from "react";
import {
  Text,
  Input,
  Button,
  Container,
  Spacer,
  Checkbox,
  Divider,
  Row,
  Link,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Header from "@/components/register/header";
import Navigator from "@/components/register/navigator";

export default function First() {
  const [selected, setSelected] = React.useState(new Set(["Placeholder"]));

  const router = useRouter();

  function navigateNext() {
    router.replace("/register/second");
  }

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <>
      <Header/>
      <Divider css={{ w: "100%", h: "0.25vh" }}></Divider>
      <Spacer/>
      <Navigator/>
      <Spacer/>
      <Container css={{w: "50%", paddingBottom:'5vh'}}>
        <Text h1 color="primary">Create Account</Text>
        <Spacer/>
        <Row css={{dflex: 'space-between'}}>
          <Input
            bordered
            label="First Name"
            placeholder="Enter your First name"
            initialValue=""
          />
          <Input
            bordered
            label="Last Name"
            placeholder="Enter your last name"
            initialValue=""
          />
        </Row>
        <Spacer/>
        <Input bordered label="Email Address" placeholder="Enter your  Email Address" initialValue="" color="primary"/>
        <Spacer/>
        <Input bordered label="Business name" placeholder="Enter your Business Name" initialValue="" css={{w:'50%'}} />
        <Spacer/>
        <Input.Password bordered label="Password" placeholder="Set a new passowrd" initialValue="" css={{w:'50%'}} />
        <Spacer/>
        <Input.Password bordered label="Confirm Password" placeholder="Re-Type your password" initialValue="" css={{w:'50%'}} />
        <Spacer/>
        <Checkbox size="xs">
        Agree to <Spacer x={0.2}/><Link><Text>Membership Agreement</Text></Link>
        </Checkbox>
        <Spacer/>
        <Button
          onPress={navigateNext}
        >
          Continue
        </Button>
      </Container>
    </>
  );
}
