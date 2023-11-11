import TopNav from "./Components/topnav";
import Content from "./Components/content";
import "./index.css";

function App() {
  return (
    <>
      <main>
        <TopNav />
        <Content />
        <section className="h-[400vh]"></section>
      </main>
    </>
  );
}

export default App;
