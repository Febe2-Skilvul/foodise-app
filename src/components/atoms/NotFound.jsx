import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <>
      <div className="col mt-5 d-flex w-100 flex-column justify-content-center align-items-center mb-5 alert-null border border-dark">
        <img
          src="/images/thum-none-food.png"
          className="img-thumbnail"
          width="350"
          height="350"
          alt=""
        />
        <h4 className="mt-5 color-primary">
          Makanan Tidak ditemukan
        </h4>
      </div>
    </>
  );
};

export default Notfound;
