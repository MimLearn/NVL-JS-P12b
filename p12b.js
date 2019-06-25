<script>
/*Reescribe el ejemplo de los números pares e impares utilizando la función o funciones que estimes oportunas para dejarlo más elegante.*/

var pares;
var impares;

function asignEvenorOdd (numero, array_pares, array_impares) {
	if(numero%2 == 0) {
		return array_pares.push(numero);
	} else {
		return array_impares.push(numero);
	}
}

for(int i=0; i<50; i++){
	var numero = Math.floor((Math.random() * 100) + 1);
	asignEvenorOdd (numero, pares, impares);
}

</script>