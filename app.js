// clock
// seconds-hand
// minutes-hand
// hours-hand
// center

const secondsHand = document.querySelector(".seconds-hand");
const minutesHand = document.querySelector(".minutes-hand");
const hoursHand = document.querySelector(".hours-hand");

function getTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  // console.log(now);
  // console.log(now.getDay());
  // console.log(now.getMonth());
  // console.log(now.getFullYear());
  // console.log(seconds);
  // console.log(minutes);
  // console.log(hours);

  const timeInterval = 6;
  secondsHand.style.transform = 'rotate('+(seconds * timeInterval)+'deg)'
  minutesHand.style.transform = 'rotate('+(minutes * timeInterval+ seconds/10)+'deg)'
  hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes / 2) + 'deg)'

  

}

setInterval(getTime, 100);

setInterval(function () {
  // new Audio('Sound/clock-ticking-natural-room-verb-17249 (mp3cut.net).mp3').play();
}, 1000)

