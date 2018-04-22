EventList.prototype.initFirebase = function() {
  // this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
  // this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};
