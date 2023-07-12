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
  Radio,
  Row,
  Textarea,
  Divider
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Header from "@/components/register/header";
import Navigator from "@/components/register/navigator";

export default function Third() {
  const [selected, setSelected] = React.useState(new Set(["Placeholder"]));

  const router = useRouter();

  function navigateNext() {
    router.replace("/");
  }
  function navigatePrevious() {
    router.replace("/register/second");
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
        <Text h1 color="primary">Personal information</Text>
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
        <Row css={{dflex: 'space-between'}}>
          <Input
            bordered
            label="NIC /passport /driving license"
            placeholder="Select one"
            initialValue=""
          />
          <Input
            bordered
            label="NIC /passport /driving license"
            placeholder="enter number"
            initialValue=""
          />
        </Row>
        <Spacer/>
          {/* <label htmlFor="upload" style={{border:'none',  backgroundColor:'red', }}>Add files</label> */}
          <input id="upload" type="file" value="" style={{border:'none', color:'black', }}/>
        <Spacer/>
        <Row>
          <Input
            bordered
            label="Contact Number"
            placeholder=""
            initialValue={selectedValue}
            css={{ w: "40%" }}
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
                  <Dropdown.Item key="selection1">+91</Dropdown.Item>
                  <Dropdown.Item key="selection2">+92</Dropdown.Item>
                  <Dropdown.Item key="selection3">+93</Dropdown.Item>
                  <Dropdown.Item key="selection4">+94</Dropdown.Item>
                  <Dropdown.Item key="selection5">+95</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            }
          />
          <Spacer/>
          <Input bordered label={<br/>} placeholder="" initialValue="" css={{ w: "100%" }}/>
        </Row>
        <Spacer/>
        <Row>
          <Input
            bordered
            label="Personal Address"
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
          I confirm that I have added all the Ultimate Beneficial owner(s) of the business
        </Checkbox>
        <Spacer/>
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
            Submit
          </Button>
        </Row>
      </Container>
    </div>
  );
}
