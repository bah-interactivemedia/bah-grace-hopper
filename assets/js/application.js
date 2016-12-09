---
# Javascipts!!!
---

// Vender JS
 -{% include_relative vendor/jquery.min.js %}
 -{% include_relative vendor/uswds.min.js %}

 // Add your JS sripts here
 function getSearchResults() {
     
     $.getJSON('/data/repos.json', function(data){
         $(data).each(function(i, e){
             $("#ul-search-results").append('<li class="results-source"><small>Source</small> <a href="#">' + e.name + '</a></li><li class="results-languages"><small>Language</small><a href="#">' + e.lang + '</a></li>');
         });
     });
 }