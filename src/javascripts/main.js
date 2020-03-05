import '../styles/main.scss';
import fullnessInfo from './components/eat';
import playInfo from './components/play';

const init = () => {
  fullnessInfo.hunger();
  playInfo.play();
};

init();
