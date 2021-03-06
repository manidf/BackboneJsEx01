(function () {
  "use strict";
  APP.Models.NoteModel = Backbone.Model.extend({
    // you can set any defaults you would like here
    defaults: {
      title: "",
      description: ""

    },

  

    validate: function (attrs) {
      var errors = {};
      if (attrs.title === '') {
        errors.title = "Hey! Give this thing a title.";
      }
      if (attrs.description === '') {
        errors.description = "You gotta write a description, duh!";
      }


      if (!_.isEmpty(errors)) {
        return errors;
      }
    }
  });

  APP.Collections.NoteCollection = Backbone.Collection.extend({
    // Reference to this collection's model.
      model: APP.Models.NoteModel


  });
     
  
}());
