
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
var gen0 = getgen0();

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
  { 'thumb': 'galeria/thumb1.jpg', 'image': 'galeria/one.JPG' },
  { 'thumb': 'galeria/thumb2.jpg', 'image': 'galeria/two.JPG' },
  { 'thumb': 'galeria/thumb3.jpg', 'image': 'galeria/thre.JPG' },
  { 'thumb': 'galeria/thumb4.jpg', 'image': 'galeria/four.JPG' },
  { 'thumb': 'galeria/thumb5.jpg', 'image': 'galeria/five.JPG' },
  { 'thumb': 'galeria/thumb6.jpg', 'image': 'galeria/six.JPG' },
  { 'thumb': 'galeria/thumb7.jpg', 'image': 'galeria/seven.JPG' }
];

var trybs = [
  { 'id': 1, 'img': 'galeria/tryb1.JPG', 'name': '3x3', fields: 9 },
  { 'id': 2, 'img': 'galeria/tryb2.JPG', 'name': 'Tryb A', fields: 24 },
  { 'id': 3, 'img': 'galeria/tryb3.JPG', 'name': 'Tryb B', fields: 12 },
  { 'id': 4, 'img': 'galeria/tryb4.JPG', 'name': 'Tryb C', fields: 16 },
  { 'id': 5, 'img': 'galeria/tryb5.JPG', 'name': 'Tryb D', fields: 20 },
  { 'id': 6, 'img': 'galeria/tryb6.JPG', 'name': '{ref 3x3} - 8 - Pond', fields: 8 },
  { 'id': 7, 'img': 'galeria/tryb7.JPG', 'name': '{ref 3x3} - 8 - Cross', fields: 8 },
  { 'id': 8, 'img': 'galeria/tryb8.JPG', 'name': '{ref 3x3} - 8 - Windmill', fields: 8 },
  { 'id': 9, 'img': 'galeria/tryb9.JPG', 'name': '{ref 3x3} - 8 - Diagonal', fields: 8 },
  { 'id': 10, 'img': 'galeria/tryb10.JPG', 'name': '{ref 3x3} - 8 - Romb', fields: 8 },
  { 'id': 11, 'img': 'galeria/tryb11.JPG', 'name': '{ref 3x3} - 8 - Big squere', fields: 8 },
  { 'id': 12, 'img': 'galeria/tryb12.JPG', 'name': '{ref 3x3} - 8 - Narty', fields: 8 },
  { 'id': 13, 'img': 'galeria/tryb13.JPG', 'name': '{ref 3x3} - 8 - Romb in Squere', fields: 8 },
  { 'id': 14, 'img': 'galeria/tryb14.JPG', 'name': '{ref 3x3} - 8 - Wave', fields: 8 },
  { 'id': 15, 'img': 'galeria/tryb15.JPG', 'name': ' Triangle ', fields: 3 },
  //  { 'id': 16, 'img': 'galeria/tryb15.JPG', 'name': ' Triangle2 ', fields: 3 },
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
  showconfig: [0, 1, 0, 0],
  zerosize: 50,
  schema: shema,
  ctx: ctx,
  selectpattern: -1,
  selectpattern2: -1,
  options: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  images: galerry,
  selectedImage: galerry[0].image,
  tryb: 1,
  trybs: trybs,
  conf16: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  showfields: 24,
  gen0: gen0,
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
      if (nr == 3) {
        this.pause();
      }
      this.$forceUpdate();
    },
    drawCanva: function () {
      data.canster = 1;
      data.generation = 0;
      data.schema = drawGeneration0(data.zerosize);
      fillCanva(data.schema, data.choosecolors, data.addborderCheck, data.options);
    },
    changePattern: function (nr) {
      if (nr == 1) {
        sel = data.selectpattern;
      } else {
        sel = data.selectpattern2;
      }
      pattern = getPattern(sel, data.patterns);
      if (pattern) {
        if (nr == 1) {
          data.conf9[0] = pattern.reg[0].slice();
          data.conf9[1] = pattern.reg[1].slice();
        }
        if (nr == 2) {
          data.conf16[0].fill(0);
          data.conf16[1].fill(0);
          var pom = pattern.reg[0].slice();
          var pom2 = pattern.reg[1].slice();
          for (i = 0; i <= 8; i++) {
            data.conf16[0][i] = pom[i];
            data.conf16[1][i] = pom2[i];
          }

        }
      }
      this.$forceUpdate();
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
    oneStep: function () {
      data.generation++;
      if (data.tryb == 1) {
        data.schema = calcNextstep(data.schema, data.conf9, data.tryb, data.options[8]);
      } else {
        data.schema = calcNextstep(data.schema, data.conf16, data.tryb, data.options[8]);
      }
      fillCanva(data.schema, data.choosecolors, data.addborderCheck, data.options);
    },
    changegen0: function (x, y) {

      x--;
      y--;
      if (data.gen0[x][y]) {
        data.gen0[x][y] = 0;
      } else {
        data.gen0[x][y] = 1;
      }
      this.$forceUpdate();
    },
    setGen0: function () {

      data.schema = getzeroshema();
      for (i = 0; i < 50; i++) {
        for (j = 0; j < 50; j++) {
          data.schema[i + 75][j + 75] = data.gen0[j][i];
        }
      }
      data.canster = 1;
      data.generation = 0;
      data.showconfig[3] = 0;
      fillCanva(data.schema, data.choosecolors, data.addborderCheck, data.options);
      this.$forceUpdate();

    },
    setZeroGen0: function () {
      for (i = 0; i < 50; i++) {
        for (j = 0; j < 50; j++) {
          data.gen0[i][j] = 0;
        }
      }
      this.$forceUpdate();
    },
    unsetprevoption: function () {
      if (data.options[7]) {
        data.options[6] = 0;
      }
      this.$forceUpdate();
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
            data.schema = calcNextstep(data.schema, data.conf9, data.tryb, data.options[8]);
          } else {
            data.schema = calcNextstep(data.schema, data.conf16, data.tryb, data.options[8]);
          }

        }
        fillCanva(data.schema, data.choosecolors, data.addborderCheck, data.options);
      }
    },
    showregula() {
      res = '';
      for (j = 0; j < 9; j++) {
        if (data.conf9[1][j]) {
          res += j;
        }
      }
      res += '/';
      for (j = 0; j < 9; j++) {
        if (data.conf9[0][j]) {
          res += j;
        }
      }
      return res;
    }
  },

});
