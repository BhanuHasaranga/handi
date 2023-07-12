import {
  Row,
  Text,
  Button,
  Divider,
  Spacer,
  Input,
  Checkbox,
  Card,
  Link,
} from "@nextui-org/react";
import Image from 'next/image'
import logo from 'assets/Logo.png'
import Google from 'assets/Google.png'
import React from "react";

export default function LoginForm() {
  return (
    <Card css={{ alignItems: "center", transform:"translateX(2vh)", zIndex:'0'}}>
      <Card.Body css={{transform:"translateX(-2vh)"}}>
        <Image
          src={logo}
          alt="logo"
          style={{
            width: '13vh',
            height: 'auto',
          }}
        />
        <Text h1 color="primary">
          Welcome Back, Seller
        </Text>
        <Text h4 color="primary">
          Welcome back! Please Enter your details
        </Text>
        <Spacer />
        <Button auto bordered icon={<Image src={Google} alt="Google" width={20}/>} href="#">
          log in with google
        </Button>
        <Spacer />
        <Row align="center" css={{ w: "50%" }}>
          <Divider />
          <Spacer />
          <Text color="primary">or</Text>
          <Spacer />
          <Divider />
        </Row>
        <Input
          clearable
          underlined
          initialValue="Email Address"
          css={{ w: "50%" }}
        />
        <Input.Password
          // clearable
          underlined
          initialValue="Password"
          css={{ w: "50%" }}
        />
        <Spacer />
        <Row justify="space-between" align="center" css={{ w: "50%" }}>
          <Checkbox size="sm" color="primary" labelColor="primary">
            Remember me
          </Checkbox>
          <Link href="#">
            <Text color="primary" size="sm">
              forgot password
            </Text>
          </Link>
        </Row>
        <Spacer />
        <Button href="#">Log in</Button>
        <Spacer />
        <Row justify="center">
          <Text h4 color="primary">
            Don’t have an account?
          </Text>
          <Spacer />
          <Link href="#">
            <Text h4 color="primary">
              Register
            </Text>
          </Link>
        </Row>
      </Card.Body>
    </Card>
  );
}
