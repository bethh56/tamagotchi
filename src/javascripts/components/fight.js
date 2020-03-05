import healthData from '../helpers/data/healthData';
import utils from '../helpers/utils';

const battle = () => {
  const fight = healthData.getHealthData();
  let domString = '';
  fight.forEach((healthScores) => {
    domString += '<h1>FIGHT</h1>';
    domString += `Battle Score: ${healthScores.fight}`;
    domString += '<button id="running-away">RUN AWAY</button>';
    domString += '<button id="commit-violence">FIGHT!</button>';
  });
  utils.printToDom('fight', domString);
};

export default { battle };
