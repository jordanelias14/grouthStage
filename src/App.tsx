import "./App.css";
import GrowthStage from "./components/GrowthStage/growthStage";

function App() {
  return (
    <>
      <div className="home-container">
        <div className="left-container">
          <div className="left-line"></div>
          <div className="title">
            <h1>Gráfico climatológico de volume de chuvas e temperaturas:</h1>
            <h4>
              Acompanhe as estatísticas do período de{" "}
              <p>31/12/2021 até 24/05/2022</p>
            </h4>
          </div>
        </div>
        <div className="right-container">
          <GrowthStage />
        </div>
      </div>
    </>
  );
}

export default App;
