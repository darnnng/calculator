import { xyDegree } from './../operations/xyDegree.js';
import { xyRoot } from './../operations/xyRoot.js';

export class XYRootCommand {
  constructor(prev, current) {
    this.previousValue = prev;
    this.currentValue = current;
  }
  execute() {
    return xyRoot(this.previousValue, this.currentValue);
  }
  undo(currentValue) {
    return xyDegree(currentValue, this.currentValue);
  }
}
