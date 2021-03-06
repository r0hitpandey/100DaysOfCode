import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from"./components/TextForm";


function App() {
  return (
    // this portion is JSX
    <>
      <Navbar title="TextUtils" AboutText="About us" />
      <div className="container my-3">
      <TextForm heading="Enter text to analyze" />
      </div>
    </>
  );
}

export default App;
