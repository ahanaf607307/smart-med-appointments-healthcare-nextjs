import Banner from "@/components/Banner/Banner";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import OurService from "@/components/OurServices/OurService";
import Ourteam from "@/components/OurTeam/Ourteam";
import ReviewAndRating from "@/components/ReviewAndRating/ReviewAndRating";
import Stat from "@/components/Statsection/Stat";
import TopRatedDoctors from "@/components/TopRatedDoctors/TopRatedDoctors";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* Why Choose Us */}
      <WhyChooseUs />

      <Stat></Stat>
      <OurService></OurService>

      {/* Top Rated Doctors */}
      <TopRatedDoctors />
      <Ourteam></Ourteam>
      <NewsLetter />
      <ReviewAndRating />
    </div>
  );
}
