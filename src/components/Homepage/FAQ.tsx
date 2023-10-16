"use client";
import { useServicesQuery } from "@/redux/api/serviceApi";
import { Avatar, Card, Col, Row, Skeleton } from "antd";
import { useFAQsQuery } from "@/redux/api/FAQApi";
import Accordion from "../ui/Accordion";
import Image from "next/image";
import QuestionImage from "@/assets/questions.jpg";

const FAQ = () => {
  const { data, isLoading } = useFAQsQuery({});
  if (isLoading)
    return (
      <Skeleton style={{ padding: 20 }} loading={isLoading} avatar active />
    );

  if (data?.data?.length === 0) return <div>No FAQs available</div>;
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
        Frequently Asked Questions
      </h2>
      <Row gutter={[150, 20]} justify='center' align='middle'>
        <Col span={12}>
          <Accordion items={data?.data} />
        </Col>
        <Col span={12}>
          <Image height={100} width={100} src={QuestionImage} alt="FAQ" layout="responsive"/>
        </Col>
      </Row>
    </div>
  );
};

export default FAQ;
