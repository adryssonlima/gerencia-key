/*Este arquivo javaScript contém todas as funções para validação dos campos de todas as telas do Gerência Key*/

/*Valida a tela de login*/
function validar_tela_de_login() {
	login = document.formulario.login.value;
	senha = document.formulario.senha.value;
	
	if(!valida_login(login)) {
		return span1.innerHTML = "*Mínimo 1, máximo 10 caracteres!";
	}
	if(!valida_senha(senha)) {
		return span2.innerHTML = "*Mínimo 4, máximo 8 caracteres!";
	}
	document.formulario.submit();
}
/*Valida o campo de login (nome de usuário)*/
function valida_login(l) {
	er_login = /^.{4,10}$/;
	return er_login.test(l);
}
/*Valida o campo de senha*/
function valida_senha(s) {
	er_senha = /^.{4,8}$/;
	return er_senha.test(s);
}
/*Valida tela de esqueci minha senha*/
function validar_esqueci_minha_senha() {
	email = document.formulario.email.value;
	
	if(!valida_email(email)) {
		return span1.innerHTML = "*E-mail Inválido"
	}
}
/*Valida o campo de e-mail*/
function valida_email(e) {
	er_email = /^[\w-]+(\.[\w-]+)*@(([\w-]{2,63}\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
	return er_email.test(e);
}
/*Valida tela de editar perfil*/
function validar_editar_perfil() {
	senhaAtual = document.formulario.senhaAtual.value;
	novaSenha = document.formulario.novaSenha.value;
	repetirNovaSenha = document.formulario.repetirNovaSenha.value;
	
	if(!valida_senha(senhaAtual)) {
		return span1.innerHTML = "*Senha Inválida";
	}
	if(!valida_senha(novaSenha)) {
		return span2.innerHTML = "*Senha Inválida";
	}
	if(novaSenha != repetirNovaSenha) {
		return span3.innerHTML = "*Senhas incompatíveis!";
	}
}
/*Valida campo busca aluno*/
function validar_busca_aluno() {
	buscaAluno = document.formulario.buscaAluno.value;
	
	if(document.formulario.nome_mat.value == "nome") {
		if(!valida_nome(buscaAluno)) {
			return span1.innerHTML = "*Entre somente com letras";
		}
	}
	if(document.formulario.nome_mat.value == "matricula") {
		if(!valida_matricula(buscaAluno)) {
			return span1.innerHTML = "*A matrícula deve conter 12 números.";
		}
	}
}
/*Valida campo nome do aluno*/
function valida_nome(n) {
	er_nome = /^([a-zA-ZçÀ-û]+ ?)*?$/;
	return er_nome.test(n);
}
/*Valida campo matricula do aluno*/
function valida_matricula(m) {
	er_matricula = /^\d{12}$/;
	return er_matricula.test(m);
}
/*Valida tela (Cadastro novo armário)*/
function valida_cadastro_armario() {
	eixo = document.formulario.eixo.value;
	tombo = document.formulario.tombo.value;
	numeroArmario = document.formulario.numeroArmario.value;
	cor = document.formulario.cor.value;
	
	if(!valida_nome(eixo)) {
		return span1.innerHTML = "*Eixo inválido.";
	}
	if(!valida_tombo(tombo)) {
		return span2.innerHTML = "*Tombo inválido.";
	}
	if(!valida_num_armario(numeroArmario)) {
		return span3.innerHTML = "*Número do armário inválido."
	}
	if(!valida_nome(cor)) {
		return span4.innerHTML = "*Cor inválida."
	}
	
	portas = document.getElementsByName("porta");
	
	for(i=0; i<portas.length; i++) {
		if(!valida_numPorta(portas[i].value)) {
			return span5.innerHTML = "*O número da porta deve conter 4 digitos.";
			break;
		}
		for(j=i+1;j<portas.length;j++) {
			if(portas[i].value == portas[j].value) {
				return span5.innerHTML = "*As portas devem conter números diferentes!";
				break;
			}
		}
	}
}
/*Valida campo tombo*/
function valida_tombo(t) {
	er_tombo = /^[\d]+?$/;
	return er_tombo.test(t);
}
/*Valida campo número do armário*/
function valida_num_armario(num) {
	er_numArmario = /^[\d]+$/;
	return er_numArmario.test(num);
}
/*Valida campo número da porta*/
function valida_numPorta(numPorta) {
	er_numPorta = /^\d{4}$/;
	return er_numPorta.test(numPorta);
}
/*Valida o campo busca armário da tela editar armário*/
function valida_busca_armario() {
	eixo = document.busca.eixo.value;
	numeroArmario = document.busca.numeroArmario.value;
	
	if(!valida_nome(eixo)) {
		return spanBusca1.innerHTML = "*Eixo inválido.";
	}
	if(!valida_num_armario(numeroArmario)) {
		return spanBusca2.innerHTML = "*Número do armário inválido."
	}
}
/*Valida os campos da tela novo usuário*/
function valida_cadastro_usuario() {
	siape = document.formulario.siape.value;
	nome = document.formulario.nome.value;
	eixo = document.formulario.eixo.value;
	usuario = document.formulario.usuario.value;
	email = document.formulario.email.value;
	
	if(!valida_siape(siape)) {
		return span1.innerHTML = "*SIAPE inválido.";
	}
	if(!valida_nome(nome)) {
		return span2.innerHTML = "*Nome inválido.";
	}
	if(!valida_nome(eixo)) {
		return span3.innerHTML = "*Eixo inválido.";
	}
	if(!valida_login(usuario)) {
		return span4.innerHTML = "*Mínimo 4, máximo 10 caracteres.";
	}
	if(!valida_email(email)) {
		return span5.innerHTML = "*E-mail inválido.";
	}
}
/*Valida o campo SIAPE*/
function valida_siape(s) {
	er_siape = /^\d{7}$/
	return er_siape.test(s);
}
/*Valida o campo busca siape da tela editar usuário*/
function valida_busca_usuario() {
	siape = document.formulario.siapeBusca.value;
	
	if(!valida_siape(siape)) {
		return span6.innerHTML = "*SIAPE inválido."
	}
}
/*Valida excluir usuário*/
function valida_excluir_usuario() {
	alert("Deseja realmente excluir este usuário?");
}




