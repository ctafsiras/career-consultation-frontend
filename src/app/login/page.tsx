import LoginPage from "@/components/Auth/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Consultation | Login",
};

const Login = () => {
  return (
    <>
      <LoginPage />
      
    </>
  );
};

export default Login;
