/**
 * Form validation
 */

new JustValidate('.form--login', {
  rules: {
    name: {
      required: true,
      function: (name, value) => {
        if (value === 'level') {
            return true;
        } else {
            return false;
        };
      },
    },
    password: {
      required: true,
      strength: {
        default: true // default is the same as this regex: '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$',
      },
      function: (name, value) => {
        if (value === 'Access123') {
            return true;
        } else {
            return false;
        };
      }
    }
  },
  messages: {
    name: {
      required: 'The username is required',
      function: 'The username is incorrect'
    },
    password: {
      required: 'The password is required',
      function: 'The password is incorrect'
    }
  },
  submitHandler: function (form, values, ajax) {
    let url = form.getAttribute('action');
    window.location.href = url;
  }
});
