import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  status: DS.attr('string'),
  postType: DS.attr('string'),
  likesCount: DS.attr('number')
});