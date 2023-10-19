"use client";

import {
  useUpdateUserMutation,
  useUserProfileQuery,
} from "@/redux/api/userApi";
import { Button, Input, Space, message } from "antd";
import { useState } from "react";

const ProfileEditPage = () => {
  const { data, isLoading } = useUserProfileQuery({});
  const [name, setName] = useState(data?.data?.name);
  const [updateUser] = useUpdateUserMutation();
  const handleUpdate = async (e: any) => {
    e.preventDefault();
    const res = await updateUser({
      id: data?.data?.id,
      body: { name },
    }).unwrap();
    message.success("Update success");
    console.log(res);
  };

  return (
    <div style={{ width: "auto", textAlign: "center" }}>
      <h1>Update your profile</h1>
      <div style={{ display: "inline-flex", gap: "50px", marginTop: "20px" }}>
        {!isLoading && (
          <>
            <Space direction="vertical" size="middle">
              <Space.Compact style={{ width: "100%" }}>
                <Input
                  addonBefore="Email"
                  defaultValue={data?.data?.email}
                  disabled
                />
              </Space.Compact>
              <Space.Compact style={{ width: "100%" }}>
                <Input
                  addonBefore="Name"
                  defaultValue={data?.data?.name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Button onClick={handleUpdate} type="primary">
                  Update
                </Button>
              </Space.Compact>
            </Space>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileEditPage;
