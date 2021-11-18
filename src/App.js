import "./App.css";
import { Body } from "./components/molecules/Body/Body";
import { Header } from "./components/molecules/Header/Header";
import { Sidebar } from "./components/molecules/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <Header />
        <div className="main-content">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
