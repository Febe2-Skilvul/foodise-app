import React, { useContext } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { trackCtx } from '../app/context/TrackContext';
import Icon from './atoms/Icon';

const TrackMenu = () => {
  const active = 'Foods';
  const { content, setContent } = useContext(trackCtx);
  const btn = [
    {
      name: 'Foods',
      iconB: '/icons/spoon.svg',
      iconW: '/icons/spoons-white.svg',
    },
    {
      name: 'Nutrition',
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
            style={menu.name === content ? style : null}
            className="button-track shadow-sm d-flex flex-row gap-2"
            onClick={() => setContent(menu.name)}>
            {content === menu.name ? (
              <span className="icon">
                <Icon image={menu.iconW} />
              </span>
            ) : (
              <span className="icon">
                <Icon image={menu.iconB} />
              </span>
            )}

            <p
              style={menu.name === content ? style : null}
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
