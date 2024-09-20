import {
  defineComponent,
  h
} from "./chunk-YNPXIQKL.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/jmc-ele-component-vue3/lib/expandDom-412b5539.mjs
var expandDom = defineComponent({
  name: "expandDom",
  props: {
    render: Function,
    item: {
      type: Object,
      default: () => {
      }
    }
  },
  render() {
    return this.render(h, this.item);
  }
});
export {
  expandDom as default
};
//# sourceMappingURL=expandDom-412b5539-EGKHDBKV.js.map
