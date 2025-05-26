import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, NavigationType, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (user) {
    return children;
    
  }
  
  const location = useLocation()
  if (loading) {
    return (<div className="flex">
       <span className="loading loading-dots loading-lg"></span>
       <span className="loading loading-dots loading-lg"></span>
       <span className="loading loading-dots loading-lg"></span>
       <span className="loading loading-dots loading-lg"></span>
 
    </div>)
      
     
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
