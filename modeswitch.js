for (var input of document.querySelectorAll("input.js_remember")) {
    input.addEventListener('change', rememberMe);
    if (localStorage.getItem(input.id) == "1") input.checked = true;
  }
  
  function rememberMe(event) {
    localStorage.setItem(
      event.currentTarget.id,
      event.currentTarget.checked ? "1" : "0"
    );
  } // rememberMe