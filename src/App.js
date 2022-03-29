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
  const [alert, setAlert] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [stockArr, setStockArr] = useState([]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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

  console.log(stockArr);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ButtonAppBar handleDrawerToggle={handleDrawerToggle} />
        <div className="flexy">
          <Drawers
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
            alert={alert}
          />
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
