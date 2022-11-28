import { xyDegree } from './../operations/xyDegree.js';
import { xyRoot } from './../operations/xyRoot.js';

export class XYDegreeCommand {
  constructor(prev, current) {
    this.previousValue = prev;
    this.currentValue = current;
  }
  execute() {
    return xyDegree(this.previousValue, this.currentValue);
  }
  undo(currentValue) {
    return xyRoot(currentValue, this.currentValue);
  }
}
