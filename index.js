'use strict';

const DI = require('@scola/di');
const Capability = require('@scola/view-capability');

class Module extends DI.Module {
  configure() {
    this.addModule(Capability.Module);

    this.inject(Capability.Dispatcher)
      .insertArgument(0, this.object({
        hairline: this.singleton(require('./lib/hairline'))
      }));
  }
}

module.exports = {
  Dispatcher: Capability.Dispatcher,
  Module,
  Capability
};
