import Api from "./Components/Api";
import Header from "./Components/Header";
import Meme from "./Components/form-input";
import "./Style/index.css";

function App() {
  return (
    <div className="main">
      <Header />
      <Meme />
      {/* <Api /> */}
    </div>
  );
}

export default App;
