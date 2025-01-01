const btn = document.getElementById('btn');

btn.addEventListener('click',() => {
  console.log('ボタンをクリックしました');
  const text = document.getElementById('text')
  text.textContent = 'ボタンをクリックしました';
});