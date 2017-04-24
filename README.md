
[![Build Status](https://travis-ci.org/ULL-ESIT-DSI-1617/evalua-oop-AlejandrDiaz.svg?branch=master)](https://travis-ci.org/ULL-ESIT-DSI-1617/evalua-oop-AlejandrDiaz)




## Eloquent JavaScript. Chapter 6: The Secret Life of Objects.  Section *Laying out a table*

Forman parte de este ejemplo los ficheros:

```
gulpfile.js         - test: run mocha tests
                    - debug: uses chrome to debug the program
                    - run: run the program
lyingoutatable.js   - La librería con las clases
main-draw-table.jsa - Programa principal que usa la librería
test/test.js        - pruebas en Mocha
mountains.json      - Fichero de entrada
package.json        - Dependencias
```

Este ejemplo se corresponde con la sección **Laying out a table**
del capítulo 6 **[The Secret Life of Objects](http://eloquentjavascript.net/06_object.html)** del libro **Eloquent javaScript**

The program receives as input an array of objects
like this:

```javascript
~/javascript/learning/oop-eloquentjs-example(master)]$ cat mountains.json
[
  {"name": "Kilimanjaro\nMontaña mágica", "height": 5895, "country": "Tanzania"},
  {"name": "Everest", "height": 8848, "country": "Nepal\nPaís lejano"},
  {"name": "Mount Fuji", "height": 3776, "country": "Japan"},
  {"name": "Mont Blanc", "height": 4808, "country": "Italy/France"},
  {"name": "Vaalserberg", "height": 323, "country": "Netherlands"},
  {"name": "Denali", "height": 6168, "country": "United States"},
  {"name": "Popocatepetl", "height": 5465, "country": "Mexico"}
]
```
All the logic is in the library `lyingoutatable.js`. The `main-draw-table.js` program
is quite simple:
```javascript
[~/javascript/learning/oop-eloquentjs-example(master)]$ cat main-draw-table.js
var drawTable = require("lyingoutatable");
var MOUNTAINS = require("./mountains.json");

console.log(drawTable(MOUNTAINS));
```

The function `drawTable` builds up a string that contains a nicely
laid out table—meaning that the columns are straight and the rows
are aligned:

````bash
[~/javascript/learning/oop-eloquentjs-example(master)]$ node main-draw-table.js
name           height country      
-------------- ------ -------------
Kilimanjaro    5895   Tanzania     
Montaña mágica                     
Everest        8848   Nepal        
                      País lejano  
Mount Fuji     3776   Japan        
Mont Blanc     4808   Italy/France
Vaalserberg    323    Netherlands  
Denali         6168   United States
```
