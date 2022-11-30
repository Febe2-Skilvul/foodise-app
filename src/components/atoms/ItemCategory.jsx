import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { filterCtx } from '../../app/context/FilterContext';
import Icon from './Icon';

const CategoryItem = (props) => {
  const { name, icon, iconB, value } = props;
  const { category, setCategory } = useContext(filterCtx);

  const active = {
    color: '#000',
    transition: '1.3s',
  };

  return (
    <Link
      to={value === 0 ? '/home' : '/category'}
      className="text-decoration-none">
      <div
        onClick={() => setCategory(value)}
        className="d-flex align-items-center flex-column"
        style={{
          width: '100px',
          cursor: 'pointer',
          marginLeft: '20px',
        }}>
        <Icon
          image={category === value ? `${iconB}` : `${icon}`}
          alt={name}
        />
        <p
          className="text-item-gray"
          style={category === value ? active : null}>
          {name}
        </p>
      </div>
    </Link>
  );
};

export default CategoryItem;
