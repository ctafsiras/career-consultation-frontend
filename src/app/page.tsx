import AppHeader from "@/components/Homepage/AppHeader";
import AvailableServices from "@/components/Homepage/AvailableServices";
import Navbar from "@/components/ui/Navbar";
import {useServicesQuery} from "@/redux/api/serviceApi";

const HomePage = () => {
  const { data } = useServicesQuery({});
  console.log(data);
  return (
    <>
      <AppHeader />
      {/* <AvailableServices /> */}
    </>
  );
};

export default HomePage;
