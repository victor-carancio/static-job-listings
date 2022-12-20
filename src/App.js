import Cards from "./components/Cards";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="main-container">
      <Navbar />
      <Filters />
      <Cards />
    </main>
  );
}

export default App;
