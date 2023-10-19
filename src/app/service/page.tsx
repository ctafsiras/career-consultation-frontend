"use client";
import ServiceCard from "@/components/ui/ServiceCard";
import { useServicesQuery } from "@/redux/api/serviceApi";
import { Input, Skeleton } from "antd";
import { useState } from "react";
const { Search } = Input;

export default function ServicesPage() {

  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useServicesQuery({ limit: 100, searchTerm });
  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bold",
          margin: "20px",
        }}
      >
        Our All Services
      </h2>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        style={{ marginBottom: 15 }}
        onSearch={(value) => setSearchTerm(value)}
      />
      {isLoading ? (
        <Skeleton style={{ padding: 20 }} loading={isLoading} avatar active />
      ) : data?.data?.length === 0 ? (
        <div>No services available</div>
      ) : (
        <ServiceCard data={data?.data} />
      )}
    </div>
  );
}
