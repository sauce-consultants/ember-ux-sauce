import {
  module,
  test
} from 'qunit';
import {
  setupRenderingTest
} from 'ember-qunit';
import {
  render
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import hasClasses from '../../../helpers/has-classes';

module('Integration | Component | uxs-data/value', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a uxs-data/value', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs `{{uxs-data/value "My Value"}}`);

    assert.equal(this.element.textContent.trim(), 'My Value');

    // Template block usage:
    await render(hbs `
      {{#uxs-data/value}}
        My Value
      {{/uxs-data/value}}
    `);

    assert.equal(this.element.textContent.trim(), 'My Value');
  });

  test('it renders a uxs-data/value with bem modifiers', async function(assert) {

    // Check default classes
    await render(hbs `{{uxs-data/value "My Value"}}`);

    // Should have the following classes
    hasClasses(assert, this.element.querySelector('[data-test-data-value]'), [
      'uxs-data__value',
      'uxs-data__value--list',
    ]);

    // Check modifier classes
    await render(hbs `{{uxs-data/value
      "My Value"
      align="right"
      color="primary"
      display="cell"
      inset=true
      name="my-value"
      padded=true
      size="small"
      style="light"
      truncate=true
      weight="light"
    }}`);

    // Should have the following classes
    hasClasses(assert, this.element.querySelector('[data-test-data-value="my-value"]'), [
      'uxs-data__value',
      'uxs-data__value--al-right',
      'uxs-data__value--cell',
      'uxs-data__value--c-primary',
      'uxs-data__value--s-small',
      'uxs-data__value--light',
      'uxs-data__value--inset',
      'uxs-data__value--padded',
      'uxs-data__value--w-light',
      'uxs-data__value--truncate',
    ]);

  });

});