
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PartnersLayout from "./Layouts/PartnersLayout";
import DeliveryHome from "./components/Home/Delivery/DeliveryHome";
import PartnerHome from "./Pages/Partner/PartnersHome";
import Lead from "./Pages/Lead/Lead";
import SellersHome from "./Pages/Sellers/SellersHome";
import WareHouse from "./Pages/Warehouse/WareHouse";
import Blogs from "./Pages/Blogs/Blogs";
import BlogsLayout from "./Pages/Blogs/BlogsLayout";
import DataWarehouse from "./Pages/Blogs/InnerPages/DataWareHouseDbt/DataWarehouse";
import Resources from "./Pages/Resources/Resources";
import Contact from "./Pages/Contact/Contact";
import Phone from "./Pages/Phone/Phone";
import Security from "./Pages/Security/Security";
import Value from "./Pages/Value/Value";
import AnnualReturn from "./Pages/Resources/InnerPages/AnnualReturn";



function App() {
  return (
  <BrowserRouter>
      <Routes>
       
         <Route path="" element={<BlogsLayout/>}>
         <Route path="/" element={<DeliveryHome/>}/>
         <Route path="/partner" element={<PartnerHome/>}/>
         <Route path="/blog/:slug" element={<DataWarehouse/>} />
         <Route path="/blog" element={<Blogs/>}/>
         <Route path="/resources" element={<Resources/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/mobile" element={<Phone/>}/>
         <Route path="/security" element={<Security/>}/>
         <Route path="/value" element={<Value/>}/>
         <Route path="/:slug" element={<AnnualReturn/>}/>





        
        </Route>
        
        
       
        <Route path="/lead" element={<Lead/>}/>
        <Route path="/seller" element={<SellersHome/>}/>
        <Route path="/warehouse" element={<WareHouse/>}/>
      
      </Routes>
    </BrowserRouter>

  );
}

export default App;
