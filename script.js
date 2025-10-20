
const STATES = {
  STARTED: 'started',
  STOPPED: 'stopped',
  PAUSED: 'paused'
};

const COLORS = [
  [0, 255, 255],
  [255, 0, 255],
  [255, 255, 0]
];

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var shema = getzeroshema();

var data = {
  state: STATES.STOPPED,
  colors: COLORS,
  choosecolor: 2,

  showconf: 1,
  duration: 20,
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
      data.schema = drawGeneration0(data.zerosize);
      fillCanva(data.schema, data.colors[data.choosecolor]);
    },



    start: function () {
      this.state = STATES.STARTED;
      this._tick();

      this.interval = setInterval(this._tick, 50);
      this.diff = " - ";
    },
    pause: function () {
      this.state = STATES.PAUSED;
      clearInterval(this.interval);
    },
    stop: function () {
      this.state = STATES.STOPPED;
      clearInterval(this.interval);
      this.diff = "";
      this.word1 = "";
      this.word2 = "";
      this.step = 0;
      this.nrword = 1;
    },
    _tick: function () {

      this.step++;
      if (this.step >= this.duration) {
        this.step = 0;
        if (this.both) {
          this.nrword++;
        } else if (this.stepinstep == 1) {
          this.nrword++;
        }

        if (this.nrword >= 500) {
          if (this.repeat) {
            this.nrword = 0;
          } else {
            this.stop();
            alert("Zakończono");
            return;
          }
        }

      }
    },



  }
});
