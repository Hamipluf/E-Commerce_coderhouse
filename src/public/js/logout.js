const url = process.env.URL_PRODUCTION;

const logOutBtn = document.getElementById("btn_logout");
const cookies = document.cookie.firstName;
logOutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://e-commercecoderhouse-production.up.railway.app/api/auth/user/logout`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      if (res.status === 400 || "error") {
        Toastify({
          text: "Error en salir de la sesion",
          duration: 3000,
          gravity: "top",
          position: "right",
          style: {
            background: "linear-gradient(147deg, #ffc53b 0%, #FF2525 74%)",
          },
        }).showToast();
      }

      if (res.status === 500 || "error") {
        console.log("Error 500", res.statusText, "Pruebe de vuelta");
        Toastify({
          text: "No se pudo autenticar el usuario",
          duration: 3000,
          gravity: "top",
          position: "right",
          style: {
            background: "linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)",
          },
        }).showToast();
      }
      if (res.status === "succes") {
        Toastify({
          text: "Redireccionando",
          duration: 3000,
          gravity: "top",
          position: "right",
          style: {
            background: "linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)",
          },
        }).showToast();
        location.assign(
          "https://e-commercecoderhouse-production.up.railway.app/"
        );
      }
    })
    .catch((e) => console.log("*** ERROR ***", e));
});
