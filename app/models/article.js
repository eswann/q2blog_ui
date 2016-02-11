import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  dateCreated: DS.attr('date'),
  dateModified: DS.attr('date')
});
