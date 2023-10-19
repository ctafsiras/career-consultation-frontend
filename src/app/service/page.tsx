import { useServicesQuery } from "@/redux/api/serviceApi";

export default function ServicesPage() {
  const { data, isLoading } = useServicesQuery({ limit: 3 });
  console.log(data);
  return <div>nohting is importing df</div>;
}
