import type { MenuProps } from "antd";
import { ProfileOutlined } from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/profile`}>Account Profile</Link>,
          key: `profile`,
        },
        {
          label: <Link href={`/profile/edit`}>Update Profile</Link>,
          key: `edit-profile`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
  ];

  const userSidebarItems: MenuProps["items"] = [...defaultSidebarItems];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
