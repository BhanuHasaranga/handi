import React from "react";
import { Avatar, Col, Container, Divider, Row, Spacer, Text } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function Navigator() {
  const pathName = usePathname();

  return (
    <Row align="center">
      <Spacer x={18} />
      <Container display="flex" direction="column" alignItems="center">
        <Avatar
          color="primary"
          textColor={"white"}
          text="1"
        ></Avatar>
        <Text h6 css={{textAlign:'center'}} >Create Account</Text>
      </Container>
      <Spacer />
      <Divider
       color={pathName.endsWith("first") ? "default" : "primary"}
       css={{h:"0.5vh"}}
       />
      <Spacer />
      <Container display="flex" direction="column" alignItems="center">
      <Avatar
          color={pathName.endsWith("first") ? "default" : "primary"}
          textColor={"white"}
          text="2"
        ></Avatar>
        <Text h6 css={{textAlign:'center'}}>Business Information</Text>
      </Container>
      <Spacer />
      <Divider 
       color={pathName.endsWith("third") ? "primary" : "default"} 
       css={{h:"0.5vh"}}
       />
      <Spacer />
      <Container display="flex" direction="column" alignItems="center">
        <Avatar
          color={pathName.endsWith("third") ? "primary" : "default"}
          textColor={"white"}
          text="3"
        ></Avatar>
        <Text h6 css={{textAlign:'center'}}>Personal Information</Text>
      </Container>
      <Spacer x={18} />
    </Row>
  );
}
