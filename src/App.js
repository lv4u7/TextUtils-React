import "./App.css";
import Nav from "./components/Nav.js";
import TextForm from "./components/TextForm.js";
function App() {
  return (
    <>
      <Nav title="TextUtils" aboutText="About" />
      <div className="container">
        <TextForm heading="Enter a text to analyze" />
      </div>
    </>
  );
}

export default App;
