export const getBaseUrl = (): string => {
  // return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://career-consultation-backend.vercel.app/api/v1"
  );
};
