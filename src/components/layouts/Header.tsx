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
  background-color : #ffdde5;
`

export function Header(props: { title: string }) {
  const { visible, toggleVisible } = useVisibleToggle()
  return (
    <Container>
      <div style={{ marginLeft: "8px", color: "white", display: "flex", textAlign: "center", alignItems: "center", gap: "4px" }}>
        <img src="/img/logo.png" alt="" height={"24px"} />
        <h3 style={{ margin: "0" }}>{props.title}</h3>
      </div>
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