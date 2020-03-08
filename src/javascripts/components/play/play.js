import healthData from '../../helpers/data/healthData';
import utils from '../../helpers/utils';
import './play.scss';

const play = () => {
  const playTime = healthData.getHealthData();
  let domString = '';
  domString += '<h1>PLAY</h1>';
  domString += `<h2>Happiness Score: ${playTime.play}</h2>`;
  domString += '<button id="most-fun-activity">SUPER FUN ACTIVITY</button>';
  domString += '<button id="fun-activity">FUN ACTIVITY</button>';
  utils.printToDom('play', domString);
  const mostFun = () => {
    if (playTime.play <= 50) {
      playTime.play += 50;
    } else {
      playTime.play = 100;
    }
    play();
  };
  const funActivity = () => {
    if (playTime.play <= 99) {
      playTime.play += 2;
    } else {
      playTime.play = 100;
    }
    play();
  };
  $('#most-fun-activity').click(mostFun);
  $('#fun-activity').click(funActivity);
};

export default { play };
