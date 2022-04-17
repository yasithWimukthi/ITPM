import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import AddStaffMember from './Pages/StaffMembers/Add'
import ViewStaffMember from './Pages/StaffMembers/Viewall'
import AddShopItem from "./Pages/Shop/AddShopItem";
import ShopList from "./Pages/Shop/ShopList";
function App() {
  return (
    <div>
     <Header/>
      <div className='row m-0'>
      <div className='col-2 m-0 p-0 mh-100'>
        <SideBar/>
      </div>
      <div className="col-10">
          <div className="page-content">
              <Routes>
                <Route path="/StaffMembers/Add" element={<AddStaffMember />} />
                <Route path="/StaffMembers/View" element={<ViewStaffMember />} />
                <Route path="/shop/add" element={<AddShopItem />} />
                <Route path="/shop/list" element={<ShopList />} />
              </Routes>
          </div>
        </div>
    </div>
    </div>
  );
}

export default App;
