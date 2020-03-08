import healthData from '../../helpers/data/healthData';
import utils from '../../helpers/utils';
import './eat.scss';

const healthEvents = () => {
  const healthyEats = healthData.getHealthData();
  if (healthyEats.fullness < 101) {
    console.error(healthyEats.fullness += 1);
  }
};

const unhealthyEvents = () => {
  const unhealthyEats = healthData.getHealthData();
  if (unhealthyEats.fullness < 101) {
    console.error('BAD FOODS', unhealthyEats.fullness - 1);
  }
};

const hunger = () => {
  const full = healthData.getHealthData();
  let domString = '';
  domString += '<h1>EAT</h1>';
  domString += `<h2>Fullness Score : ${full.fullness} </h2>`;
  domString += '<button id="healthy-food">HEALTHY FOOD</button>';
  domString += '<button id="unhealthy-food">UNHEALTHY FOOD</button>';
  utils.printToDom('eat', domString);
  $('#healthy-food').click(healthEvents);
  $('#unhealthy-food').click(unhealthyEvents);
};

export default { hunger };
