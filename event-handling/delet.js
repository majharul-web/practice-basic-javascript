// delete item
document.getElementById('delete-button').addEventListener('click', function () {
  const secretItem = document.getElementById('secret');
  secretItem.style.display = 'none';
});

// focus
document.getElementById('input-text').addEventListener('focus', function () {
  document.body.style.backgroundColor = 'red';
});
// blur
document.getElementById('input-text').addEventListener('blur', function () {
  document.body.style.backgroundColor = 'white';
});
// keyup;
document.getElementById('input-text').addEventListener('keyup', function (event) {
  const dBtn = document.getElementById('delete-button');
  if (event.target.value == 'delete') {
    dBtn.removeAttribute('disabled');
  } else {
    dBtn.setAttribute('disabled', true);
  }
});
// change;
document.getElementById('input-text').addEventListener('change', function () {
  const inputValue = document.getElementById('input-text');
  console.log(inputValue.value);
});
