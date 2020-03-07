import healthData from '../../helpers/data/healthData';
import utils from '../../helpers/utils';
import './fight.scss';

const runAway = () => {
  const run = healthData.getHealthData();
  run.forEach((healthScores) => {
    console.error('RUN AWAY', $(healthScores.fight));
  });
};

const commitViolence = () => {
  const violence = healthData.getHealthData();
  violence.forEach((healthScores) => {
    console.error('FIGHT', $(healthScores.fight));
  });
};

const battle = () => {
  const fight = healthData.getHealthData();
  let domString = '';
  fight.forEach((healthScores) => {
    domString += '<h1>FIGHT</h1>';
    domString += `<h2>Battle Score: ${healthScores.fight}</h2>`;
    domString += '<button id="running-away">RUN AWAY</button>';
    domString += '<button id="commit-violence">FIGHT!</button>';
  });
  utils.printToDom('fight', domString);
  $('#running-away').click(runAway);
  $('#commit-violence').click(commitViolence);
};

export default { battle };
