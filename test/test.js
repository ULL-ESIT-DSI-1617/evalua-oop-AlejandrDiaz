// Testing drawIt
var dt = require("../lyingoutatable.js");
var drawIt = dt.drawIt;
var UnderlinedCell = dt.UnderlinedCell;
var RTextCell = dt.RTextCell;
require("should");

var MOUNTAINS = [
  {name: "Kilimanjaro\nMontaña mágica", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal\nPaís lejano"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

var expected =
`name           height country
-------------- ------ -------------
Kilimanjaro      5895 Tanzania
Montaña mágica
Everest          8848 Nepal
                      País lejano
Mount Fuji       3776 Japan
Mont Blanc       4808 Italy/France
Vaalserberg       323 Netherlands
Denali           6168 United States
Popocatepetl     5465 Mexico       `;

describe("drawIt", function() {
  it("must draw the mountains table correctly", function() {
    drawIt(MOUNTAINS).should.equal(expected);
  })
});

var TextCell = dt.TextCell;
var drawTable = dt.drawTable;

function checkerboard() {
  var rows = [];
  for (var i = 0; i < 5; i++) {
     var row = [];
     for (var j = 0; j < 5; j++) {
       row.push(new TextCell(((j+i)%2)? " " : "##"));
     }
     rows.push(row);
  }
  return rows;
}

var expectedCheckerboard =
`##    ##    ##
   ##    ##
##    ##    ##
   ##    ##
##    ##    ##`;

describe("drawTable", function() {
  it("must draw the checkerboard correctly", function() {
    drawTable(checkerboard()).should.equal(expectedCheckerboard);
  })
});

// Test TextCell

var textcell = new TextCell(`Kilimanjaro\nMontaña Mágica`);
var expectedtextcell = [ `Kilimanjaro   `, `Montaña Mágica` ];

describe("TextCell", function() {
  it("must draw the textcell correctly", function() {
    (textcell.draw(14, 2)[0]).should.equal(expectedtextcell[0]);
    (textcell.draw(14, 2)[1]).should.equal(expectedtextcell[1]);
  })
});

// Test UnderlinedCell

var undercell = new UnderlinedCell(new TextCell(`Everest`));
var expectedunderlinedcell = [ `Everest       `, `--------------` ];

describe("UnderlinedCell", function() {
  it("must draw the underlinedcell correctly", function() {
    (undercell.draw(14, 2)[0]).should.equal(expectedunderlinedcell[0]);
    (undercell.draw(14, 2)[1]).should.equal(expectedunderlinedcell[1]);
  })
});

//Test RTextCell

var Rtextcell = new RTextCell(`8848`);

var expectedRtextcell = [`          8848`];

describe("RTextCell", function() {
  it("must draw the rtextCell correctly", function() {
    (Rtextcell.draw(14, 1)[0]).should.equal(expectedRtextcell[0]);
  })
});
