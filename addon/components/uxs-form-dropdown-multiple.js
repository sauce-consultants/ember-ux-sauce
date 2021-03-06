import PowerSelectMultiple from 'ember-power-select/components/power-select-multiple';
import Accessible from 'ember-ux-sauce/mixins/accessible';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  defineProperty,
} from '@ember/object';
import {
  computed,
  get
} from '@ember/object';
import {
  alias,
  oneWay,
} from '@ember/object/computed';

export default PowerSelectMultiple.extend(Accessible, BEMComponent, Testable, {
  // Attributes
  base: 'uxs-form__input',
  isDropdown: true,
  tagName: 'div',
  // Computed
  dropdownClass: computed('style', function() {
    const classNames = [],
      base = 'uxs-form__dropdown',
      style = get(this, 'style');

    classNames.push(base);

    if (style) {
      classNames.push(`${base}--${style}`);
    }

    return classNames.join(' ');
  }),
  // Methods
  init() {
    this._super(...arguments);
    this.initModifiers();
  },
  initModifiers() {
    this.registerModifiers([
      'disabled',
      'isDropdown:dropdown',
      'error',
      'inline',
      'warning',
      '*style',
    ]);
  },

  /**
   * If this control has a model and name defined
   * we create an alias for the bound value.
   * We also create a one way computed property to
   * read the current validation state of the property.
   */
  initModelComputedProperties() {
    let model = this.get('model'),
      propName = this.get('name');

    if (model && propName) {
      defineProperty(this, 'validator', oneWay(`model.validations.attrs.${propName}`));
      // map the value to mode.property - this can be overridden by passing value
      // property into this component
      defineProperty(this, 'value', alias(`model.${propName}`));
      defineProperty(this, 'selected', alias(`model.${propName}`));
    }
  },
});