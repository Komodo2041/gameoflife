
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

var patterns = [
  { 'id': 0, 'name': "Seeds", "reg": [[0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]] },
  { 'id': 1, 'name': "Serwety", "reg": [[0, 0, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]] },
  { 'id': 2, 'name': "Wolfram - 7(e)", "reg": [[0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1]] },
  { 'id': 3, 'name': "Płatki, Życie bez śmierci", "reg": [[0, 0, 0, 1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1]] },
  { 'id': 4, 'name': "Wolfram - 9(a)", "reg": [[0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1]] },
  { 'id': 5, 'name': "Wolfram - 7(d)", "reg": [[0, 1, 0, 1, 1, 1, 1, 0, 0], [1, 1, 0, 1, 0, 1, 1, 0, 0]] },
  { 'id': 6, 'name': "Wolfram", "reg": [[1, 1, 0, 0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1]] },
  { 'id': 7, 'name': "Wolfram - 13(f); klasa 3", "reg": [[0, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 0, 0, 0, 0, 1]] },
  { 'id': 8, 'name': "Wolfram - 7(g)", "reg": [[0, 0, 0, 1, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 1, 1, 0, 0]] },
  { 'id': 9, 'name': "Wolfram - 7(i)", "reg": [[1, 0, 0, 0, 0, 1, 0, 1, 1], [1, 0, 0, 0, 1, 1, 0, 0, 0]] },
  { 'id': 10, 'name': "Wolfram - 7(a), 13(g); klasa 3", "reg": [[0, 0, 1, 1, 0, 0, 1, 0, 0], [1, 0, 0, 0, 1, 0, 1, 0, 1]] },
  { 'id': 11, 'name': "Narośl", "reg": [[0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0]] },
  { 'id': 12, 'name': "Labirynt", "reg": [[0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0, 0]] },
  { 'id': 13, 'name': "Wolfram - 7(h)", "reg": [[0, 0, 0, 0, 0, 1, 0, 1, 1], [0, 1, 1, 0, 1, 1, 1, 0, 0]] },
  { 'id': 14, 'name': "2x2", "reg": [[0, 0, 0, 1, 0, 0, 1, 0, 0], [0, 1, 1, 0, 0, 1, 0, 0, 0]] },
  { 'id': 15, 'name': "Wolfram - 13(h); klasa 3", "reg": [[0, 1, 0, 1, 0, 1, 0, 0, 0], [0, 1, 0, 1, 0, 1, 0, 0, 0]] },
  { 'id': 16, 'name': "Replikator", "reg": [[0, 1, 0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0, 1, 0]] },
  { 'id': 17, 'name': "Ameba", "reg": [[0, 0, 0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0, 0, 1]] },
  { 'id': 18, 'name': "Gra w życia Conwaya", "reg": [[0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0]] },
  { 'id': 19, 'name': "HighLife", "reg": [[0, 0, 0, 1, 0, 0, 1, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0]] },
  { 'id': 20, 'name': "Wolfram - 9(b), 13(b); klasa 2. ", "reg": [[0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0, 0, 0]] },
  { 'id': 21, 'name': "Miasta otoczone murem", "reg": [[0, 0, 0, 0, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 1, 0, 0, 0]] },
  { 'id': 22, 'name': "Wolfram - 9(c)", "reg": [[0, 0, 0, 1, 0, 0, 1, 1, 0], [0, 0, 1, 1, 1, 0, 1, 0, 0]] },
  { 'id': 23, 'name': "Plamy", "reg": [[0, 0, 0, 1, 0, 0, 1, 1, 1], [0, 0, 1, 1, 0, 1, 1, 1, 1]] },
  { 'id': 24, 'name': "Koagulacje", "reg": [[0, 0, 0, 1, 0, 0, 0, 1, 1], [0, 0, 1, 1, 0, 1, 1, 1, 1]] },
  { 'id': 25, 'name': "Pseudożycie", "reg": [[0, 0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 1, 1, 0, 0, 0, 0, 1]] },
  { 'id': 26, 'name': "Ruch", "reg": [[0, 0, 0, 1, 0, 0, 1, 0, 1], [0, 0, 1, 0, 1, 1, 0, 0, 0]] },
  { 'id': 27, 'name': "Wolfram - 7(b)", "reg": [[0, 0, 1, 0, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 1, 0]] },
  { 'id': 28, 'name': "Trzy Cztery", "reg": [[0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0, 0]] },
  { 'id': 29, 'name': "Dzień i Noc", "reg": [[0, 0, 0, 1, 0, 1, 1, 0, 1], [0, 0, 0, 1, 1, 0, 1, 1, 1]] },
  { 'id': 30, 'name': "Asymilacja", "reg": [[0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 0]] },
  { 'id': 31, 'name': "Wolfram - 7(f)", "reg": [[0, 1, 0, 1, 0, 0, 0, 1, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1]] },
  { 'id': 32, 'name': "Koral", "reg": [[0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1]] },
  { 'id': 33, 'name': "Długie życie", "reg": [[0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0]] },
  { 'id': 34, 'name': "Diameba", "reg": [[0, 0, 0, 1, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1, 1, 1]] },
];

