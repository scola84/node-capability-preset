'use strict';

const Capability = require('@scola/capability');

class HairlineCapability extends Capability.Abstract {
  constructor() {
    super();
    this.isCapable = null;
  }

  test() {
    if (this.isCapable === null) {
      const element = this.window.document.createElement('div');
      element.style.border = '0.5px solid transparent';

      this.window.document.body.appendChild(element);
      this.isCapable = element.offsetHeight === 1;

      element.remove();
    }

    return this.isCapable;
  }
}

module.exports = HairlineCapability;
