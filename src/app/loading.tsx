import { Row, Space, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loading = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 54 }} spin />;
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      <Space>
        <Spin indicator={antIcon} />
      </Space>
    </Row>
  );
};

export default Loading;
