let TextCell = require('./textcell.js');
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
module.exports = RTextCell;
