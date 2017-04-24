"use strict";

// TextCell Class
class TextCell {
  constructor(text) {

  this.text = text.split("\n");

  }


/*
  minWidth() returns a number indicating this cell’s minimum width
  (in characters).
*/
minWidth() {
  /*
    The reduce() method applies a function against an accumulator and
    each element in the array (from left to right) to reduce it to a
    single value.
  */
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
/*
  minHeight() returns a number indicating the minimum height this
  cell requires (in lines).
*/
  minHeight() {
  return this.text.length;
  };
/*
  draw(width, height) returns an array of length height, which contains
  a series of strings that are each width characters wide. This
  represents the content of the cell.
*/
    draw(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(line + " ".repeat(width - line.length));
      }
        return result;
    }

  };

// End TextCell
module.exports = {
  TextCell : TextCell
}
