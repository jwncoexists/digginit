// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require marked
//= require_tree .
$(document).ready(function() {
  $('#js-wikititle').bind('input propertychange', function() {
    var mdtitle = "<h3>"+marked($(this).val())+"</h3>";
    ($('.js-titlepreview').html(mdtitle));
    return false;
  });
  $('#js-wikibody').bind('input propertychange', function() {
    var mdtxt = "<p>"+marked($(this).val())+"</p>";
    ($('.js-wikipreview').html(mdtxt));
    return false;
  });
});