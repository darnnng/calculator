import { cubeRoot } from './../operations/cubeRoot.js';

export class CubeRootCommand {
  constructor(current) {
    this.currentValue = current;
  }

  execute() {
    return cubeRoot(this.currentValue);
  }

  undo() {
    return this.currentValue;
  }
}
