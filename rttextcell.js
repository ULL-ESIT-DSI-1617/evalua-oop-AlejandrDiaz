"use strict";

var TextCell = require('./textcell.js').TextCell;
// RTextCell

class RTextCell extends TextCell {
  constructor(text) {
      super(text);

}

  draw(width, height) {
    let result = [];
      for (let i = 0; i < height; i++){
        let line = this.text[i] || "";
        result.push(" ".repeat(width - line.length) + line);
      }
      return result;

  }

}
// End RTextCell

module.exports = {
  RTextCell:RTextCell
}
