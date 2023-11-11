import TopNav from "./Components/topnav";
import Content from "./Components/content";
import "./index.css";

function App() {
  return (
    <>
      <main>
        <TopNav />
        <Content />
        {/* this is a test section for menu scroll action */}
        <section className="h-[400vh]"></section>
      </main>
    </>
  );
}

export default App;
