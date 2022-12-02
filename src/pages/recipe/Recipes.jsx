import React, { useContext, useEffect } from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { TextOne } from '../../components/atoms/Fonts';
import ServicePortal from '../../components/Portal';

import CardRecipe from '../../components/CardRecipe';
import { loginCtx } from '../../app/context/LoginContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe } from '../../app/redux/recipes/RecipeSlice';
import Loading from '../../components/atoms/Loading';
import TrackNull from '../../components/atoms/TrackNull';

const Recipes = () => {
  const { user } = useContext(loginCtx);
  const res = useSelector((state) => state.recipes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipe({ token: user.token }));
  }, []);

  return (
    <>
      {' '}
      {res.loading && <Loading />}
      {res.foods && !res.loading ? (
        <Row className="justify-content-md-center ">
          <Col className="mt-5">
            <ServicePortal user={'Sherlin'} />
            <TextOne colored={'Recipes'}>List</TextOne>

            {res.foods.length && !res.loading ? (
              <Stack
                className="d-flex justify-content-center align-items-center p-0 p-md-5"
                style={{
                  marginTop: '100px',
                }}>
                <div className="container-recipe">
                  {res.foods.map((recipe, i) => {
                    return (
                      <CardRecipe
                        name={recipe.food.name}
                        key={i}
                        image={recipe.food.image}
                        id={recipe._id}
                        calori={recipe.food.cal}
                        carbon={recipe.food.carbon}
                        timeServe={recipe.timeServing}
                      />
                    );
                  })}
                </div>
              </Stack>
            ) : (
              !res.loading && <TrackNull />
            )}
          </Col>
        </Row>
      ) : (
        !res.loading && <TrackNull />
      )}
    </>
  );
};

export default Recipes;
