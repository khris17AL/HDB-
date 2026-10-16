// Base de datos de las tarjetas para renderizado dinámico
const datosTarjetas = [
    ["ANON-0012", 0.1290], ["ANON-0141", 0.1080], ["(En blanco)", 0.0890],
    ["ANON-1163", 0.0770], ["ANON-0276", 0.0690], ["ANON-0009", 0.0670],
    ["ANON-0507", 0.0510], ["ANON-0040", 0.0500], ["ANON-0097", 0.0470],
    ["ANON-1110", 0.0330], ["ANON-1170", 0.0320], ["ANON-0003", 0.0310]
];

// Función que inyecta las barras dinámicamente en el DOM al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("barrasContainer");
    
    if (contenedor) {
        datosTarjetas.forEach(([card, valor]) => {
            const fila = document.createElement("div");
            fila.className = "bar-row";
            
            // Calculamos el ancho proporcional de la barra roja
            const anchoPorcentaje = valor * 600;
            
            fila.innerHTML = `
                <div class="bar-label">${card}</div>
                <div style="flex:1">
                    <div class="bar-fill" style="width: ${anchoPorcentaje}%"></div>
                </div>
                <span>${valor.toFixed(4)}</span>
            `;
            
            contenedor.appendChild(fila);
        });
    }

    // Interactividad extra: Agregar eventos de clic a los bloques del Treemap
    const nodosTreemap = document.querySelectorAll(".nodo");
    nodosTreemap.forEach(nodo => {
        nodo.addEventListener("click", () => {
            const textoNodo = nodo.innerText.split("\n")[0];
            alert(`Tarjeta seleccionada del Treemap: ${textoNodo}`);
        });
    });
});
