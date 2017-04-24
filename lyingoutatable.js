"use strict";
let UnderlinedCell = require('./underlinedcell.js').UnderlinedCell;
let RTextCell = require('./rttextcell.js').RTextCell;
let TextCell = require('./textcell.js').TextCell;
// Utils: Monkey Patching
String.prototype.repeat = function(times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += this;
  return result;
}

Array.prototype.range = function(block) {
  var r = [];
  for(var i = this[0]; i<this[1]; i++) {
    r.push(block(i));
  }
  return r;
}


// End Utils

// TextCell Class
/*function TextCell(text) {
  this.text = text.split("\n");
}
/*
  minWidth() returns a number indicating this cell’s minimum width
  (in characters).

TextCell.prototype.minWidth = function() {
  /*
    The reduce() method applies a function against an accumulator and
    each element in the array (from left to right) to reduce it to a
    single value.

  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
/*
  minHeight() returns a number indicating the minimum height this
  cell requires (in lines).

TextCell.prototype.minHeight = function() {
  return this.text.length;
};
/*
  draw(width, height) returns an array of length height, which contains
  a series of strings that are each width characters wide. This
  represents the content of the cell.

TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + " ".repeat(width - line.length));
  }
  return result;
};

// End TextCell

// UnderlinedCell Class
function UnderlinedCell(inner) {
  this.inner = inner;
}
/*
  minWidth() returns a number indicating this cell’s minimum width
  (in characters).

UnderlinedCell.prototype.minWidth = function() {
  return this.inner.minWidth();
};

  minHeight() returns a number indicating the minimum height this
  cell requires (in lines).

UnderlinedCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
};


  draw(width, height) returns an array of length height, which contains
  a series of strings that are each width characters wide. This
  represents the content of the cell.

UnderlinedCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height - 1)
    .concat(["-".repeat(width)]);
};
// End UnderlinedCell

// RTextCell
function RTextCell(text) {
  TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(" ".repeat(width - line.length) + line);
  }
  return result;
};
// End RTextCell

//---------------------------------------------
/*
  return the array of maximum heights of each row
*/
function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

/*
  return the array of maximum widths of each column
*/
function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
      // return new TextCell(String(row[name]));
      var value = row[name];
      if (/^\s*[-+]?\d+([.]\d*)?([eE][-+]?\d+)?\s*$/.test(value))
        return new RTextCell(String(value));
      else
        return new TextCell(String(value));
    });
  });
  return [headers].concat(body);
}

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}

function drawIt(data) {
  return drawTable(dataTable(data));
}

module.exports = {
  drawIt: drawIt,
  drawTable: drawTable,
  TextCell: TextCell,
  RTextCell: RTextCell,
  UnderlinedCell: UnderlinedCell
};
