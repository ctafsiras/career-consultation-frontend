import { Button, Card, Col, Row } from "antd";

export default function ServiceCard({ data }: { data: any }) {
  return (
    <Row gutter={[20, 20]} justify='center' >
      {data?.map((service: any) => (
        <Col color="red" key={service.id} span={8}>
          <Card title={service.name} bordered={true}>
            <p>{service.description}</p>
            <h4>Price: ${service.price}</h4>
            <Button type="primary">Book</Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
