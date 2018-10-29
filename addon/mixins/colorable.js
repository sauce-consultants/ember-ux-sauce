import Mixin from '@ember/object/mixin';
import {
  computed,
  get
} from '@ember/object';

export default Mixin.create({
  // Attributes
  align: null,
  // Computed
  _color: computed('color', function() {
    return `c-${get(this, 'color')}`;
  }),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*style',
      '*_color'
    ]);
  },
  registerModifiers: function() {
    if (this._super) {
      this._super(...arguments);
    }
  },
});