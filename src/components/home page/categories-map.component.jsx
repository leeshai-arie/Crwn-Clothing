import "./categories-map.styles.scss";

import CategoryItem from "../category-item/category-item.component";

const CategoriesMap = ({ categories }) => {
  return (
    <div className="categories-map-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoriesMap;
