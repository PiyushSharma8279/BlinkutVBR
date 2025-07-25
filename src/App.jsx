
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PartnersLayout from "./Layouts/PartnersLayout";


import DeliveryHome from "./components/Home/Delivery/DeliveryHome";
import PartnerHome from "./components/Home/Partner/PartnersHome";


function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<PartnersLayout/>} >
        <Route path="" element={<DeliveryHome/>}/>
        <Route path="/partner" element={<PartnerHome/>}/>
        
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
