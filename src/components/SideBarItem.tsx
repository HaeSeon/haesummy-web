import React from "react";

export function SidebarItem(props: { menu: { name: string, path: string } }) {

  return <div
    style={{
      color: "black",
      padding: "8px"
    }}>
    {props.menu.name}
  </div>

}
