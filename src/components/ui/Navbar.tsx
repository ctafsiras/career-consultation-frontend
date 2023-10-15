"use client";
import React, { useState } from "react";
import {
  UserAddOutlined,
  LoginOutlined,
  SettingOutlined,
  HomeOutlined,
  AccountBookOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    label: <Link href="/">Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link href="/login">Login</Link>,
    key: "login",
    icon: <LoginOutlined />,
  },
  {
    label: <Link href="/signup">Sign Up</Link>,
    key: "signup",
    icon: <UserAddOutlined />,
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navbar;
