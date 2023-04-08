import React ,{useEffect, useState}from "react";
import { Route,Routes } from "react-router";
import Home from "./pages/Home";
import Hub from "./pages/Hub";
import Periodic from "./pages/Periodic";
import Authentication from "./pages/Auth";
import Course from "./pages/Course";

const App = () => {
  return (
 <React.Fragment>
     <Routes>
      
       <Route path="/" element={<Home/>} />
       <Route path="/hub" element={<Hub/>} />
       <Route path="/periodic" element={<Periodic/>} />
       <Route path="/course" element={<Course/>} />
       {/* <Route path="/auth"  >
             <Route index element={<Authentication/>}/>
             <Route path=":switch" element={<Authentication/>}/>
        </Route> */}
        <Route path="/auth/:switch" element={<Authentication/>}/>

    
      </Routes>
 </React.Fragment>
  );
};

export default App;
