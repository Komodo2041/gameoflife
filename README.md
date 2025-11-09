 
# Game of Life – Conway's Cellular Automaton (JavaScript)

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Vanilla-yellow" alt="Vanilla JS">
  <img src="https://img.shields.io/badge/Vue.js-3-green" alt="Vue 3">
  <img src="https://img.shields.io/badge/Live-Demo-brightgreen" alt="Live">
  <img src="https://img.shields.io/badge/Algorithms-Conway-blue" alt="Conway">
</p>

**Live demo**: http://maniontg.webd.pro/gamelife/ 
**Gallery** http://maniontg.webd.pro/gamelife/gallery
**Pure JS | Canvas | Algorithms**
 
## Funkcje
- Symulacja życia komórkowego (reguły Conwaya)
- Interaktywna plansza (klikaj, by dodać komórki)
- Kontrola prędkości (pause/play)
- Losowe generowanie
- Wiele sprawdzanych sąsiedztw

## Tech stack
- Vanilla JavaScript
- HTML5 Canvas
- CSS Grid/Flexbox
- Vue.js

## Jak uruchomić lokalnie
1. `git clone https://github.com/Komodo2041/gameoflife.git`
2. Otwórz `index.html` w przeglądarce

##Example Video
https://youtu.be/GoWlnoKDErs
 
Ciekawy przykład generowanych serwet:
https://www.youtube.com/shorts/cdRTUYHPvWo

inne video pokazujące możliwośći automatu:
https://youtube.com/shorts/cdRTUYHPvWo

https://youtube.com/shorts/s2yLefx7w44

https://youtube.com/shorts/wjnuVc0XKCg

## Demo w akcji
[![Game of Life Demo](https://img.youtube.com/vi/GoWlnoKDErs/0.jpg)](https://www.youtube.com/watch?v=GoWlnoKDErs)

## Kluczowy algorytm – liczenie sąsiadów

```js
function calcNeighbor(table, x, y, infinity = 0) {
    let res = 0;

    for (i = -1; i <= 1; i++) {
        for (j = -1; j <= 1; j++) {
            if (infinity) {
                if (table[invinity(x + i)][invinity(y + j)] > 0) {
                    res++;
                }
            } else {
                if (x + i >= 0 && y + j >= 0 && x + i < 200 && y + j < 200) {
                    if (table[x + i][y + j] > 0) {
                        res++;
                    }
                }
            }
        }
    }

    if (table[x][y] > 0) {
        res--;
    }

    return res;
}


**Szukasz JS deva z algorytmami?**  
**#javascript #js #hiring #portfolio #gameoflife #canvas**

---