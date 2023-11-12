import TopNav from "./Components/topnav";
import Header from "./Components/header";
import "./index.css";
import Content from "./Components/content";
import Slider from "./Components/slider";
import Barcode from "./Components/barcode"
import SubNavMobile from "./Components/subnavmobile"

function App() {
  return (
    <>
      <main>
        <TopNav />
        <Header />
        <Content />
        <Slider />
        <Barcode />
        <SubNavMobile />
        {/* this is a test section for menu scroll action */}
      <section className="h-[500vh]"></section>
      </main>
    </>
  );
}

export default App;
