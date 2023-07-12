"use client";
import React from "react";
import {
  Text,
  Input,
  Button,
  Container,
  Spacer,
  Checkbox,
  Dropdown,
  Row,
  Textarea,
  Divider,
  Link,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Header from "@/components/register/header";
import Navigator from "@/components/register/navigator";

export default function Second() {
  const [selected, setSelected] = React.useState(new Set(["Placeholder"]));

  const router = useRouter();

  function navigateNext() {
    router.replace("/register/third");
  }
  function navigatePrevious() {
    router.replace("/register/first");
  }

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <div>
      <Header/>
      <Divider css={{ w: "100%", h: "0.25vh" }}></Divider>
      <Spacer/>
      <Navigator/>
      <Spacer/>
      <Container css={{ d: "flex", fd: "column", w: "40%", paddingBottom:'5vh' }}>
        <Text h1 color="primary">Business information</Text>
        <Spacer />
          <Input
            bordered
            label="Business Name"
            placeholder="ABC Holdings PVT LTD"
            initialValue=""
          />
        <Spacer/>
        <Row css={{dflex: 'space-between'}}>
        <Input
            bordered
            label="Business Type "
            placeholder="Select one"
            initialValue=""
            labelRight={
              <Dropdown>
                <Dropdown.Button
                  light
                  css={{
                    borderWidth: "thin",
                  }}
                ></Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selected}
                  // onSelectionChange={setSelected}
                >
                  <Dropdown.Item key="selection1">selection1</Dropdown.Item>
                  <Dropdown.Item key="selection2">selection2</Dropdown.Item>
                  <Dropdown.Item key="selection3">selection3</Dropdown.Item>
                  <Dropdown.Item key="selection4">selection4</Dropdown.Item>
                  <Dropdown.Item key="selection5">selection5</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            }
          />
          <Input
            bordered
            label="Business Registration Number"
            placeholder="Enter your business registration number"
            initialValue=""
          />
        </Row>
        <Spacer/>
        <Input bordered label="Business Certificate" placeholder="Add files" initialValue="" />
        <Spacer />
        <Row>
          <Input
            bordered
            label="Business Address"
            placeholder="Country"
            initialValue={selectedValue}
            css={{ w: "100%" }}
            labelRight={
              <Dropdown>
                <Dropdown.Button
                  light
                  css={{
                    borderWidth: "thin",
                  }}
                ></Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selected}
                  // onSelectionChange={setSelected}
                >
                  <Dropdown.Item key="selection1">selection1</Dropdown.Item>
                  <Dropdown.Item key="selection2">selection2</Dropdown.Item>
                  <Dropdown.Item key="selection3">selection3</Dropdown.Item>
                  <Dropdown.Item key="selection4">selection4</Dropdown.Item>
                  <Dropdown.Item key="selection5">selection5</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            }
          />
        </Row>
        <Spacer/>
        <Row>
          <Input
            bordered
            placeholder="State/ Province"
            initialValue={selectedValue}
            css={{ w: "100%" }}
            labelRight={
              <Dropdown>
                <Dropdown.Button
                  light
                  css={{
                    borderWidth: "thin",
                  }}
                ></Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selected}
                  // onSelectionChange={setSelected}
                >
                  <Dropdown.Item key="selection1">selection1</Dropdown.Item>
                  <Dropdown.Item key="selection2">selection2</Dropdown.Item>
                  <Dropdown.Item key="selection3">selection3</Dropdown.Item>
                  <Dropdown.Item key="selection4">selection4</Dropdown.Item>
                  <Dropdown.Item key="selection5">selection5</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            }
          />
        </Row>
        <Spacer/>
        <Textarea 
          bordered
          placeholder="Street, Resident No, etc "
          minRows={4}
          />
        <Spacer/>
        <Checkbox size="xs">
          Agree to <Spacer x={0.2}/><Link><Text>Membership Agreement</Text></Link>
        </Checkbox>
        <Spacer y={1.5}/>
        <Row justify="space-between">
          <Button
            bordered
            onPress={navigatePrevious}
          >
            Back
          </Button>
          <Button
            onPress={navigateNext}
          >
            Next
          </Button>
        </Row>
      </Container>
    </div>
  );
}
