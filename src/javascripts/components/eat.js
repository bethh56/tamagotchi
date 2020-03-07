import healthData from '../helpers/data/healthData';
import utils from '../helpers/utils';

const healthEvents = () => {
  const healthyEats = healthData.getHealthData();
  healthyEats.forEach((healthScores) => {
    const healthy = `${healthScores.fullness}`;
    if (healthy < 101) {
      console.error('GOOD FOODS', $(healthScores.fullness));
    }
  });
};

const unhealthyEvents = () => {
  const unhealthyEats = healthData.getHealthData();
  unhealthyEats.forEach((healthScores) => {
    if (`${healthScores.fullness}` < 101) {
      console.error('BAD FOODS', $(healthScores.fullness));
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
