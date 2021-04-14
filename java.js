$(document).ready(function() {
  var gsearch = function() {
    if(document.getElementById('searchme').value=="Grassroots"){
    var url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value;
    window.open(url, 'google');
  }
   else if(document.getElementById('searchme').value=="Volunteering"){
    var url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value;
    window.open(url, 'google');
  }
   else if(document.getElementById('searchme').value=="Mohandas Karamchand Gandhi"){
    var url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value;
    window.open(url, 'google');
  }
   else if(document.getElementById('searchme').value=="Julian Assange"){
    var url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value;
    window.open(url, 'google');
  }
   else if(document.getElementById('searchme').value=="Nelson Mandela"){
    var url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value;
    window.open(url, 'google');
  }
  else
  {
    gsearch();
  }
  };
  var glucky = function() {
    var url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value + '&btnI';
    window.open(url, 'google');
  };

  $(".left").click(gsearch);
  $(".right").click(glucky);

  $("#searchme").keypress(function(e) {
    if (e.which == 13) {
      gsearch();
    }
  });
});