const dados = { 'compras': [] };
let lista;
$(() => {
    let item = $("#txtItem");
    lista = $("#lstCompras");

    $("#btnAdicionar").on("click", () => {
        dados.compras.push(item.val());
        exibirArray();
        item.val("");
        item.trigger("focus");
    });

    $("#btnArray").on("click", () => {
        exibirArray();
    });

    $("#btnSalvar").on("click", () => {
        salvarArray();
    });

    $("#btnCarregar").on("click", () => {
        carregarArray();
    });

});
function carregarArray() {
    if (localStorage.getItem('compras') != null)
        dados.compras = localStorage.getItem('compras').split(',');
}
function salvarArray() {
    localStorage.setItem('compras', dados.compras);
}
function exibirArray() {
    lista.empty();
    dados.compras.forEach(item => {
        exibirItem(item);
    });
}
function exibirItem(item) {
    let tag = $("<li></li>");
    tag.text(item);
    lista.append(tag);
}