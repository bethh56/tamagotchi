import healthData from '../../helpers/data/healthData';
import utils from '../../helpers/utils';
import './eat.scss';

const healthEvents = () => {
  const healthyEats = healthData.getHealthData();
  if (healthyEats.fullness < 101) {
    healthyEats.fullness += 1;
  }
};

const unhealthyEvents = () => {
  const unhealthyEats = healthData.getHealthData();
  unhealthyEats.forEach((healthDecrease) => {
    if (healthDecrease.fullness < 101) {
      console.error('BAD FOODS', healthDecrease.fullness - 1);
    }
  });
};

const hunger = () => {
  const full = healthData.getHealthData();
  let domString = '';
  full.forEach((healthScores) => {
    domString += '<h1>EAT</h1>';
    domString += `<h2>Fullness Score : ${healthScores.fullness} </h2>`;
    domString += '<button id="healthy-food">HEALTHY FOOD</button>';
    domString += '<button id="unhealthy-food">UNHEALTHY FOOD</button>';
  });
  utils.printToDom('eat', domString);
  $('#healthy-food').click(healthEvents);
  $('#unhealthy-food').click(unhealthyEvents);
};

export default { hunger };
