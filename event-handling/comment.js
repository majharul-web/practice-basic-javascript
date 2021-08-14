document.getElementById('submit-comment').addEventListener('click', function () {
  // 1.get input text
  const commentBox = document.getElementById('new-comment');

  //02. store comment in p
  const p = document.createElement('p');
  p.innerText = commentBox.value;

  //   append p
  const commentContainer = document.getElementById('comment-container');
  commentContainer.appendChild(p);

  //   4
  commentBox.value = '';
});
