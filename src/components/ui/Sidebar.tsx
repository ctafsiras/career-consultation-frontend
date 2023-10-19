"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";

import { sidebarItems } from "@/constants/sidebarItems";
import { USER_ROLE } from "@/constants/role";
import { getUserInfo } from "@/services/auth.service";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  // const role = USER_ROLE.ADMIN;
  const { role } = getUserInfo() as any;
  // console.log(role);

  return (
    <Sider
      collapsed={false}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "black",
          backgroundColor: "grey",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: ".5rem",
          padding: "10px 0px",
        }}
      >
        Dashboard
      </div>
      <Menu
    
        theme="light"
        defaultSelectedKeys={["1"]}
        mode="inline"
        style={{height: "100vh"}}
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;
