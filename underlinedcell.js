
// UnderlinedCell Class
function UnderlinedCell(inner) {
  this.inner = inner;
}
/*
  minWidth() returns a number indicating this cell’s minimum width
  (in characters).
*/
UnderlinedCell.prototype.minWidth = function() {
  return this.inner.minWidth();
};
/*
  minHeight() returns a number indicating the minimum height this
  cell requires (in lines).
*/
UnderlinedCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
};

/*
  draw(width, height) returns an array of length height, which contains
  a series of strings that are each width characters wide. This
  represents the content of the cell.
*/
UnderlinedCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height - 1)
    .concat(["-".repeat(width)]);
};
// End UnderlinedCell
module.exports = UnderlinedCell;
