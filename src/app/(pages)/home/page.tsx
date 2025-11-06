import RecordsSectionHome from "@/sections/home/recordsSectionHome/RecordsSectionHome";
import MainSectionHome from "@/sections/home/mainSectionHome/MainSectionHome";
import TestimonialsSectionHome from "@/sections/home/testimonialsSectionHome/TestimonialsSectionHome";
import AcademicLevelSectionHome from "@/sections/home/academicLevelSectionHome/AcademicLevelSectionHome";
import ChooseUsSectionHome from "@/sections/home/chooseUsSectionHome/ChooseUsSectionHome";
import CarouselSectionHome from "@/sections/home/carouselSectionHome/CarouselSectionHome";
import Footer from "@/components/global/footer/Footer";

export default function HomePage() {
  return (
    <>
      <MainSectionHome />
      <RecordsSectionHome />
      <TestimonialsSectionHome />
      <AcademicLevelSectionHome /> 
      <ChooseUsSectionHome />
      <CarouselSectionHome />
      <Footer />
    </>
  )
}
