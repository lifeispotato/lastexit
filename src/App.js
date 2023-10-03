import AppRouter from "./routes/router";
import "./App.css";
import ScrollToTop from "./util/scrollToTop";

function App() {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center", backgroundColor: "#f1f1f1" }}>
      <ScrollToTop />
      <AppRouter />
    </div>
  );
}

export default App;
