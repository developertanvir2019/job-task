import { Toaster } from "react-hot-toast";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Products from "./Component/Products";

function App() {
  return (
    <div className="app">
      <Products></Products>
      <Toaster></Toaster>
      <Footer></Footer>
    </div>
  );
}

export default App;
