'use strict';

window.addEventLitener('load', function(event) {
  document.addEventListener('click', function() {
    event.preventDefault();
    document.elementFromPoint(event.clientX, event.clientY).remove();
  });
});