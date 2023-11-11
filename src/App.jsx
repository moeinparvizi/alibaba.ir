import TopNav from "./Components/topnav";
import Header from "./Components/header";
import "./index.css";
import Content from "./Components/content";

function App() {
  return (
    <>
      <main>
        <TopNav />
        <Header />
        {/* this is a test section for menu scroll action */}
        <Content />
      </main>
    </>
  );
}

export default App;
