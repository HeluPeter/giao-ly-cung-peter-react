import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import QuizList from "../components/QuizList";
import FeaturedQuiz from "../components/FeaturedQuiz";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      <HeroSection />
      <QuizList />
      <FeaturedQuiz />
      <AboutSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;