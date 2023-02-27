import "./App.css";
import Drawers from "./Drawers";
import ButtonAppBar from "./Appbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import News from "./Pages/News";
import Dashboard from "./Pages/Dashboard";
import Addstock from "./Pages/AddStock";
import Comparestock from "./Pages/CompareStock";
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
    setStockArr(() => stockArr.filter((el) => el !== ele));
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
              element={<Dashboard stockArr={stockArr} dHand={dHand} />}
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
