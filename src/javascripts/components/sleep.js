import healthData from '../helpers/data/healthData';
import utils from '../helpers/utils';

const sleep = () => {
  const napTime = healthData.getHealthData();
  let domString = '';
  napTime.forEach((healthScores) => {
    domString += '<h1>SLEEP</h1>';
    domString += `Energy Score: ${healthScores.sleep}`;
    domString += '<button id="nap-time">NAP</button>';
    domString += '<button id="sleep-time">SLEEP</button>';
  });
  utils.printToDom('sleep', domString);
};

export default { sleep };
