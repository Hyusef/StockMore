import "./App.css";
import Drawers from "./Drawers";
import ButtonAppBar from "./Appbar";
import Closecard from "./components/Closecard";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import News from "./components/News";
import Graph from "./components/Graph";
import Mainstocks from "./components/Mainstocks";
import Addstock from "./components/Addstock";
import Comparestock from "./components/Comparestock";
import { useState } from "react";
const queryClient = new QueryClient();

function App() {
  const [open, setOpen] = useState(false);
  const [stockArr, setStockArr] = useState([]);

  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };

  const handleArray = (ele) => {
    if (stockArr.includes(ele)) {
      return;
    }
    setStockArr((oldArray) => [...oldArray, ele]);
  };

  const dHand = (ele) => {
    setStockArr(() => stockArr.filter((el) => el != ele));
  };


  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ButtonAppBar toggleDrawer={toggleDrawer} />
        <div className="flexy">
          <Drawers toggleDrawer={toggleDrawer} open={open} />
          <Routes>
            <Route
              path="/"
              element={<Mainstocks stockArr={stockArr} dHand={dHand} />}
            />
            <Route
              path="/compare"
              element={<Comparestock stockArr={stockArr} />}
            />
            <Route
              path="Add"
              element={<Addstock handleArray={handleArray} />}
            />
            <Route path="/news" element={<News />} />
            <Route
              path="/*"
              element={<h1>Invalid URL please enter a valid URL</h1>}
            />
          </Routes>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
