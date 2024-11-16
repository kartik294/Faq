import "./App.css";
import FAQ from "./Faq";
import data from "./data/faqData.json";

function App() {
  return (
    <div className="App">
      <FAQ data={data} />
    </div>
  );
}

export default App;
