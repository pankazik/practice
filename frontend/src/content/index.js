import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Services } from "./services";
import { ServiceForm } from "./form";
import { Health } from "./health";
export const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/addservice" element={<ServiceForm />}></Route>
      <Route path="/health" element={<Health />}></Route>
    </Routes>
  );
};
