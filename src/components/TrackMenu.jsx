import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import Icon from './atoms/Icon';

const TrackMenu = () => {
  const active = 'Foods';

  const btn = [
    {
      name: 'Foods',
      iconB: '/icons/black/spoon-black.svg',
      iconW: '/icons/spoons-white.svg',
    },
    {
      name: 'Nutrisi',
      iconB: '/icons/black/chart-black.svg',
      iconW: '/icons/chart-white.svg',
    },
    {
      name: 'Carbon',
      iconB: '/icons/cloudscale-brands.svg',
      iconW: '/icons/cloudscale-white.svg',
    },
    {
      name: 'Cardio',
      iconB: '/icons/heart-pulse-solid.svg',
      iconW: '/icons/heart-pulse-white.svg',
    },
  ];

  const style = {
    background: '#3bacb6',
    color: '#fff',
  };
  return (
    <Stack
      className="d-flex flex-row justify-content-center gap-5"
      style={{
        marginTop: '50px',
      }}>
      {btn.map((menu, i) => {
        return (
          <Button
            key={i}
            style={menu.name === active ? style : null}
            className="button-track shadow-sm d-flex flex-row gap-2">
            {active === menu.name ? (
              <span className="icon">
                <Icon image={menu.iconW} />
              </span>
            ) : (
              <span className="icon">
                <Icon image={menu.iconB} />
              </span>
            )}

            <p
              style={menu.name === active ? style : null}
              className="d-none d-md-block">
              {menu.name}
            </p>
          </Button>
        );
      })}
    </Stack>
  );
};

export default TrackMenu;
