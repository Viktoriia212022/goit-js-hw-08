import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

afterReloadPage();

const onPlay = function (data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));



function afterReloadPage() {
 if (localStorage.getItem(STORAGE_KEY)) {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
 }
};

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});















