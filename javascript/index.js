var obj = JSON.parse('{"feriados":[{"feriado": "Independência Do Brasil","data": "2020-09-07"},{"feriado": "Nossa Senhora Aparecida","data": "2020-10-12"},{"feriado": "Finados","data": "2020-11-02"},{"feriado": "Proclamação Da República","data": "2020-11-15"},{"feriado": "Natal",    "data": "2020-12-25"}]}');


// var feriados = JSON.parse[
// 	{
// 	  data: "2020-09-07",
// 		feriado: "Independencia do Brasil"
// 	},
// 	{
// 		data: "2020-10-12",
// 		feriado: "Nossa Senhora Aparecida"
// 	},
// 	{
// 		data: "2020-11-02",
// 		feriado: "Finados"
// 	},
// 	{
// 		data: "2020-11-15",
// 		feriado: "Proclamação da Republica"
// 	},
// 	{
// 		data: "2020-12-25",
// 		feriado: "Natal"
// 	},
// 	{
// 		data: "2020-01-01",
// 		feriado: "Confraternização Universal"
// 	},
// 	{
// 		data: "2021-01-02",
// 		feriado: "Carnaval"
// 	},
// 	{
// 		data: "2021-16-02",
// 		feriado: "Carnaval"
// 	},
// 	{
// 		data: "2021-02-04",
// 		feriado: "Paixão de Cristo"
// 	},
// 	{
// 		data: "2021-21-04",
// 		feriado: "Tiradentes"
// 	},
// 	{
// 		data: "2021-01-05",
// 		feriado: "Dia do Trabalho"
// 	},
// 	{
// 		data: "2021-03-06",
// 		feriado: "Corpus Christi"
// 	},
// 	{
// 		data: "2021-07-09",
// 		feriado: "Independencia do Brasil"
// 	},
// 	{
// 		data: "2021-12-10",
// 		feriado: ""
// 	},
// 	{
// 		data: "2021-12-10",
// 		feriado: "Nossa Senhora Aparecida - Padroeira do Brasil"
// 	},
// 	{
// 		data: "2021-02-11",
// 		feriado: "Finados"
// 	},
// 	{
// 		data: "2021-15-11",
// 		feriado: "Proclamação da Republica"
// 	}
// ];

var input = document.getElementById('inputData');

var resultadoCerto = document.getElementById('resultadoCerto');
var descricao = document.getElementById('descricao');
var resultadoErrado = document.getElementById('resultadoErrado');

function validar() {
	var achou = false;

	for (var contador = 0; contador <= obj.feriados.length; contador++) {
		if (input.value == obj.feriados[contador].data) {
			achou = true;
			resultadoCerto.style.display = 'block';
			descricao.style.display = 'block';
			resultadoErrado.style.display = 'none';
			document.querySelector("#descricao").innerHTML = "<h6 class='d-inline'>Descrição: </h6> " + feriados[contador].feriado;
			console.log("É feriado. Valor do input " + input.value);
			break;
		}
		else {
			achou = false;
			contador++;
		}
	}

	if (achou == false) {
		resultadoErrado.style.display = 'block';
		resultadoCerto.style.display = 'none';
		descricao.style.display = 'none';
		console.log("Não é feriado. Valor do input " + input.value);
	}
}





