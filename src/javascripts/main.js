import '../styles/main.scss';
import fullnessInfo from './components/eat/eat';
import playInfo from './components/play/play';
import fightInfo from './components/fight/fight';
import sleepInfo from './components/sleep/sleep';

const init = () => {
  fullnessInfo.hunger();
  playInfo.play();
  fightInfo.battle();
  sleepInfo.sleep();
};

init();
