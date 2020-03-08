import healthData from '../../helpers/data/healthData';
import utils from '../../helpers/utils';
import './play.scss';

const mostFun = () => {
  const lotsOfFun = healthData.getHealthData();
  console.error('THE MOST FUN', lotsOfFun.play);
};

const funActivity = () => {
  const someFun = healthData.getHealthData();
  console.error('FUN TIMES', someFun.play);
};

const play = () => {
  const playTime = healthData.getHealthData();
  let domString = '';
  domString += '<h1>PLAY</h1>';
  domString += `<h2>Happiness Score: ${playTime.play}</h2>`;
  domString += '<button id="most-fun-activity">SUPER FUN ACTIVITY</button>';
  domString += '<button id="fun-activity">FUN ACTIVITY</button>';
  utils.printToDom('play', domString);
  $('#most-fun-activity').click(mostFun);
  $('#fun-activity').click(funActivity);
};

export default { play };
