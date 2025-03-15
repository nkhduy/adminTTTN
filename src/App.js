import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import HomeAdmin from "./admin/Home";
import LoginAdmin from "./admin/Login";
import ProductAdmin from "./admin/Product";
import AddproductAdmin from "./admin/Addproduct";
import Order from './admin/OrderHistory';
import AdminLayout from './admin/AdminLayout';
import UpdateProduct from './admin/UpdateProduct';

function App() {
  const isAuthenticated = localStorage.getItem("user");  ;


  // Component ProtectedRoute
  const ProtectedRoute = ({ element }) => {
    return isAuthenticated == null || isAuthenticated === "null" || isAuthenticated === "" 
      ? <Navigate to="/login" replace /> 
      : element;
  };

  useEffect(() => {
    
  }, []);

  return (
    <>
      <Routes>    
        {/* Admin Routes */}
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/*" element={<ProtectedRoute element={<AdminLayout />} />} >
          <Route path="home" element={<HomeAdmin />} />
          <Route path="product" element={<ProductAdmin />} />
          <Route path="addproduct" element={<AddproductAdmin />} />
          <Route path="order" element={<Order />} />
          <Route path="update/:productId" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
