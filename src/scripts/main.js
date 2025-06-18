'use strict';

const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (action) => {
  action.preventDefault();

  const link = action.target.closest('a');

  const largeImg = document.getElementById('largeImg');

  largeImg.src = link.href;
});
