import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Button, Col, Row, Stack } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { loginCtx } from '../../app/context/LoginContext';
import Loading from '../../components/atoms/Loading';
import Notfound from '../../components/atoms/NotFound';
import ServicePortal from '../../components/Portal';
import { getRecipeFood } from '../../service/food';
import RecipeCardItem from './RecipeCardItem';
import RecipeNuts from './RecipeNuts';
import Step from './Step';

const RecipeItem = () => {
  const { user } = useContext(loginCtx);
  const [dataRecipe, setDataRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const param = useParams();

  const getRecipeFoodData = useCallback(async () => {
    setIsLoading(true);
    await getRecipeFood(param.id, user.token)
      .then((res) => {
        setDataRecipe(res.data);
      })
      .finally(() => setIsLoading(false));
  }, [getRecipeFood]);
  useEffect(() => {
    getRecipeFoodData();
  }, [param.id]);

  return (
    <>
      <Row className="justify-content-md-center ">
        <Col className="mt-5">
          <ServicePortal user={'Sherlin'} />
          {isLoading && <Loading />}
          {!isLoading && dataRecipe ? (
            <Stack className="d-flex flex-column-reverse flex-md-row justify-content-center gap-5">
              <div className="w-100 w-md-75 border border-gray recipeitem-container">
                <h3 className="title-recipe">
                  {dataRecipe.food.name}
                </h3>
                <p className="desc-recipe">{dataRecipe.food.desc}</p>
                <RecipeNuts food={dataRecipe.food} />
                <div className="box-ingred">
                  <h5>Bahan-bahan</h5>
                  <div className="all-ingred">
                    {dataRecipe.ingredient.map((bahan, i) => {
                      return (
                        <p key={i} className="ingred">
                          {bahan}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="box-step">
                  <h5>Langkah-langkah</h5>
                  {dataRecipe.overview.map((step, i) => {
                    return (
                      <Step key={i} index={i + 1} value={step} />
                    );
                  })}
                </div>
                <Link to="/recipe" className="text-decoration-none">
                  <Button className="button-main">Resep Lain</Button>
                </Link>
              </div>
              <RecipeCardItem
                image={dataRecipe.food.image}
                name={dataRecipe.food.name}
                time={dataRecipe.timeServing}
                portion={dataRecipe.portion}
                step={dataRecipe.overview.length}
                ingredients={dataRecipe.ingredient.length}
                nutriscore={dataRecipe.nutriScore}
              />
            </Stack>
          ) : (
            !isLoading && <Notfound />
          )}
        </Col>
      </Row>
    </>
  );
};

export default RecipeItem;
