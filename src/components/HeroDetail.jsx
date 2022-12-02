import { Stack } from 'react-bootstrap';

const HeroDetail = ({ image, name, desc }) => {
  return (
    <Stack className="d-flex p-5 align-items-center  flex-row flex-wrap gap-5">
      <div>
        <img
          src={image}
          alt="food"
          className="img-fluid rounded bg-none"
        />
      </div>
      <div
        className="d-flex flex-column"
        style={{
          maxWidth: '500px',
        }}>
        <p
          style={{
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '30px',
            color: '#000',
          }}>
          {name}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: desc,
          }}></div>
      </div>
    </Stack>
  );
};

export default HeroDetail;
