import SignUpPage from "@/components/Auth/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Consultation | Sign Up",
};

const SignUp = () => {
  return (
    <>
      <SignUpPage />
    </>
  );
};

export default SignUp;
