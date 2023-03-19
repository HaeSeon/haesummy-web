import { Sidebar } from "./SideBar";
import { useVisibleToggle } from "../../hooks/useVisibleToggle";
import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons"
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;  
  align-items: center;
  height: 48px;
  background-color : pink;
`

export function Header(props: { title: string }) {
  const { visible, toggleVisible } = useVisibleToggle()
  return (
    <Container>
      <h3 style={{ marginLeft: "auto", marginRight: "-32px" }}>{props.title}</h3>
      <MenuOutlined
        style={{ fontSize: "24px ", marginLeft: "auto", marginRight: "8px" }}
        onClick={toggleVisible} />
      <Sidebar
        isOpen={visible}
        setIsOpen={toggleVisible}
      />
    </Container>
  );
}