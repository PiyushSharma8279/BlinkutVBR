
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PartnersLayout from "./Layouts/PartnersLayout";
import DeliveryHome from "./components/Home/Delivery/DeliveryHome";
import PartnerHome from "./components/Home/Partner/PartnersHome";
import Lead from "./components/Home/Lead/Lead";
import SellersHome from "./Pages/Sellers/SellersHome";
import WareHouse from "./Pages/Warehouse/WareHouse";
import Blogs from "./Pages/Blogs/Blogs";
import BlogsLayout from "./Pages/Blogs/BlogsLayout";
import DataWarehouse from "./Pages/Blogs/InnerPages/DataWareHouseDbt/DataWarehouse";
import WwcCategory from "./Pages/Blogs/WwcCategory/WwcCategory";


function App() {
  return (
  <BrowserRouter>
      <Routes>
       
         <Route path="" element={<BlogsLayout/>}>
         <Route path="/" element={<DeliveryHome/>}/>
         <Route path="/partner" element={<PartnerHome/>}/>
         <Route path="/blog/:slug" element={<DataWarehouse/>} />
         <Route path="/blog" element={<Blogs/>}/>
        
        </Route>
        
        
       <Route path="/wwc" element={<WwcCategory/>} />
        <Route path="/lead" element={<Lead/>}/>
        <Route path="/seller" element={<SellersHome/>}/>
        <Route path="/warehouse" element={<WareHouse/>}/>
      
      </Routes>
    </BrowserRouter>

  );
}

export default App;
