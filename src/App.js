import "./App.css";
import Giphy from "./components/Giphy";
import Search from "./components/Search";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <div className="App">
        <Search />
        <Giphy />
      </div>
    </SearchProvider>
  );
}

export default App;
