import React from 'react';
import { Button, Col, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BoxNutrition from '../../components/atoms/BoxNutrition';

import ServicePortal from '../../components/Portal';
import { recipe } from '../../config/recipes';

const StateRecipe = ({ name, value, unit }) => {
  return (
    <div className="stat">
      <img src="/icons/list-btn.svg" alt="" width={12} height={12} />{' '}
      <p className="stat-title"> {name} : </p>
      <p className="stat-value">
        {value} <span className="stat-unit">{unit}</span>
      </p>
    </div>
  );
};
const Step = ({ index, value }) => {
  return (
    <div className="step">
      <div className="step-number">
        <p>{index}</p>
      </div>
      <p className="step-value">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};
const RecipeItem = () => {
  return (
    <Row className="justify-content-md-center ">
      <Col className="mt-5">
        <ServicePortal user={'Sherlin'} />
        <Stack className="d-flex flex-column-reverse flex-md-row justify-content-center gap-5">
          <div className="w-100 w-md-75 border border-gray recipeitem-container">
            <h3 className="title-recipe">Sate Ayam</h3>
            <p className="desc-recipe">
              Sate ayam adalah makanan khas Indonesia. Sate Ayam
              dibuat dari daging ayam. Pada umumnya sate ayam dimasak
              dengan cara dipanggang dengan menggunakan arang dan
              disajikan dengan pilihan bumbu kacang atau bumbu kecap.
              Sate ini biasanya disajikan bersama dengan lontong atau
              nasi.
            </p>
            <div className="container-nuts">
              <BoxNutrition
                name={'Carbon'}
                value={0.6}
                color={'#455A64'}
                unit={'kgc02'}
              />
              <BoxNutrition
                color={'#FF5652'}
                name={'Kalori'}
                unit={'kkal'}
                value={100}
              />
              <BoxNutrition
                color={'#FFD12E'}
                name={'Lemak'}
                unit={'g'}
                value={20}
              />
              <BoxNutrition
                color={'#EBB376'}
                name={'Karbo..'}
                unit={'g'}
                value={63}
              />
              <BoxNutrition
                color={'#008000'}
                name={'Protein'}
                unit={'g'}
                value={29}
              />
            </div>
            <div className="box-step">
              <h5>Langkah-Langkah</h5>
              <Step index={1} />
              <Step index={2} />
              <Step index={3} />
              <Step index={5} />
            </div>
            <Link to="/recipe" className="text-decoration-none">
              <Button className="button-main">Resep Lain</Button>
            </Link>
          </div>
          <div className="recipe-stats">
            <div className="r-item-image">
              <img className="img-fluid" src={recipe.image} alt="" />
            </div>
            <div className="stats">
              <p className="recipe-name">Sate Ayam</p>

              <StateRecipe
                name={'Waktu Masak'}
                value={'50'}
                unit={'min'}
              />
              <StateRecipe
                name={'Telur'}
                value={'2'}
                unit={'butir'}
              />
              <StateRecipe name={'Daging'} value={'2'} unit={'kg'} />
              <StateRecipe
                name={'Minyak Goreng'}
                value={'500'}
                unit={'ml'}
              />
              <StateRecipe
                name={'Kacang Tanah'}
                value={'200'}
                unit={'g'}
              />
            </div>
          </div>
        </Stack>
      </Col>
    </Row>
  );
};

export default RecipeItem;
