import { Container, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div
      style={{
        marginTop: '50px',
        backgroundColor: '#F5F5F5',
        width: '100%',
      }}>
      <Container className="d-flex flex-column flex-md-row bg-footer align-items-center pt-5 fluid ">
        <div className="col-3 my-auto">
          <img src="/images/foodise-logo.png" alt="" />
        </div>
        <Stack className="mt-2">
          <h6>Site Map</h6>
          <div className="d-flex flex-column align-items-start p-2 gap-1">
            <Link to={'/home'}>Home</Link>
            <Link to={'/favorite'}>Favourite</Link>
            <Link to={'/profile'}>Profile</Link>
            <Link to={'/recipe'}>Recipe</Link>
            <Link to={'/signup'}>Signup</Link>
          </div>
        </Stack>
        <Stack>
          <div className="d-flex flex-column align-items-start p-2 gap-1">
            <h6>Credit:</h6>
            <p>Icon by FontAwesome</p>
            <p>Photos by Unsplash </p>
            <p>Our Partner Danone </p>
            <p>Special Credit for Skilvul</p>
          </div>
        </Stack>
        <div className="pt-4 pb-2 d-flex flex-column gap-3">
          <div className="w-100 d-flex justify-content-center">
            <img
              src="/images/danone-thum.png"
              alt="danone"
              width={100}
              height={40}
            />
          </div>
          <p className="text-center">
            Copyright © Team FEBE 2 - Danone #Tech4Impact 2022 | All
            Right Reserved
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
