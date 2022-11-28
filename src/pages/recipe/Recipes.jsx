import React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { TextOne } from '../../components/atoms/Fonts';
import './recipe.css';
import ServicePortal from '../../components/Portal';

import CardRecipe from '../../components/CardRecipe';
import { fakeRecipe } from '../../config/recipes';

const Recipes = () => {
  return (
    <Row className="justify-content-md-center ">
      <Col className="mt-5">
        <ServicePortal user={'Sherlin'} />
        <TextOne colored={'Recipes'}>List</TextOne>
        <Stack
          className="d-flex justify-content-center align-items-center p-0 p-md-5"
          style={{
            marginTop: '100px',
          }}>
          <div className="container-recipe">
            {fakeRecipe.map((recipe, i) => {
              console.log(i);
              return (
                <CardRecipe
                  name={recipe.title}
                  key={i}
                  image={recipe.image}
                />
              );
            })}
          </div>
        </Stack>
      </Col>
    </Row>
  );
};

export default Recipes;
