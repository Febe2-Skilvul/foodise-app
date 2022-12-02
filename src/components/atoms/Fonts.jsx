const TextOne = ({ children, colored }) => {
  return (
    <p
      style={{
        fontSize: '24px',
        fontWeight: '500',
        color: '#000',
      }}>
      {children}{' '}
      <span
        style={{
          color: '#3BACB6',
        }}>
        {colored}
      </span>{' '}
    </p>
  );
};

export { TextOne };
