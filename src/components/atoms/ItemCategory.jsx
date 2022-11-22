import Icon from './Icon';

const CategoryItem = (props) => {
  const { name, icon, iconB } = props;

  const category = 'breakfast';
  const active = {
    color: '#000',
    transition: '1.3s',
  };

  return (
    <div
      className="d-flex align-items-center flex-column"
      style={{
        width: '100px',
        cursor: 'pointer',
        marginLeft: '20px',
      }}>
      <Icon
        image={category === name ? `${iconB}` : `${icon}`}
        alt={name}
      />
      <p
        className="text-item-gray"
        style={category === name ? active : null}>
        {name}
      </p>
    </div>
  );
};

export default CategoryItem;
