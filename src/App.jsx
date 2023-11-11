import TopNav from "./Components/topnav";
import Header from "./Components/header";
import "./index.css";
import Content from "./Components/content";
import Slider from "./Components/slider";

function App() {
  return (
    <>
      <main>
        <TopNav />
        <Header />
        <Content />
        <Slider />
        {/* this is a test section for menu scroll action */}
        <section className="h-[200vh]"></section>
      </main>
    </>
  );
}

export default App;
