var Surface = require('famous/core/surface');
var React = require('react');

function transparentApply(fun, that, args) {
  return fun.apply(that, Array.prototype.slice.apply(args));
}

function ReactSurface() {
  transparentApply(Surface,this,arguments);
}
ReactSurface.prototype = Object.create(Surface.prototype);
ReactSurface.prototype.constructor = ReactSurface;

ReactSurface.prototype.deploy = function deploy (target) {
  var content = this.getContent();

  if (React.isValidElement(content)){
    React.render(content,target);
    this._cachedContent = content;
  } else {
    if (this._cachedContent) {
      React.render(this._cachedContent, target);
    } else {
      throw new Error("Content is not a valid react component");
    }
  }
}

module.exports = ReactSurface;
