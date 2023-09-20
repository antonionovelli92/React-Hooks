import Inizio from "./lezioni/1-useState/inizio/5-useState-contatore";
import Risultato from "./lezioni/1-useState/risultato/5-useState-contatore";


function App() {
  return (
    <div className="App">
      <section className="container text-center my-3">
        <Inizio />
        {/* uso dell'hr solo per motivi estetici */}
        <hr />
        {/* <Risultato /> */}
      </section>
    </div>
  );
}

export default App;
