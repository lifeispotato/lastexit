import AppRouter from "./routes/router";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center", backgroundColor: "#f1f1f1" }}>
      <AppRouter />
    </div>
  );
}

export default App;