var galerry = [
  { 'thumb': 'galeria/thumb1.jpg', 'image': 'galeria/one.jpg' },
  { 'thumb': 'galeria/thumb2.jpg', 'image': 'galeria/two.jpg' },
  { 'thumb': 'galeria/thumb3.jpg', 'image': 'galeria/thre.jpg' },
  { 'thumb': 'galeria/thumb4.jpg', 'image': 'galeria/four.jpg' },
  { 'thumb': 'galeria/thumb5.jpg', 'image': 'galeria/five.jpg' },
  { 'thumb': 'galeria/thumb6.jpg', 'image': 'galeria/six.jpg' },
  { 'thumb': 'galeria/thumb7.jpg', 'image': 'galeria/seven.jpg' }
];

var trybs = [
  { 'id': 1, 'img': 'galeria/tryb1.jpg', 'name': '3x3', fields: 9 },
  { 'id': 2, 'img': 'galeria/tryb2.jpg', 'name': 'Tryb A', fields: 24 },
  { 'id': 3, 'img': 'galeria/tryb3.jpg', 'name': 'Tryb B', fields: 12 },
  { 'id': 4, 'img': 'galeria/tryb4.jpg', 'name': 'Tryb C', fields: 16 },
  { 'id': 5, 'img': 'galeria/tryb5.jpg', 'name': 'Tryb D', fields: 20 },
];

var data = {
  canster: 0,
  generation: 0,
  duration: 1,
  numbeOfGenerations: 1,
  step: 0,
  patterns: patterns,
  addborderCheck: 0,
  conf9: [[0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0]],
  state: STATES.STOPPED,
  colors: COLORS,
  choosecolors: ['blue', 'white', 'red'],
  showconfig: [0, 1, 0],
  zerosize: 50,
  schema: shema,
  ctx: ctx,
  selectpattern: -1,
  options: [0, 0, 0, 0, 0],
  images: galerry,
  selectedImage: galerry[0].image,
  tryb: 1,
  trybs: trybs,
  conf16: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  showfields: 24
};


new Vue({
  el: '#app',
  data: data,

  methods: {
    changeconf: function (nr) {
      if (data.showconfig[nr]) {
        data.showconfig[nr] = 0;
      } else {
        data.showconfig[nr] = 1;
      }
      if (nr == 2 && data.showconfig[2] == 0) {
        data.tryb = 1;
      }
      this.$forceUpdate();
    },
    drawCanva: function () {
      data.canster = 1;
      data.generation = 0;
      data.schema = drawGeneration0(data.zerosize);
      fillCanva(data.schema, data.choosecolors, data.addborderCheck, data.options);
    },
    changePattern: function () {
      sel = data.selectpattern;
      pattern = getPattern(sel, data.patterns);
      if (pattern) {
        data.conf9[0] = pattern.reg[0].slice();
        data.conf9[1] = pattern.reg[1].slice();
      }
    },
    createRule: function () {
      data.selectpattern = -1;
      for (i = 0; i < 2; i++) {
        for (j = 0; j < 9; j++) {
          data.conf9[i][j] = checkskala(50);
        }
      }
      this.$forceUpdate();
    },
    createRule16: function () {
      for (i = 0; i < 2; i++) {
        for (j = 0; j < 24; j++) {
          data.conf16[i][j] = checkskala(50);
        }
      }
      this.$forceUpdate();
    },
    refresh: function () {
      this.$forceUpdate();
    },
    changeFoto: function (i) {
      data.selectedImage = data.images[i].image;
    },
    changeTryb: function (j) {
      if (j == 1) {
        data.showconfig[2] = 0;
        return true;
      }
      this.pause();
      tryb = getPattern(j, data.trybs);
      data.showfields = tryb.fields;
    },
    start: function () {
      this.state = STATES.STARTED;
      this._tick();
      this.step = 0;
      this.interval = setInterval(this._tick, 200);
    },
    pause: function () {
      this.state = STATES.PAUSED;
      clearInterval(this.interval);
    },

    _tick: function () {
      this.step++;
      if (this.step > this.duration) {
        this.step = 0;
        for (let i = 0; i < data.numbeOfGenerations; i++) {
          data.generation++;
          if (data.tryb == 1) {
            data.schema = calcNextstep(data.schema, data.conf9, data.tryb);
          } else {
            data.schema = calcNextstep(data.schema, data.conf16, data.tryb);
          }

        }
        fillCanva(data.schema, data.choosecolors, data.addborderCheck, data.options);
      }
    },

  }
});
