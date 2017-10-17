window.onload = function(){
	data = new Date();
    mes = data.getMonth();
	dia = data.getDate();
	ano = data.getFullYear();
	var str_data = dia + '/' + (mes+1) + '/' + ano;
	document.getElementById("DataAtual").value = str_data
}