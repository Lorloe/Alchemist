import React ,{useEffect, useState}from "react";
import { Route,Routes } from "react-router";
import Home from "./pages/Home";
import Hub from "./pages/Hub";
import Periodic from "./pages/Periodic";
import Authentication from "./pages/Auth";
import Course from "./pages/Course";
import Calc from "./pages/Calc";
import axios from "axios";
import Lesson from "./pages/Lesson";
import User from "./pages/User";
import Multi from "./pages/Multi";
import { AuthContext } from "./storage/auth-context";
let config = {
   baseURL:"http://localhost:5000/api",
   withCredentials:true
}
const App = () => {
  const [isLogged , setLogged] = useState(false);
  const [user,setUser] = useState(undefined);
  
  return (
 <React.Fragment>
   <AuthContext.Provider value={{isLogged,setLogged,user,setUser}}>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/hub" element={<Hub/>} />
       <Route path="/periodic" element={<Periodic/>} />
       <Route path="/course/:id" element={<Course/>} />
       <Route path="/calc" element={<Calc/>} />
       <Route path="/user" element={<User/>} />
       <Route path="/multi/:id" element={<Multi/>} />
       <Route path="/lesson/:id/:index" element={<Lesson/>} />
       
       {/* <Route path="/auth"  >
             <Route index element={<Authentication/>}/>
             <Route path=":switch" element={<Authentication/>}/>
        </Route> */}
        <Route path="/auth/:switch" element={<Authentication/>}/>

    
      </Routes>
      </AuthContext.Provider>
 </React.Fragment>
  );
};

export default App;
