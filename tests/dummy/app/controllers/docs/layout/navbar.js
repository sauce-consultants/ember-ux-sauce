import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  // Attributes
  title: 'AppName',
  fixed: false,
  // Computed
  styles: computed(function() {
    return [
      'primary',
      'accent',
      'dark',
      'grey',
      'mid',
      'light',
      'white',
      'success',
      'warning',
      'error',
    ];
  }),
});