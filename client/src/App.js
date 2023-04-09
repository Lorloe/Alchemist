import React ,{useEffect, useState}from "react";
import { Route,Routes } from "react-router";
import Home from "./pages/Home";
import Hub from "./pages/Hub";
import Periodic from "./pages/Periodic";
import Authentication from "./pages/Auth";
import Course from "./pages/Course";
import Calc from "./pages/Calc";
import User from "./pages/User";
import { AuthContext } from "./storage/auth-context";

const App = () => {
  const [isLogged , SetLogged] = useState(false);
  const [user,setUser] = useState(undefined);
  console.log("HI");
  return (
 <React.Fragment>
   <AuthContext.Provider value={{isLogged,SetLogged,user,setUser}}>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/hub" element={<Hub/>} />
       <Route path="/periodic" element={<Periodic/>} />
       <Route path="/course" element={<Course/>} />
       <Route path="/calc" element={<Calc/>} />
       <Route path="/user" element={<User/>} />
       
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
