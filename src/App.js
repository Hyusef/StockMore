import "./App.css";
import { lazy } from 'react';
import Drawers from "./components/Drawers";
import ButtonAppBar from "./components/Appbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoaderFallback from './components/LoaderFallback'

const Addstock = LoaderFallback(lazy(() => import("./Pages/AddStock")))
const News = LoaderFallback(lazy(() => import('./Pages/News')))
const Comparestock = LoaderFallback(lazy(() => import('./Pages/CompareStock')))
const Dashboard = LoaderFallback(lazy(() => import('./Pages/Dashboard')))

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
    console.log('mo');
  };


  const dHand = (ele) => {  
    setStockArr(() => stockArr.filter((el) => el !== ele));
  };


  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="flexy">
          <Drawers toggleDrawer={toggleDrawer} open={open} />
          <Routes>
            <Route
              path="/"
              element={<Dashboard handleArray={handleArray} stockArr={stockArr} dHand={dHand} />}
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
