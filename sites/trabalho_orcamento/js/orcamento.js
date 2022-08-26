var itensOrcamento = [];

function adicionarItem(){
    //Captura dos elementos dos Inputs
    var inputDescricao = document.getElementById('descricao');
    var inputValor = document.getElementById('valor');

    //Validar dados de entrada
    if(inputDescricao.value == '' || inputValor.value == ''){
        alert('Ops!! Você deve preencher a descrição e o valor!')
        return;
    }

    //Montar o novo item no formato JSON
    var novoItem = {
        'descricao': inputDescricao.value,
        'valor': inputValor.value
    }

    //Adicionar um novo item no array de Itens do Orçamento
    itensOrcamento.push(novoItem);

    console.log(itensOrcamento);

    redesenharTabela();

    //Limpar os campos de entrada
    inputDescricao.value = ''; // '' ou null
    inputValor.value = '';
}

function redesenharTabela(){
    var corpoTabelaItens = '';
    var somatorio = 0;

    for(var i=0; i < itensOrcamento.length; i++){
        var item = itensOrcamento[i];
        var valor = parseFloat(item['valor']);

        somatorio += valor;

        corpoTabelaItens += `
            <tr>
                <td>${item['descricao']}</td>
                <td class="text-right">R$ ${valor.toFixed(2)}</td>
            </tr>
        `
    }

    var tabelaItensOrcamento = document.getElementById('tabela_itens_orcamento');
    tabelaItensOrcamento.innerHTML = corpoTabelaItens;

    var inputSomatorio = document.getElementById('somatorio');
    inputSomatorio.value = '$ ' + somatorio.toFixed(2);
}