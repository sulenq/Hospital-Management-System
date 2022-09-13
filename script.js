function moreAction(x) {
  // closeAll();
  let abg = document.getElementById(x);
  if (abg.style.display == '' || abg.style.display == 'none') {
    document.getElementById(x).style.display = 'flex';
  } else {
    document.getElementById(x).style.display = 'none';
  }
}

function openModal(x) {
  document.getElementById(x).style.display = 'block';
  document.getElementById(x).style.display = 'block';
  document.getElementById('modalbg').style.display = 'block';
  disableScroll();
}

function closeModal(x) {
  document.getElementById(x).style.display = 'none';
  document.getElementById(x).style.display = 'none';
  document.getElementById('modalbg').style.display = 'none';
  enableScroll();
}

function disableScroll(){
  document.body.classList.add('disableScroll');
}
function enableScroll(){
  document.body.classList.remove('disableScroll');
}

function closeAll(){
  document.querySelectorAll('.abg').style.display = 'none';
}