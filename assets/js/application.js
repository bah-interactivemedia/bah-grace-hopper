---
# Javascipts!!!
---

// Vender JS
 -{% include_relative vendor/jquery.min.js %}
 -{% include_relative vendor/uswds.min.js %}

 // Add your JS sripts here
 function getSearch() {
     //evt.preventDefault();
     var q = document.getElementById('search-field-big');

     console.log(q.value);
     return false;
 }