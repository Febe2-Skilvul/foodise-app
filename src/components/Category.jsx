import { Stack } from 'react-bootstrap';
import { categories } from '../config/category';
import CategoryItem from './atoms/ItemCategory';

const Category = () => {
  return (
    <Stack className="d-flex flex-row align-items-center justify-content-evenly category">
      {categories.map((item, i) => {
        return (
          <CategoryItem
            key={i}
            icon={item.icon}
            name={item.name}
            iconB={item.iconB}
          />
        );
      })}
    </Stack>
  );
};

export default Category;
