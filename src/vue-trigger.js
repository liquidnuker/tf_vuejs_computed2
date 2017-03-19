var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
  },
  computed: {
    fullName: {
      // auto getter
      get: function () {
        return this.firstName + ' ' + this.lastName;
      },

      // setter
      set: function (newValue) {
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  },
  methods: {
    caps: function() {
      this.fullName = this.fullName.toUpperCase();
      this.$emit("caps");
    }
  }
});

vm.fullName = 'new name';

