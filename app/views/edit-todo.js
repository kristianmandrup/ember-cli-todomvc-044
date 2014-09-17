import Ember from "ember";

EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-todo', EditTodoView);

// export default EditTodoView