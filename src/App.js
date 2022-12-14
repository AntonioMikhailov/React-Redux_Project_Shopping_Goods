import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing ";
function App() {
  return (
<div className='App' >
<Header/>
<Routes>
  <Route path={'/'} element={<ProductListing/>} />
  <Route path={'/product/:productId'} element={<ProductDetail/>} />
</Routes>
</div>
  );
}
export default App;
