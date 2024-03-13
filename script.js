// Função auxiliar para contar e exibir o total de tarefas
function contarTarefas() {
    // Atualiza o texto da <span> com a quantidade de elementos <li> na lista de tarefas
    $('span').text($('#lista-tarefas li').length);
}

// Função para adicionar uma nova tarefa à lista
function addTarefa() {
    // Verifica se o campo de nova tarefa está vazio
    if ($('#nova-tarefa').val() === '') {
        // Exibe um alerta se o campo estiver vazio
        alert("É necessário inserir um nome para a tarefa antes de adicioná-la!");
    } else {
        // Obtém o valor da nova tarefa
        const novaTarefa = $('#nova-tarefa').val();

        // Adiciona um novo elemento <li> à lista de tarefas
        $("#lista-tarefas").append(`<li class="item-lista"><p>${novaTarefa}</p><button type="button" class="btn-remove">Excluir/Concluir</button></li>`);

        // Limpa o campo de nova tarefa e dá foco a ele para facilitar a entrada da próxima tarefa
        $('#nova-tarefa').val('').focus();

        // Chama a função para contar e exibir o total de tarefas
        contarTarefas();
    }
}

// Função para remover uma tarefa da lista
function removerTarefa() {
    // Obtém o texto da tarefa específica que está sendo removida
    const textoTarefa = $(this).closest('li').find('p').text();

    // Exibe uma mensagem de confirmação personalizada com o texto da tarefa
    const confirmacao = confirm(`Deseja excluir a seguinte tarefa: ${textoTarefa}?`);

    // Verifica se o usuário confirmou antes de remover a tarefa
    if (confirmacao) {
        // Remove o elemento <li> correspondente à tarefa
        $(this).closest('li').remove();

        // Chama a função para contar e exibir o total de tarefas
        contarTarefas();
    }
}

// Função para alternar entre temas claro e escuro
function alternarTema(){
    // Alterna a classe 'tema-escuro' no elemento com ID 'container'
    $('#container').toggleClass('tema-escuro');

    // Obtém a classe atual do elemento 'container'
    var classeAtual = $('#container').attr('class');

    // Atualiza as imagens dos ícones de sol e lua com base no tema atual
    if(classeAtual === 'tema-claro'){
        $('#icon-sol').attr('src', './assets/icon-sol-1.png');
        $('#icon-lua').attr('src', './assets/icon-lua-1.png');
    }else{
        $('#icon-sol').attr('src', './assets/icon-sol-2.png');
        $('#icon-lua').attr('src', './assets/icon-lua-2.png');
    }
}

// Eventos

// Associa a função addTarefa ao evento de clique no botão com ID btn-add
$('#btn-add').click(addTarefa);

// Utiliza a delegação de eventos para associar a função removerTarefa aos botões com classe btn-remove dentro da lista de tarefas
$('#lista-tarefas').on('click', '.btn-remove', removerTarefa);

// Associa a função alternarTema ao evento de clique no botão com ID btn-tema
$('#btn-tema').click(alternarTema);
