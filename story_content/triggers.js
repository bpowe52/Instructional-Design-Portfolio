function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6pIIMb3XQqx":
        Script1();
        break;
      case "5cIgaEBO1nz":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('5bJC51J9fye');
const duration = 750;
const easing = 'ease-in-out';
const id = '6pXZ3tZzjbT';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5y95tCrX4VG');
const duration = 750;
const easing = 'ease-out';
const id = '6OR0piWi172';
const growAmount = 0.3;
const delay = 10050;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
