import { Routes, Route } from "react-router-dom";

import Navigation from "../navigation/navigation.compnent";
import HomePage from "../home page/home-page.component";

const Shop = () => {
  return (
    <div>
      <h2>iam the shop page</h2>
    </div>
  );
};

const Directory = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default Directory;
