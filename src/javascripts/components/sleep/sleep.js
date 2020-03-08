import healthData from '../../helpers/data/healthData';
import utils from '../../helpers/utils';
import './sleep.scss';

const sleep = () => {
  const napTime = healthData.getHealthData();
  let domString = '';
  domString += '<h1>SLEEP</h1>';
  domString += `<h2>Energy Score: ${napTime.sleep}</h2>`;
  domString += '<button id="nap-time">NAP</button>';
  domString += '<button id="sleep-time">SLEEP</button>';
  utils.printToDom('sleep', domString);
  const napping = () => {
    if (napTime.sleep <= 50) {
      napTime.sleep += 40;
    } else {
      napTime.sleep = 100;
    }
    sleep();
  };
  const sleeping = () => {
    if (napTime.sleep <= 50) {
      napTime.sleep += 50;
    } else {
      napTime.sleep = 100;
    }
    sleep();
  };
  $('#nap-time').click(napping);
  $('#sleep-time').click(sleeping);
};

export default { sleep };
