"use client";
import { Button, Col, Input, Row, message } from "antd";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";

import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useAddUserMutation, useLoginUserMutation } from "@/redux/api/userApi";

type FormValues = {
  id: string;
  password: string;
};

const SignUpPage = () => {
  const [addUser] = useAddUserMutation();
  const router = useRouter();

  // console.log(isLoggedIn());

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await addUser({ ...data }).unwrap();
      console.log(res);
      if (res?.token) {
        storeUserInfo({ accessToken: res?.token });
        router.push("/");
        message.success("User created successfully!");
      } else {
        message.error("Invalid credentials!");
      }
      // console.log(res);
    } catch (err: any) {
      console.error(err.message);
      message.error("Invalid credentials!");
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          Create Your Account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="name"
                type="text"
                size="large"
                label="User Name"
                required
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="email"
                type="text"
                size="large"
                label="User Email"
                required
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
                required
              />
            </div>
            <Row justify="end">
              <Button
                type="link"
                onClick={() => {
                  router.push("/login");
                }}
              >
                Already have an account?
              </Button>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Row>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default SignUpPage;
