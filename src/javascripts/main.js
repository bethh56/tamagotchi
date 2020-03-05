import '../styles/main.scss';
import fullnessInfo from './components/eat';
import playInfo from './components/play';
import fightInfo from './components/fight';
import sleepInfo from './components/sleep';

const init = () => {
  fullnessInfo.hunger();
  playInfo.play();
  fightInfo.battle();
  sleepInfo.sleep();
};

init();
