// Объект с курсами 3-х валют
const rates = {};

// Элементы формы, ввод суммы, выбор валюты, поле с результатом
const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#select');


getCurrencies();

// Функция получения курса валют и отображения их на странице
async function getCurrencies() {
	const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
	const data = await response.json();
	const result = await data;
	rates.USD = result.Valute.USD;
	rates.EUR = result.Valute.EUR;
	rates.GBP = result.Valute.GBP;

}

// Слушаем изменения в текстовом поле и в select
input.oninput = convertValue;
select.oninput = convertValue;


// Функция конвертации
function convertValue() {
	result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2);
}



jQuery(document).ready(function () {



	jQuery('form button').click(function () {
		var form = jQuery(this).closest('form');
		if (form.valid()) {
			//form.css('opacity','.5');
			var actUrl = form.attr('action');

			jQuery.ajax({
				url: actUrl,
				type: 'post',
				dataType: 'html',
				data: form.serialize(),
				/*success: function (data) {
					//form.html(data);
					//form.css('opacity','1');
					//form.find('.status').html('форма отправлена успешно');
				},
				error: function () {
					//form.find('.status').html('серверная ошибка');
				}*/
			});
		}
	});
});