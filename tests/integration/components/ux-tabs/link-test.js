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

module('Integration | Component | uxs-tabs/link', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs `{{uxs-tabs/link}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs `
      {{#uxs-tabs/link}}
        template block text
      {{/uxs-tabs/link}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  })
});