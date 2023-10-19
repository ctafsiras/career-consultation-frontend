import { Button, Card, Col, Row } from "antd";
import { useState } from "react";
import BookingModal from "./BookingModal";
import Image from "next/image";
import ServiceImage from "@/assets/services.jpg";

export default function ServiceCard({ data }: { data: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Row gutter={[20, 20]} justify="center">
      {data?.map((service: any) => (
        <Col color="red" key={service.id} span={8}>
          <Card
            bordered={true}
            cover={<Image alt="Blog" src={ServiceImage} height={200} />}
            title={service.name}
          >
            <p>{service.description}</p>
            <h4>Price: ${service.price}</h4>
            <Button onClick={showModal} type="primary">
              Book
            </Button>
            <BookingModal
              isModalOpen={isModalOpen}
              serviceId={service.id}
              setIsModalOpen={setIsModalOpen}
              handleCancel={handleCancel}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
}
