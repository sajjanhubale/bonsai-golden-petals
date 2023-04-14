import HomeCover from "./components/HomeCover";
import PlantList from "./components/PlantList";
import AppNavBar from "./components/AppNavBar";
import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import Home from "./Pages/Home";
import { ContactUs } from "./Pages/ContactUs";
import PlantDetails from "./Pages/PlantDetails";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" name="Home" element={<AppLayout />}>
          <Route index element={<ContactUs />} path="/contact" />
          <Route index element={<Home />} path="/" />
          <Route index element={<PlantDetails />} path="/plant/:plantId" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
