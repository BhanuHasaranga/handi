import React from "react";
import { Container, Grid, Card, Text } from "@nextui-org/react";
import LoginForm from "@/components/login/loginform";
import { useMediaQuery } from "../useMediaQuery.js";
import LoginImage from "@/components/login/loginimage";

export default function login() {
  const isMd = useMediaQuery(960);

  return (
    <Container xl display="flex" alignItems="center" justify="center" css={{
       h: "100vh",
       backgroundColor: "#C6BBBA",
       }}>
        <Card css={{
          p:'0',
          w: "75%",
          d: "flex",
          flexDirection: "row",
          backgroundColor:'transparent',
          '@md': {
            flexDirection:"cloumn",
           }
        }}>
          <LoginForm/>
          <LoginImage/>
        </Card>
    </Container>
  );
}
