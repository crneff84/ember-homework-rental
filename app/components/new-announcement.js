import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },
      saveAnnouncement1(){
      console.log("announcement1");
      var params={
        header: this.get("header"),
        admin: this.get("admin"),
        message: this.get("message")
      };
      this.set('addNewAnnouncement',false);
      this.sendAction('saveAnnouncement2',params);
    }
  }
});
