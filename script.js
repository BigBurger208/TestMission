async function handleReg() {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;
  const errorMsg = document.getElementById("error-message");
  

  if (!username || !password) {
    errorMsg.textContent = "Введите имя пользователя и пароль.";
    return;
  }

  try {
    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1"
      },
      body: JSON.stringify({
        email: username,
        password: password
      })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      window.location.href = "weather.html";
    } else {
      errorMsg.textContent = data.error || "Ошибка авторизации.";
    }
  } catch (error) {
    errorMsg.textContent = "Произошла ошибка. Попробуйте позже.";
  }
}



async function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-message");

  if (!username || !password) {
    errorMsg.textContent = "Введите имя пользователя и пароль.";
    return;
  }

  try {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1"
      },
      body: JSON.stringify({
        email: username,
        password: password
      })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      window.location.href = "weather.html";
    } else {
      errorMsg.textContent = data.error || "Ошибка авторизации.";
    }
  } catch (error) {
    errorMsg.textContent = "Произошла ошибка. Попробуйте позже.";
  }
}