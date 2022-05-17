
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddService from './Pages/AddService/AddService';
import Blog from './Pages/Blog/Blog';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Form/Login/Login';
import RequireAuth from './Pages/Form/Login/RequireAuth/RequireAuth';
import Signup from './Pages/Form/Signup/Signup';
import Home from './Pages/Home/Home';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import Order from './Pages/Order/Order';

import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={<InventoryDetail></InventoryDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/checkout/:inventoryId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>}>
        </Route>
        <Route path="/orders" element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        <Route path='/addinventory' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>}>
        </Route>
        <Route path='/manageinventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>}>
        </Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>}>
        </Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
