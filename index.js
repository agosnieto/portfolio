document.addEventListener("DOMContentLoaded", function () {
  const name = document.getElementById("name");
  const texto = name.innerText;
  let indice = texto.length;

  name.innerText = "";

  function escribirTextoName() {
      if (indice >= 0) {
          name.innerText = texto.substring(indice, texto.length);
          indice--;
          setTimeout(escribirTextoName, 200);
      }
  }

  escribirTextoName();
});

document.addEventListener("DOMContentLoaded", function () {
  const developer = document.getElementById("developer");
  const texto = developer.innerText;
  let indice = 0;

  developer.innerText = "";

  function escribirTextoDeveloper() {
      if (indice <= texto.length) {
          developer.innerText = texto.substring(0,indice);
          indice++;
          setTimeout(escribirTextoDeveloper, 200);
      }
  }

  escribirTextoDeveloper();
});
