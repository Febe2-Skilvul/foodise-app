import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <>
      <div className="col mt-5 d-flex w-100 flex-column justify-content-center align-items-center mb-5 alert-null ">
        <img
          src="/images/thum-none-food.png"
          className="img-thumbnail"
          width="350"
          height="350"
          alt=""
        />
        <h5 className="mt-5 text-gray">Makanan Tidak ditemukan</h5>
        <Button className="button-main">home</Button>
      </div>
    </>
  );
};

export default Notfound;
