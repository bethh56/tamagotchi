import healthData from '../../helpers/data/healthData';
import utils from '../../helpers/utils';
import './play.scss';

const mostFun = () => {
  const lotsOfFun = healthData.getHealthData();
  lotsOfFun.forEach((healthScores) => {
    console.error('THE MOST FUN', $(healthScores.play));
  });
};

const funActivity = () => {
  const someFun = healthData.getHealthData();
  someFun.forEach((healthScores) => {
    console.error('FUN TIMES', $(healthScores.play));
  });
};

const play = () => {
  const playTime = healthData.getHealthData();
  let domString = '';
  playTime.forEach((healthScores) => {
    domString += '<h1>PLAY</h1>';
    domString += `<h2>Happiness Score: ${healthScores.play}</h2>`;
    domString += '<button id="most-fun-activity">SUPER FUN ACTIVITY</button>';
    domString += '<button id="fun-activity">FUN ACTIVITY</button>';
  });
  utils.printToDom('play', domString);
  $('#most-fun-activity').click(mostFun);
  $('#fun-activity').click(funActivity);
};

export default { play };
