import TopNav from "./Components/topnav";
import Header from "./Components/header";
import "./index.css";
import Content from "./Components/content";
import Slider from "./Components/slider";
import Barcode from "./Components/barcode"
import SubNavMobile from "./Components/subnavmobile"
import YourQuestions from "./Components/yourquestions"
import Blit from "./Components/blit";
import Footer from "./Components/footer"

function App() {
  return (
    <>
      <main>
        <TopNav />
        <Header />
        <Content />
      </main>
        <Slider />
        <Barcode />
        <SubNavMobile />
        <YourQuestions />
        <Blit />
        {/* this is a test section for menu scroll action
      <section className="h-[500vh]"></section> */}
        <Footer />
    </>
  );
}

export default App;
