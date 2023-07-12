import { Card, Container,} from "@nextui-org/react";
import Image from 'next/image'
import loginImage from 'assets/LoginImage1.png'
import React from "react";

export default function LoginImage() {
  return (
    <Card css={{transform:"translateX(-2vh)", zIndex:'0' }}>
      <Card 
        css={{
          position: 'absolute',
          w:'100%',
          h:'100%',
          zIndex: '1',
          background:'linear-gradient(to bottom, rgb(255, 255, 255, 0), #5A2A27)',
        }}>
        <></>
      </Card>
      <Image
        src={loginImage}
        fill
        alt="login"
        style={{
          zIndex: '0',
          // width: '100%',
          // height: 'auto',
        }}
      />
    </Card>
  );
}
