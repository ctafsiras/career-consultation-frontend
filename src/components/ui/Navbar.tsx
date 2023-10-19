"use client";
import React, { useEffect, useState } from "react";
import {
  UserAddOutlined,
  LoginOutlined,
  SettingOutlined,
  HomeOutlined,
  AccountBookOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Button, Menu } from "antd";
import Link from "next/link";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { usePathname, useRouter } from "next/navigation";
import path from "path";

const items: MenuProps["items"] = [
  {
    label: <Link href="/">Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link href="/service">Services</Link>,
    key: "service",
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

const authItems: MenuProps["items"] = [
  {
    label: (
      <Link href="/login">
        <Button onClick={() => removeUserInfo(authKey)} danger type="primary">
          Logout
        </Button>
      </Link>
    ),
    key: "login",
  },
];

const Navbar: React.FC = () => {
  const [role, setRole] = useState(null);
  const router = useRouter();
  const [current, setCurrent] = useState("mail");
  const pathname = usePathname();

  useEffect(() => {
    const { role } = getUserInfo() as any;
    role ? setRole(role) : setRole(null);
  }, [pathname]);

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      {role ? (
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={authItems}
        />
      ) : (
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      )}
    </>
  );
};

export default Navbar;
