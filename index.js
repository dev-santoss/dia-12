let arrayUsuario = []
let arraySenhas = []
continuar = 1
let contadorIndexUsuario_Senha = 0



while (continuar == 1) {
    switch (Number(prompt('Olá, selecione umas das opções que deseja:\n 1-Cadastro \n 2-Login \n 3-Excluir um cadastro \n 4-Encerrar'))) {
        case 1:
            let nomeUsuario = prompt('Digite o nome do seu usuário')
            
        if (arrayUsuario.includes(nomeUsuario)) {
                window.alert('Usuário já existente')
                break
            }
            let senhaUsuario = prompt('Crie uma senha para o seu usuário')
        arrayUsuario[contadorIndexUsuario_Senha] = nomeUsuario
        arraySenhas[contadorIndexUsuario_Senha] = senhaUsuario
           
        contadorIndexUsuario_Senha++ 
            break;
        case 2:
            let usuario = prompt('Digite seu usuário')
            let senha = prompt('Digite sua senha')
            let userIndex = arrayUsuario.indexOf(usuario)
            if (arraySenhas[userIndex] == senha) {
                window.alert('Logado com sucesso')
            }
            else{
                window.alert('Usuário ou senha incorretos.')
            }
            break
        case 3:
            let excluirUsuario = prompt('Qual usuário deseja deletar?')
            let excluirIndex = arrayUsuario.indexOf(excluirUsuario)
            let excluirSenha = prompt('Digite sua senha')
            if (excluirIndex == -1 || excluirSenha != arraySenhas[excluirIndex]) {
                window.alert('Usuário ou senha inexistente.')
                break
            }
            if (arraySenhas[excluirIndex] == excluirSenha ) {
                let confirmarDelete = prompt(`Tem certeza que deseja excluir o usuário ${excluirUsuario}? \n 1-SIM \n 2-NÃO`)
                if (confirmarDelete == 1) {
                 arraySenhas.splice(excluirIndex)
                window.alert('Usuário excluído com sucesso')
                }
                
            }
            
            break

        case 4:
            continuar = 0
            console.log('Programa encerrado!')
            break
        default:
            console.log('Opçao inválida.')
            continuar = 0
            break;
    }

}