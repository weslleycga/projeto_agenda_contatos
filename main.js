const form = document.getElementById('formContato');
    const lista = document.getElementById('listaContatos');

    form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const linha = document.createElement('tr');
    linha.innerHTML = `<td>${nome}</td><td>${telefone}</td>`;
    lista.appendChild(linha);

    form.reset();
    });