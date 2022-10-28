import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const currentTimeToLocalStorage = function (event) {
  const curretnTime = JSON.stringify(event.seconds);
  console.log(curretnTime);
  localStorage.setItem('videoplayer-current-time', curretnTime);
};

const setTimeOnLoad = () => {
  const obj = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  if (!obj) return '0.0';
  return obj;
};

player.on('timeupdate', throttle(currentTimeToLocalStorage, 1500));
onLoad();

function onLoad() {
  player.setCurrentTime(setTimeOnLoad());
}
