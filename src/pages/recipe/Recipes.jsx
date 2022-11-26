import React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { TextOne } from '../../components/atoms/Fonts';
import './recipe.css';
import ServicePortal from '../../components/Portal';

const Recipes = () => {
  return (
    <Row className="justify-content-md-center ">
      <Col className="mt-5">
        <ServicePortal user={'Sherlin'} />
        <TextOne colored={'Recipes'}>List</TextOne>
        <Stack
          className="d-flex justify-content-center align-items-center p-0 p-md-5"
          style={{
            backgroundColor: '#3BACB6',
            marginTop: '100px',
          }}>
          <div className="container-recipe">
            <div className="card-recipe">
              <div className="img-recipe">
                <img
                  src="https://spoonacular.com/recipeImages/633419-312x231.jpg"
                  alt=""
                />
              </div>
              <div className="content-recipe">
                <div>
                  <h2>Baked Aplle</h2>
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Eum, harum explicabo.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="card-recipe">
              <div className="img-recipe">
                <img
                  src="https://spoonacular.com/recipeImages/650601-312x231.jpg"
                  alt=""
                />
              </div>
              <div className="content-recipe">
                <div>
                  <h2>Madeleines</h2>
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Eum, harum explicabo.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="card-recipe">
              <div className="img-recipe">
                <img
                  src="https://spoonacular.com/recipeImages/656444-312x231.jpg"
                  alt=""
                />
              </div>
              <div className="content-recipe">
                <div>
                  <h2>Plum Cake</h2>
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Eum, harum explicabo.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="card-recipe">
              <div className="img-recipe">
                <img
                  src="https://spoonacular.com/recipeImages/1161745-312x231.jpg"
                  alt=""
                />
              </div>
              <div className="content-recipe">
                <div>
                  <h2>Cake Balls</h2>
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Eum, harum explicabo.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Stack>
      </Col>
    </Row>
  );
};

export default Recipes;
