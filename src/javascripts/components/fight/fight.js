import healthData from '../../helpers/data/healthData';
import utils from '../../helpers/utils';
import './fight.scss';

const battle = () => {
  const fightTime = healthData.getHealthData();
  let domString = '';
  domString += '<div id="fight">';
  domString += '<h1>FIGHT</h1>';
  domString += `<h2>Battle Score: ${fightTime.fight}</h2>`;
  domString += '<button id="running-away">RUN AWAY</button>';
  domString += '<button id="commit-violence">FIGHT!</button>';
  domString += '</div>';
  utils.printToDom('fight', domString);
  const runAway = () => {
    if (fightTime.fight <= 99) {
      fightTime.fight += 1;
    }
    battle();
  };
  const commitViolence = () => {
    if (fightTime.fight <= 100) {
      fightTime.fight -= 10;
      // counting below 0 figure out why
    } else if (fightTime.fight >= -1) {
      fightTime.fight = 0;
    }
    battle();
  };
  $('#running-away').click(runAway);
  $('#commit-violence').click(commitViolence);
};

export default { battle };
