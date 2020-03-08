import healthData from '../../helpers/data/healthData';
import utils from '../../helpers/utils';
import './fight.scss';

const battle = () => {
  const fightTime = healthData.getHealthData();
  let domString = '';
  domString += '<h1>FIGHT</h1>';
  domString += `<h2>Battle Score: ${fightTime.fight}</h2>`;
  domString += '<button id="running-away">RUN AWAY</button>';
  domString += '<button id="commit-violence">FIGHT!</button>';
  utils.printToDom('fight', domString);
  const runAway = () => {
    // +1
    console.error('RUN AWAY', fightTime.fight);
  };
  const commitViolence = () => {
    // -10
    console.error('FIGHT', fightTime.fight);
  };
  $('#running-away').click(runAway);
  $('#commit-violence').click(commitViolence);
};

export default { battle };
