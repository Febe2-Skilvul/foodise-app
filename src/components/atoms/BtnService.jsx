import { Button } from 'react-bootstrap';

const BtnService = ({ text1, text2, icon }) => {
  return (
    <Button
      variant="outline-grey"
      className="btn-service mx-1 d-flex align-items-center justify-content-evenly ">
      <p
        className="tx-grey my-auto"
        style={{
          fontWeight: '600',
          width: '50px',
          textAlign: 'start',
        }}>
        {text1}
      </p>
      <p
        className="mx-2 my-auto"
        style={{
          color: '#3bacb6',
          fontWeight: '600',
          width: '100px',
        }}>
        {text2}
      </p>
      <img src={icon} alt="" />
    </Button>
  );
};

export default BtnService;
