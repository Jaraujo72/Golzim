function showLoading() {
    const div = document.createElement('div');
    div.classList.add("loading", "centralize");
    const label = document.createElement('label');
    label.innerText = "Carregando...";
    div.appendChild(label);

    document.body.appendChild(div);
}

function hideLoading() {
    const elements = document.getElementsByClassName("loading");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}