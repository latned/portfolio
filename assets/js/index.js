let showSocial = true;

function contact() {
  if (showSocial) {
    document.getElementById('social').style.display = 'grid';
    document.getElementById('footer').style.marginTop = '0';
    showSocial = false;
  } else {
    document.getElementById('social').style.display = 'none';
    document.getElementById('footer').style.marginTop = '2rem';
    showSocial = true;
  }
}
