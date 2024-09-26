document
  .getElementById('loginForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // 防止表單默認提交

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // 模擬登入邏輯
    if (username === 'admin' && password === 'password') {
      message.textContent = '登入成功！';
      message.style.color = 'green';
    } else {
      message.textContent = '用戶名或密碼錯誤！';
      message.style.color = 'red';
    }
  });
