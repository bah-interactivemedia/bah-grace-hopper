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
             $(".usa-media-block-inner").append('<h3 class="results-title">' + e.name + '</h3><p class="results-description">' + e.description + '</p>');
         });
     });
 }