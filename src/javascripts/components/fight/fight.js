import healthData from '../../helpers/data/healthData';
import utils from '../../helpers/utils';
import './fight.scss';

const runAway = () => {
  const run = healthData.getHealthData();
  console.error('RUN AWAY', run.fight);
};

const commitViolence = () => {
  const violence = healthData.getHealthData();
  console.error('FIGHT', violence.fight);
};

const battle = () => {
  const fight = healthData.getHealthData();
  let domString = '';
  domString += '<h1>FIGHT</h1>';
  domString += `<h2>Battle Score: ${fight.fight}</h2>`;
  domString += '<button id="running-away">RUN AWAY</button>';
  domString += '<button id="commit-violence">FIGHT!</button>';
  utils.printToDom('fight', domString);
  $('#running-away').click(runAway);
  $('#commit-violence').click(commitViolence);
};

export default { battle };
