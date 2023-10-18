import AppHeader from "@/components/Homepage/AppHeader";
import AvailableServices from "@/components/Homepage/AvailableServices";
import FAQ from "@/components/Homepage/FAQ";
import LatestNews from "@/components/Homepage/LatestNews";
import Feedback from "@/components/Homepage/Review";

const HomePage = () => {
  return (
    <>
      <AppHeader />
      <AvailableServices />
      <Feedback />
      <LatestNews />
      <FAQ />
    </>
  );
};

export default HomePage;
