import { Stack } from 'react-bootstrap';
import { categories } from '../config/category';
import CategoryItem from './atoms/ItemCategory';

const CategoryBar = () => {
  return (
    <Stack className="d-flex flex-row align-items-center justify-content-evenly category zIndex-100">
      {categories.map((item, i) => {
        return (
          <CategoryItem
            key={i}
            icon={item.icon}
            name={item.name}
            iconB={item.iconB}
            value={item.value}
          />
        );
      })}
    </Stack>
  );
};

export default CategoryBar;
