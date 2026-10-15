// Agregar dentro de options: { ... } del chartPastel
onClick: (evento, elementos) => {
    if (elementos.length > 0) {
        const indice = elementos[0].index;
        const bebidaSeleccionada = nombresBebidas[indice];
        alert("Filtrando dashboard por bebida: " + bebidaSeleccionada);
    }
}
