import healthData from '../../helpers/data/healthData';
import utils from '../../helpers/utils';
import './eat.scss';

const hunger = () => {
  const full = healthData.getHealthData();
  let domString = '';
  domString += '<div id="eat">';
  domString += '<h1>EAT</h1>';
  domString += `<h2>Fullness Score : ${full.fullness} </h2>`;
  domString += '<button id="healthy-food">HEALTHY FOOD</button>';
  domString += '<button id="unhealthy-food">UNHEALTHY FOOD</button>';
  domString += '</div>';
  utils.printToDom('eat', domString);
  const healthEvents = () => {
    if (full.fullness >= 90) {
      full.fullness = 100;
    } else {
      full.fullness += 10;
    }
    hunger();
  };
  const unhealthyEvents = () => {
    if (full.fullness <= 100) {
      full.fullness -= 3;
      // fix to stop counting past zero
    } else if (full.fullness <= 0) {
      full.fullness = 0;
    }
    hunger();
  };
  $('#healthy-food').click(healthEvents);
  $('#unhealthy-food').click(unhealthyEvents);
};

export default { hunger };
