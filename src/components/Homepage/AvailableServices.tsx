"use client";
import { useServicesQuery } from "@/redux/api/serviceApi";
import { Avatar, Card, Col, Row, Skeleton } from "antd";
import ServiceCard from "../ui/ServiceCard";
const { Meta } = Card;
const AvailableServices = () => {
  const { data, isLoading } = useServicesQuery({ limit: 3 });
  console.log("fdjsf", data);
  if (isLoading) return <Skeleton style={{padding: 20}} loading={isLoading} avatar active />;

  if (data?.data?.length === 0) return <div>No services available</div>;
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
        Our Latest Services
      </h2>
      <ServiceCard data={data?.data} />
    </div>
  );
};

export default AvailableServices;