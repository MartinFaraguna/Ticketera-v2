window.addEventListener("load", function () {
  let form = document.querySelector(".form");
  let box = document.querySelector(".box");
  let boton = document.querySelector(".enviar");

  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10}$/, // 10 numeros.
    documento: /^\d{8}$/, // 8 numeros.
    anydesk: /^\d{9,10}$/, // 8 numeros.
    box: /^\d{4}$/, // 4 numeros.
    usuario: /^.{4,7}$/, // 7 caracteres
  };

  form.addEventListener("submit", function (event) {
    // event.preventDefault();
    let errores = [];

    if (!expresiones.nombre.test(form.nombre.value)) {
      form.nombre.classList.add("invalid", "is-invalid");
      errores.push(1);
    } else {
      form.nombre.classList.remove("invalid", "is-invalid");
      flag = 0;
    }

    if (!expresiones.nombre.test(form.apellido.value)) {
      form.apellido.classList.add("invalid", "is-invalid");
      errores.push(1);
    } else {
      form.apellido.classList.remove("invalid", "is-invalid");
    }

    if (!expresiones.documento.test(form.documento.value)) {
      form.documento.classList.add("invalid", "is-invalid");
      errores.push(1);
    } else {
      form.documento.classList.remove("invalid", "is-invalid");
    }

    if (!expresiones.telefono.test(form.telefono.value)) {
      form.telefono.classList.add("invalid", "is-invalid");
      errores.push(1);
    } else {
      form.telefono.classList.remove("invalid", "is-invalid");
    }

    if (!expresiones.usuario.test(form.usuario.value)) {
      form.usuario.classList.add("invalid", "is-invalid");
      errores.push(1);
    } else {
      form.usuario.classList.remove("invalid", "is-invalid");
    }

    if (form.campana.value === "0") {
      form.campana.classList.add("invalid");
      errores.push(1);
    } else {
      form.campana.classList.remove("invalid");
    }

    if (form.turno.value === "0") {
      form.turno.classList.add("invalid");
      errores.push(1);
    } else {
      form.turno.classList.remove("invalid");
    }

    if (!expresiones.nombre.test(form.superior.value)) {
      form.superior.classList.add("invalid", "is-invalid");
      errores.push(1);
    } else {
      form.superior.classList.remove("invalid", "is-invalid");
    }

    if (!expresiones.correo.test(form.email.value)) {
      form.email.classList.add("invalid", "is-invalid");
      errores.push(1);
    } else {
      form.email.classList.remove("invalid", "is-invalid");
    }

    if (form.motivo.value === "0") {
      form.motivo.classList.add("invalid");
      errores.push(1);
    } else {
      form.motivo.classList.remove("invalid");
    }

    if (form.ubicacion.value === "0") {
      form.ubicacion.classList.add("invalid");
      errores.push(1);
    } else {
      form.ubicacion.classList.remove("invalid");
    }

    if (form.ubicacion.value === "Home Office") {
      if (!expresiones.anydesk.test(form.anydesk.value)) {
        form.anydesk.classList.add("invalid", "is-invalid");
        form.puesto.classList.remove("invalid", "is-invalid");
        box.classList.remove("invalid");

        errores.push(1);
      } else {
        form.anydesk.classList.remove("invalid", "is-invalid");
      }
    } else if (form.ubicacion.value !== "0") {
      if (!expresiones.box.test(form.puesto.value)) {
        form.puesto.classList.add("invalid", "is-invalid");
        box.classList.add("invalid");
        form.anydesk.classList.remove("invalid", "is-invalid");

        errores.push(1);
      } else {
        form.puesto.classList.remove("invalid", "is-invalid");
        box.classList.remove("invalid");
      }
    }

    if (form.comentario.value === "") {
      form.comentario.classList.add("invalid", "is-invalid");
      errores.push(1);
    } else {
      form.comentario.classList.remove("invalid", "is-invalid");
    }

    if (errores.length > 0) {
      event.preventDefault();
    } else {
      boton.classList.add("success");
      boton.disabled;
      boton.innerHTML =
        '<i class="fa fa-spinner fa-spin cargando"></i> Cargando...';
    }
  });
});
