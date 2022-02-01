const grid = new Muuri(".grid", {
  layout: {
    rounding: false,
  },
});

window.addEventListener("load", () => {
  grid.refreshItems().layout();

  document.getElementById("grid").classList.add("imgenes-cargadas");

  const enlaces = document.querySelectorAll("#categorias a");
  enlaces.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
      evento.preventDefault();

      enlaces.forEach((enlace) => enlace.classList.remove("activo"));

      evento.target.classList.add("activo");

      const categorias = evento.target.innerHTML.toLowerCase();
      categorias === "europa"
        ? grid.filter("[data-categorias]")
        : grid.filter(`[data-categorias="${categorias}"]`);
    });
  });

  document
    .querySelector("#barra-busqueda")
    .addEventListener("input", (evento) => {
      const busqueda = evento.target.value;
      grid.filter((item) =>
        item.getElement().dataset.etiquetas.includes(busqueda)
      );
    });

  //los botones para la imagen

  const overlay = document.getElementById("overlay");
  document.querySelectorAll(".grid .item img").forEach((elemento) => {
    const ruta = elemento.getAttribute("src");

    elemento.addEventListener("click", () => {
      const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
      overlay.classList.add("activo");
      document.querySelector("#overlay img").src = ruta;
      document.querySelector("#overlay .descripcion").innerHTML = descripcion;
    });
  });

  //ruta de la x o sierre
  document.querySelector("#btn-cerrar").addEventListener("click", () => {
    overlay.classList.remove("activo");
  });
  //ruta de hove
  overlay.addEventListener("click", (evento) => {
    evento.target.id === "overlay" ? overlay.classList.remove("activo") : "";
  });
});

const hamburge = document.getElementById("lookList");
const lista = document.getElementById("categorias");
function lookList() {
  lista.style.display = "block";
  console.log(lista);
}

hamburge.addEventListener("click", lookList);
