import { Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TextOne } from './atoms/Fonts';
import Icon from './atoms/Icon';
import PortalButton from './atoms/PortalButton';

const ServicePortal = ({ user = ' ' }) => {
  return (
    <Stack className="p-4  p-3 mb-5 bg-body rounded d-flex flex-column justify-content-between align-items-start gap-5">
      <Stack className="d-flex flex-row justify-content-between">
        <TextOne colored={user}>Hii</TextOne>
        <Link to={'/booked'} className="text-decoration-none">
          <Button className="button-pill bg-white shadow-sm">
            <Icon image={'/icons/tracking.svg'} />
            <span className="d-none d-md-block">Tracking</span>
          </Button>
        </Link>
      </Stack>
      <Stack className="d-flex shadow rounded flex-row justify-content-between p-4">
        <PortalButton
          color={'#3BACB6'}
          value={2}
          icon={'/icons/food-bucket.svg'}
          name={'Food Today'}
        />
        <PortalButton
          color={'#EBB376'}
          value={100}
          icon={'/icons/calory.svg'}
          name={'Kalori'}
        />

        <PortalButton
          color={'#000000'}
          value={99}
          icon={'/icons/carbon.svg'}
          name={'Carbon'}
        />
      </Stack>

      {/* <CategoryBar /> */}
    </Stack>
  );
};

export default ServicePortal;