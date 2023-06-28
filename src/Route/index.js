import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FooterComponent from "../Components/Footer";
import HeaderComponent from "../Components/Header";
import HomeContainer from "../Container/Home";
import ContactContainer from "../Container/Contact";
import DetailsContainer from "../Container/Details";
import MoviesContainer from "../Container/Movies";
import TvSeriesContainer from "../Container/TvSeries";
import SearchContainer from "../Container/Search";
import MusicContainer from "../Container/Music/index";
import SignUp from "../Components/Auth/Signup";
import Login from "../Components/Auth/Login";

const RouteComponent = () => {
  const [user, setUser] = useState(false);

  // Function to handle successful user login/signup
  const handleUserLogin = () => {
    setUser(true);
  };

  // Function to handle user logout
  const handleUserLogout = () => {
    setUser(false);
  };
  return (
    <>
      <BrowserRouter>
        {user ? (
          <>
            <HeaderComponent onLogout={handleUserLogout} />
            <Routes>
              <Route path="/" element={<HomeContainer />} />
              <Route path="/movies" element={<MoviesContainer />} />
              <Route path="/series" element={<TvSeriesContainer />} />
              <Route path="/search" element={<SearchContainer />} />
              <Route path="/contact" element={<ContactContainer />} />
              <Route path="/music" element={<MusicContainer />} />
              
              <Route
                path="/details/:movieid/:mediatype"
                element={<DetailsContainer />}
              />
            </Routes>
            <FooterComponent />
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<SignUp onLogin={handleUserLogin}  onLogout={handleUserLogout}/>} />
              <Route path="/login" element={<Login onLogin={handleUserLogin} onLogout={handleUserLogout} />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </> 
  );
};

export default RouteComponent;