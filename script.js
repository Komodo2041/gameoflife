
const STATES = {
  STARTED: 'started',
  STOPPED: 'stopped',
  PAUSED: 'paused'
};

const COLORS = [
  'red', 'blue', 'green', 'yellow', 'black', 'gray',
  'pink', 'lightpink', 'hotpink', 'deeppink', 'palevioletred', 'crimson',
  'navy', 'darkblue', 'mediumblue', 'blue', 'royalblue', 'lightblue',
  'skyblue', 'lightskyblue', 'dodgerblue', 'cornflowerblue',
  'lime', 'limegreen', 'springgreen', 'mediumspringgreen', 'green',
  'forestgreen', 'seagreen', 'darkgreen', 'lightgreen', 'mediumseagreen',
  'purple', 'darkviolet', 'violet', 'plum', 'indigo', 'mediumpurple',
  'yellow', 'gold', 'orange', 'darkorange', 'orangered',
  'brown', 'sienna', 'saddlebrown', 'chocolate',
  'darkgray', 'gray', 'dimgray', 'lightgray', 'silver', 'darkslategray',
  'aqua', 'cyan', 'teal', 'olive', 'maroon', 'fuchsia', 'magenta'
];

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var shema = getzeroshema();

var data = {
  canster: 0,
  generation: 0,
  duration: 1,
  step: 0,

  addborderCheck: 0,
  smallBorder: 0,
  conf9: [[0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0]],
  state: STATES.STOPPED,
  colors: COLORS,
  choosecolor: 'silver',
  choosecolor2: 'white',
  showconf: 1,


  zerosize: 50,
  schema: shema,
  ctx: ctx,


};


new Vue({
  el: '#app',
  data: data,
  methods: {
    changeconf: function () {
      if (data.showconf) {
        data.showconf = 0;
      } else {
        data.showconf = 1
      }
    },
    drawCanva: function () {
      data.canster = 1;
      data.generation = 0;
      data.schema = drawGeneration0(data.zerosize);
      fillCanva(data.schema, data.choosecolor, data.choosecolor2, data.addborderCheck, data.smallBorder);
    },

    start: function () {
      this.state = STATES.STARTED;
      this._tick();
      this.step = 0;
      this.interval = setInterval(this._tick, 100);
    },
    pause: function () {
      this.state = STATES.PAUSED;
      clearInterval(this.interval);
    },

    _tick: function () {
      this.step++;
      if (this.step > this.duration) {
        this.step = 0;
        data.generation++;
        data.schema = calcNextstep(data.schema, data.conf9);
        fillCanva(data.schema, data.choosecolor, data.choosecolor2, data.addborderCheck, data.smallBorder);
      }
    },

  }
});
