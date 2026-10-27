/* The one place this site keeps its contact address (2026-10-27). Swap it to zack@boomkit.app once that mailbox
   exists; every page fills its [data-email] links and the creators form from this value. */
(function () {
  'use strict';
  var EMAIL = 'zack1sammons@gmail.com';
  window.BOOMKIT_EMAIL = EMAIL;

  function mailto(subject) {
    return 'mailto:' + EMAIL + (subject ? '?subject=' + encodeURIComponent(subject) : '');
  }

  Array.prototype.forEach.call(document.querySelectorAll('a[data-email]'), function (a) {
    a.href = mailto(a.getAttribute('data-subject'));
    a.textContent = EMAIL;
  });
  Array.prototype.forEach.call(document.querySelectorAll('form[data-email-form]'), function (form) {
    form.action = mailto(form.getAttribute('data-subject'));
  });
})();
