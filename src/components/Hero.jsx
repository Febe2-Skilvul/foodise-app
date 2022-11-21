import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { services } from '../config';

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="cardHero card border-0">
          <h2>Your Food</h2>
          <h2>
            Your <span>Choice</span>{' '}
          </h2>
          <p className="fs-6">
            {' '}
            Save Your Health with Your Food Choice
          </p>
        </div>
        <img className="img-fluid " src="/images/Hero.png" alt="" />
      </div>
      <Stack className="d-flex flex-wrap flex-md-row justify-content-around">
        {services.map((btn, index) => (
          <Button
            key={`btnLanding-${index}`}
            variant="outline-grey"
            className="hero mx-1">
            <div className="d-flex align-items-center ">
              <p
                className="tx-grey my-auto"
                style={{
                  fontWeight: '600',
                }}>
                {btn.text1}
              </p>
              <p
                className="mx-2 my-auto"
                style={{
                  color: '#3bacb6',
                  fontWeight: '600',
                }}>
                {btn.text2}
              </p>
              <img src={btn.icon} alt="" />
            </div>
          </Button>
        ))}
      </Stack>
    </>
  );
}

export default Hero;
