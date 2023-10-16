import { useServicesQuery } from "@/redux/api/serviceApi";

const AvailableServices = () => {
  const { data } = useServicesQuery({});
  console.log(data);
  return (
    <div>
      {/* {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.map((service: any) => (
            <div key={service.id}>
              <div>{service.name}</div>
              <div>{service.description}</div>
              <div>{service.price}</div>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default AvailableServices;
