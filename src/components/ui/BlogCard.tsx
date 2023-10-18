import { Button, Card, Col, Row } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import BlogThumbnail from "@/assets/blogs.jpg";

export default function BlogCard({ data }: { data: any }) {
  return (
    <Row gutter={[20, 20]} justify="center">
      {data?.map((blog: any) => (
        <Col color="red" key={blog.title} span={8}>
          <Card
            title={blog.title}
            bordered={true}
            cover={<Image alt="Blog" src={BlogThumbnail} />}
          >
            <strong>Published on: {dayjs(blog.createdAt).format("MMMM DD, YYYY")}</strong>
            <p>{blog.body.slice(0, 100)}...</p>
            <Button style={{ marginTop: 20 }} type="dashed">
              Read more
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
