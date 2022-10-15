import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const getCurrentTime = function (event) {
  const curretnTime = JSON.stringify(event);
  localStorage.setItem('videoplayer-current-time', curretnTime);
};

player.on('timeupdate', throttle(getCurrentTime, 1500));
