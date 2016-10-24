import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    delete(announcement){
      if(confirm("do you want to delete")){
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
