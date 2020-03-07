import healthData from '../helpers/data/healthData';
import utils from '../helpers/utils';

const napping = () => {
  const afternoonNap = healthData.getHealthData();
  afternoonNap.forEach((healthScores) => {
    console.error('NAP TIME', $(healthScores.sleep));
  });
};

const sleeping = () => {
  const goodNight = healthData.getHealthData();
  goodNight.forEach((healthScores) => {
    console.error('GOOD NIGHT', $(healthScores.sleep));
  });
};

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
  $('#nap-time').click(napping);
  $('#sleep-time').click(sleeping);
};

export default { sleep };
