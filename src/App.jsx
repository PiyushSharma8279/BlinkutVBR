
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PartnersLayout from "./Layouts/PartnersLayout";


import DeliveryHome from "./components/Home/Delivery/DeliveryHome";
import PartnerHome from "./components/Home/Partner/PartnersHome";
import Lead from "./components/Home/Lead/Lead";
import SellersHome from "./Pages/Sellers/SellersHome";


function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<PartnersLayout/>}>
        <Route path="" element={<DeliveryHome/>}/>
        <Route path="/partner" element={<PartnerHome/>}/>
        
        </Route>
        <Route path="/lead" element={<Lead/>}/>
        <Route path="/seller" element={<SellersHome/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
