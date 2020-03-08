import healthData from '../../helpers/data/healthData';
import utils from '../../helpers/utils';
import './sleep.scss';

const napping = () => {
  const afternoonNap = healthData.getHealthData();
  console.error('NAP TIME', afternoonNap.sleep);
};

const sleeping = () => {
  const goodNight = healthData.getHealthData();
  console.error('GOOD NIGHT', goodNight.sleep);
};

const sleep = () => {
  const napTime = healthData.getHealthData();
  let domString = '';
  domString += '<h1>SLEEP</h1>';
  domString += `<h2>Energy Score: ${napTime.sleep}</h2>`;
  domString += '<button id="nap-time">NAP</button>';
  domString += '<button id="sleep-time">SLEEP</button>';
  utils.printToDom('sleep', domString);
  $('#nap-time').click(napping);
  $('#sleep-time').click(sleeping);
};

export default { sleep };
