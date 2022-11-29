import { Modal, Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div
      show={true}
      className="d-flex bg-none justify-content-center align-items-center"
      style={{
        marginTop: '100px',
      }}>
      <Spinner animation="border" />
    </div>
  );
};

export default Loading;
