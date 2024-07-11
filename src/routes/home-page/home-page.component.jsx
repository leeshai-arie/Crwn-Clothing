import CategoriesMap from "../../components/home page/categories-map.component";

import { categories } from "../../data/categories-data";

const HomePage = () => {
  return (
    <div>
      <CategoriesMap categories={categories} />
    </div>
  );
};

export default HomePage;
