import healthData from '../helpers/data/healthData';
import utils from '../helpers/utils';

const hunger = () => {
  const full = healthData.getHealthData();
  let domString = '';
  full.forEach((healthScores) => {
    domString += '<h1>EAT</h1>';
    domString += `Fullness Score: ${healthScores.fullness}`;
    domString += '<button id="healthy-food">HEALTHY FOOD</button>';
    domString += '<button id="unhealthy-food">UNHEALTHY FOOD</button>';
  });
  utils.printToDom('eat', domString);
};

export default { hunger };
