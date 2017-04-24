"use strict";

// UnderlinedCell Class
class UnderlinedCell {
  constructor(inner) {
  this.inner = inner;
}
/*
  minWidth() returns a number indicating this cell’s minimum width
  (in characters).
*/
  minWidth() {
    return this.inner.minWidth();
  };
/*
  minHeight() returns a number indicating the minimum height this
  cell requires (in lines).
*/
  minHeight() {
    return this.inner.minHeight() + 1;
  };

/*
  draw(width, height) returns an array of length height, which contains
  a series of strings that are each width characters wide. This
  represents the content of the cell.
*/
  draw(width, height) {
    return this.inner.draw(width, height - 1)
    .concat(["-".repeat(width)]);
  }
}

// End UnderlinedCell
module.exports = {
  UnderlinedCell: UnderlinedCell
}
