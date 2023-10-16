import { Button, Card, Col, Row } from "antd";

export default function BlogCard({ data }: { data: any }) {
  return (
    <Row gutter={[20, 20]} justify='center' >
      {data?.map((blog: any) => (
        <Col color="red" key={blog.title} span={8}>
          <Card title={blog.name} bordered={true}>
            <p>{blog.body}</p>
            <Button type="primary">Read more</Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
