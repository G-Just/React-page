import { Main } from "./components/main-contaner/Main";
import { Menu } from "./components/side-navbar/Menu";
import { TopNavbar } from "./components/top-navbar/TopNavbar";

function App() {
  return (
    <>
      <Menu />
      <div id="right">
        <TopNavbar />
        <Main />
      </div>
    </>
  );
}

export default App;
