import {useState} from "react"
import Search from "./components/Search";
import Sentence from "./components/Sentence";
import Footer from "./components/Footer";
import {all} from "./data";

function App() {
  const [results, setResults] = useState(all);

  const search = (text: string): void => {
    const ltext = text.toLowerCase();
    const filtered = all.filter((item) => item.keyword.includes(ltext));
    setResults(filtered);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="gap-2 grid grid-cols-1 justify-items-center">
      <Search onSearch={search}/>
      {
        results.map((item) => (
          <Sentence key={item.id} item={item} />
        ))
      }
      <Footer />
    </div>
  )
}

export default App;
