"use client";

import { Avatar, Card, Col, Row, Skeleton } from "antd";
import { useBlogsQuery } from "@/redux/api/newsApi";
import BlogCard from "../ui/BlogCard";
const { Meta } = Card;
const LatestNews = () => {
  const { data, isLoading } = useBlogsQuery({});
  if (isLoading)
    return (
      <Skeleton style={{ padding: 20 }} loading={isLoading} avatar active />
    );

  if (data?.data?.length === 0) return <div>No 
    articles available</div>;
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
        Our Latest News
      </h2>
      <BlogCard data={data?.data} />
    </div>
  );
};

export default LatestNews;
