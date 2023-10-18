"use client";

import { Avatar, Card, Carousel, Col, Empty, Row, Skeleton } from "antd";
import { useBlogsQuery } from "@/redux/api/newsApi";
import BlogCard from "../ui/BlogCard";
import { useFeedbacksQuery } from "@/redux/api/feedbackApi";
const Feedback = () => {
  const { data, isLoading } = useFeedbacksQuery({});
  if (isLoading)
    return (
      <Skeleton style={{ padding: 20 }} loading={isLoading} avatar active />
    );
  console.log(data);
  const contentStyle: React.CSSProperties = {
    minHeight: "260px",
    color: "#fff",
    lineHeight: "36px",
    textAlign: "center",
    background: "#364d79",
    padding: "20px 400px",
  };

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
        Client Feedbacks
      </h2>

      {data?.data?.length === 0 ? (
        <Empty description="Any Feedback has not published yet." />
      ) : (
        <Carousel autoplay>
          {data?.data?.map((feedback: any) => (
            <div key={feedback.id}>
              <p style={contentStyle}>{feedback.comment}  <h3>-{feedback?.user?.name}</h3></p>
            
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};
export default Feedback;
