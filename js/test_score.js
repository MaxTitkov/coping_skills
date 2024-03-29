
function counter(){
	let avoidanceScore = 0;
	let ruminationScore = 0;
	let shortTermScore = 0;
	let responcePersistenceScore = 0;
	let aggressionScore = 0;
	let negAppraisalScore = 0;

	$("input[type='radio']").each(function(){


		if ($(this).is(':checked')){

			if ($(this).attr('name').slice(-1) === '1'){
				avoidanceScore += Number($(this).val())

			}else if($(this).attr('name').slice(-1) === '2'){
				ruminationScore += Number($(this).val())

			}else if($(this).attr('name').slice(-1) === '3'){
				shortTermScore += Number($(this).val())

			}else if($(this).attr('name').slice(-1) === '4'){
				responcePersistenceScore += Number($(this).val())

			}else if($(this).attr('name').slice(-1) === '5'){
				aggressionScore += Number($(this).val())

			}else if($(this).attr('name').slice(-1) === '6'){
				negAppraisalScore += Number($(this).val())
			}	
		}
	})

	return {'avoidanceScore': avoidanceScore, 
			'ruminationScore': ruminationScore, 
			'shortTermScore': shortTermScore, 
			'responcePersistenceScore': responcePersistenceScore,
			'aggressionScore': aggressionScore,
			'negAppraisalScore': negAppraisalScore}

}


let methods = {
	'shortTermScore': ['<a href="../methods/values_in_action.html">Ценностно-ориентированная терапия</a>'],
	'ruminationScore': ['<a href="../methods/mindfulness.html">Осознанность</a>', '<a href="../methods/defusion.html">Дефьюжн</a>'],
	'avoidanceScore' : ['<a href="../methods/mindfulness.html">Осознанность</a>', '<a href="../methods/doing_the_opposite.html">Противоположное действие</a>'],
	'negAppraisalScore': ['<a href="../methods/defusion.html">Дефьюжн</a>', '<a href="../methods/flexibility-trening.html" class="btn btn-primary">Тренинг когнитивной гибкости</a>'],
	'responcePersistenceScore': ['<a href="../methods/self_soothing.html">Само-релаксация</a>', '<a href="../methods/doing_the_opposite.html">Противоположное действие</a>', '<a href="../methods/interpersonal-effectiveness.html">Эффективная коммуникация</a>'],
	'aggressionScore': ['<a href="../methods/interpersonal-effectiveness.html">Эффективная коммуникация</a>']

}


button = $('#test-btn').on('click', function () {

	scores = counter()
	scoresSorted = Object.keys(scores).sort(function(a, b){return scores[b] - scores[a]})
	render(scoresSorted)
	
	return scoresSorted	
});