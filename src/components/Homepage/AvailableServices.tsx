"use client";
import { useServicesQuery } from "@/redux/api/serviceApi";
import { Avatar, Card, Col, Row, Skeleton } from "antd";
import ServiceCard from "../ui/ServiceCard";
const { Meta } = Card;
const AvailableServices = () => {
  const { data, isLoading } = useServicesQuery({ limit: 3 });
  console.log(data);
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
      {isLoading ? (
        <Skeleton style={{ padding: 20 }} loading={isLoading} avatar active />
      ) : data?.data?.length === 0 ? (
        <div>No services available</div>
      ) : (
        <ServiceCard data={data?.data} />
      )}
    </div>
  );
};

export default AvailableServices;
