import AppRouter from "./routes/router";
import "./App.css";
import ScrollToTop from "./util/scrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center", backgroundColor: "#f1f1f1" }}>
      <ScrollToTop />
      <AppRouter />
      <ToastContainer className="toast" position="top-center" autoClose={1000} hideProgressBar={true} />
    </div>
  );
}

export default App;
