import healthData from '../helpers/data/healthData';
import utils from '../helpers/utils';

const play = () => {
  const playTime = healthData.getHealthData();
  let domString = '';
  playTime.forEach((healthScores) => {
    domString += '<h1>PLAY</h1>';
    domString += `Happiness Score: ${healthScores.play}`;
    domString += '<button id="most-fun-activity">SUPER FUN ACTIVITY</button>';
    domString += '<button id="fun-activity">FUN ACTIVITY</button>';
  });
  utils.printToDom('play', domString);
};

export default { play };
