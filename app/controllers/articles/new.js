import ArticleBaseController from './base';

export default ArticleBaseController.extend({
  actions:{
    cancel(){
      this.transitionToRoute('articles');
      return false;
    }
  }
});
