$('.catlist a:contains("Culture")').css('background-color', '#f85c50');
$('.catlist a:contains("Coding")').css('background-color', '#6EB7C6');

function popitup(url) {
  newwindow = window.open(url, 'name', 'height=200, width=450');
  if (window.focus) {newwindow.focus()}
  return false;
}

function popitup_fb(url, title) {
  newwindow = window.open('http://www.facebook.com/share.php?u='+url, 'name', 'height=200, width=450');
  if (window.focus) {newwindow.focus()}
  return false;
}


