import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.title',
    'model.body',
    {
      get() {
        return !Ember.isEmpty(this.get('model.title')) &&
          !Ember.isEmpty(this.get('model.body'));
      }
    }
  ),
  actions:{
    save(){
      if(this.get('isValid')) {
        this.get('model').save().then((article) => {
          this.transitionToRoute('articles.show', article);
        });
      } else {
        this.set('errorMessage', 'You have to include a title and body.');
      }
    },
    cancel(){
      this.transitionToRoute('articles');
      return false;
    }
  }
});
