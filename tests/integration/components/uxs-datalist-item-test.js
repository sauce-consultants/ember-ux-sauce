import { find } from '@ember/test-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-datalist-item', 'Integration | Component | uxs datalist item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uxs-datalist-item}}`);

  assert.equal(find('*').textContent.trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uxs-datalist-item}}
      template block text
    {{/uxs-datalist-item}}
  `);

  assert.equal(find('*').textContent.trim(), 'template block text');
});
