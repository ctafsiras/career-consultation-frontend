"use client";

import { useUserProfileQuery } from "@/redux/api/userApi";

const ProfilePage = () => {
  const { data, isLoading } = useUserProfileQuery({});

  return (
    <div style={{ width: "auto", textAlign: "center" }}>
      <h1>Welcome back to your profile</h1>
      <div style={{ display: "inline-flex", gap: "50px", marginTop: "20px" }}>
        {!isLoading && (
          <>
            <h1>Name: {data?.data?.name}</h1>
            <h1>Email: {data?.data?.email}</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
