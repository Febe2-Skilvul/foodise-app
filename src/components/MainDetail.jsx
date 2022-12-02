import React, { useContext, useEffect, useState } from 'react';
import { Alert, Button, Stack } from 'react-bootstrap';
import { filterCtx } from '../app/context/FilterContext';
import { loginCtx } from '../app/context/LoginContext';
import { porsiCtx } from '../app/context/PorsiContext';
import ButtonLoad from './atoms/ButtonLoad';
import { setNewFoodTracking } from '../service/tracking';

const MainDetail = ({ food }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const { porsi, handlePlus, handleMinus } = useContext(porsiCtx);
  const { setUpdate } = useContext(filterCtx);
  const { user } = useContext(loginCtx);
  const [calori, setCalori] = useState(0);
  const [carbon, setCarbon] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleCount = () => {
    setCalori(() => food.cal * porsi);
    setCarbon(() => food.carbon * porsi);
  };
  const handleAddTracking = async () => {
    setIsLoading(true);
    let body = {
      food: [
        {
          foodId: food._id,
          portion: porsi,
        },
      ],
    };
    const res = await setNewFoodTracking(body, user.token).finally(
      () => setIsLoading(false)
    );

    if (res.status < 300) {
      setOpen(true);
      setUpdate((prev) => !prev);
    }
    if (res.status > 300) {
      setError(true);
    }
  };
  useEffect(() => {
    handleCount();
  }, [porsi]);
  return (
    <Stack className="d-flex justify-content-center align-items-center">
      {open && (
        <Alert
          variant="success"
          onClose={() => setOpen(false)}
          dismissible>
          Makanan Berhasil Ditambahkan
        </Alert>
      )}
      {error && (
        <Alert
          variant="danger"
          onClose={() => setError(false)}
          dismissible>
          Makanan Tidak Berhasil Ditambahkan
        </Alert>
      )}

      <div className="carbon-card d-flex justify-content-between">
        <div>
          <div className="d-flex flex-row flex-wrap tabel-data">
            <div
              className="col-6 p-3"
              style={{
                borderRight: '1px solid #bfbfbf',
              }}>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  margin: '0',
                }}>
                Calori
              </p>
              <p>{calori === 0 ? food.cal : calori} kkal</p>
            </div>
            <div className="col-6 p-3">
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  margin: '0',
                }}>
                Carbon
              </p>{' '}
              {carbon === 0 ? food.carbon : carbon.toFixed(1)} kgC02
            </div>
            <div
              className="p-3 col-12 d-flex flex-column"
              style={{
                borderTop: 'solid 1px #bfbfbf',
              }}>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  margin: '0',
                }}>
                Porsi
              </p>
              <div className=" w-100 d-flex flex-row align-items-center justify-content-between">
                <Button
                  variant="light"
                  className="btn-count shadow-sm"
                  onClick={() => handleMinus()}>
                  -
                </Button>
                <p
                  style={{
                    margin: '0',
                  }}>
                  {porsi}
                </p>
                <Button
                  variant="light"
                  className="btn-count shadow-sm"
                  onClick={() => handlePlus()}>
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
        {isLoading ? (
          <ButtonLoad />
        ) : (
          <Button
            onClick={() => handleAddTracking()}
            className="button button-main w-100"
            type="button">
            Tambah
          </Button>
        )}
      </div>
    </Stack>
  );
};

export default MainDetail;
