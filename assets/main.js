function logar()
{
    let email = document.getElementById("InputEmail").value;
    let senha = document.getElementById("InputSenha").value;
    let existe = false;
    let nome = " ";

    let lista_usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if(email != "" && senha != "")
    {
        if(lista_usuarios != null)
        {
            for(i = 0; i < lista_usuarios.length; i++)
            {
                if(lista_usuarios[i].email == email)
                {
                    if(lista_usuarios[i]. senha == senha)
                    {
                        existe = true;
                        nome = lista_usuarios[i],nome;
                    }
                }
            }
        }
        else
        {
            document.getElementById("resposta").innerHTML = "usuario não cadastrado"
        }
    }
    else
    {
        document.getElementById("resposta").innerHTML = "digite o email ou senha"
    }
    if(existe)
    {
        document.getElementById("resposta").innerHTML = "seja bem vindo" + nome;
    }
    else
    {
        document.getElementById("resposta").innerHTML = "usuario nao existe"
    }
}
function SalvarLogin()
{
    let Nome = document.getElementById("inputnome").value;
    let Data = document.getElementById("inputdata").value;
    let Genero = document.querySelector('input[name="Genero"]:checked').value;
    let Telefone = document.getElementById("InputTelefone").value;
    let CPF = document.getElementById("InputCPF").value;
    let Email = document.getElementById("InputEmail").value;
    let Senha = document.getElementById("InputSenha").value;
    let Senha2 = document.getElementById("InputSenha2").value;

    var lista_usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    lista_usuarios.push({
        nome: Nome,
        data: Data,
        genero: Genero,
        telefone: Telefone,
        cpf: CPF,
        email: Email,
        senha: Senha,
        senha2: Senha2
    });

    localStorage.setItem("usuarios", JSON.stringify(lista_usuarios));

    document.getElementById("resposta").innerHTML = "Cadastrado com sucesso!"
}
function LimparLocalStorage()
{
    localStorage.clear();
}