$(function(){

	let all_values=[];

	let initial_options=$('#sf-size-min').get(0).options;
	for(i=0; i<initial_options.length; i++)
	{
		let val=parseInt(initial_options[i].value);
		let lbl=initial_options[i].label;
		all_values[i]={value: val, label: lbl };

	}

	document.getElementById('sf-size-min').options;

	$('#sf-size-min').change(function(){
		let $src=$('#sf-size-min');
		let $target=$('#sf-size-max');
		let prev_max_value=$target.val();
		let current_min_value=$src.val();

		$target.get(0).options.length=0;

		let j=0;
		for(i=$src.get(0).selectedIndex; i<all_values.length; i++)
		{
			$target.get(0).options[j++]=new Option(all_values[i].label, all_values[i].value);
		}
		$target.val(prev_max_value);

	});

	$('#sf-size-max').change(function(){
		let $src=$('#sf-size-max');
		let $target=$('#sf-size-min');
		let prev_min_value=$target.val();
		let current_max_value=parseInt($src.val());

		$target.get(0).options.length=0;

		let j=0;
		for(i=0; i<all_values.length;  i++)
		{
			if (current_max_value > all_values[i].value)
				$target.get(0).options[j++]=new Option(all_values[i].label, all_values[i].value);
		}
		$target.val(prev_min_value);
	});

})
$(function(){

	let all_values=[];

	let initial_options=$('#sf-size-min_1').get(0).options;
	for(i=0; i<initial_options.length; i++)
	{
		let val=parseInt(initial_options[i].value);
		let lbl=initial_options[i].label;
		all_values[i]={value: val, label: lbl };

	}

	document.getElementById('sf-size-min_1').options;

	$('#sf-size-min_1').change(function(){
		let $src=$('#sf-size-min_1');
		let $target=$('#sf-size-max_1');
		let prev_max_value=$target.val();
		let current_min_value=$src.val();

		$target.get(0).options.length=0;

		let j=0;
		for(i=$src.get(0).selectedIndex; i<all_values.length; i++)
		{
			$target.get(0).options[j++]=new Option(all_values[i].label, all_values[i].value);
		}
		$target.val(prev_max_value);

	});

	$('#sf-size-max_1').change(function(){
		let $src=$('#sf-size-max_1');
		let $target=$('#sf-size-min_1');
		let prev_min_value=$target.val();
		let current_max_value=parseInt($src.val());

		$target.get(0).options.length=0;

		let j=0;
		for(i=0; i<all_values.length;  i++)
		{
			if (current_max_value > all_values[i].value)
				$target.get(0).options[j++]=new Option(all_values[i].label, all_values[i].value);
		}
		$target.val(prev_min_value);
	});

})


$(function(){
    $('.fromTime').combodate({
        firstItem: 'none',
        value:  '00:00',
        minuteStep: 1
    });
    $('.toTime').combodate({
        firstItem: 'none',
        value:  '23:59',
        minuteStep: 1
    });
});

$(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});


for (let i = 17; i < 33; i++) {
  let copy_data = document.getElementById('sfSizeMin').cloneNode(true);
  copy_data.setAttribute('label', i);
  copy_data.setAttribute('value', i);
  document.getElementById("sf-size-min").appendChild(copy_data);
}
for (let i = 11; i < 36; i++) {
  let copy_data = document.getElementById('sfSizeMin_1').cloneNode(true);
  copy_data.setAttribute('label', i);
  copy_data.setAttribute('value', i);
  document.getElementById("sf-size-min_1").appendChild(copy_data);
}
for (let i = 17; i < 33; i++) {
  let copy_data = document.getElementById('sfSizeMax').cloneNode(true);
  copy_data.setAttribute('label', i);
  copy_data.setAttribute('value', i);
  document.getElementById("sf-size-max").appendChild(copy_data);
}
for (let i = 17; i < 36; i++) {
  let copy_data = document.getElementById('sfSizeMax_1').cloneNode(true);
  copy_data.setAttribute('label', i);
  copy_data.setAttribute('value', i);
  document.getElementById("sf-size-max_1").appendChild(copy_data);
}
function setTab(elem){
  for (var i = 0; i < document.getElementById('tabSelection').childElementCount; i++) {
    document.getElementById('tabSelection').children[i].classList.remove('setup-active');
  }
  elem.classList.add('setup-active');
}

for (let i = 1; i < 60; i++) {
  let copy_data = document.getElementsByClassName('minuteSelect')[0].cloneNode(true);
	if(i < 10){
		copy_data.innerText = '0'+i;
	} else {
		copy_data.innerText = i;
	}
  document.getElementById("minuteSelect").appendChild(copy_data);
}
for (let i = 1; i < 60; i++) {
  let copy_data = document.getElementsByClassName('minuteSelect')[1].cloneNode(true);
	if(i < 10){
		copy_data.innerText = '0'+i;
	} else {
		copy_data.innerText = i;
	}
  document.getElementById("minuteSelect_1").appendChild(copy_data);
}
$('select').change(function(){
  var text = $(this).find('option:selected').text()
  var $aux = $('<select/>').append($('<option/>').text(text))
  $(this).after($aux)
  $(this).width($aux.width())
  $aux.remove()
}).change()

var showBody = document.getElementsByClassName('level-table')[0];
var showHoliday = document.getElementsByClassName('level-holiday')[0];
var showAlerts = document.getElementsByClassName('level-alerts')[0];
var showMonitor = document.getElementsByClassName('level-monitor')[0];
var showSysPayment = document.getElementsByClassName('level-syspayment')[0];
var showBill = document.getElementsByClassName('level-bill')[0];



var adminLevel = document.getElementById('admin-level');
var adminLevelTab = document.getElementsByClassName('level-title')[0];



// show levels
document.getElementById('tabSelection').children[1].addEventListener('click', function(){
  showBody.style.display = "block";
  showHoliday.style.display = "none";
  showAlerts.style.display = "none";
	showMonitor.style.display = "none";
  showSysPayment.style.display = "none";

	adminLevel.classList.remove('nullPadding');
	adminLevelTab.style.display = "block"

	document.getElementById('levelLevelTwoTab').style.display = "none";
	document.getElementById('levelAdminTab').style.display = "flex";
 }, false);
// show system
document.getElementById('tabSelection').children[2].addEventListener('click', function(){
  showHoliday.style.display = "block";
  showBody.style.display = "none";
  showAlerts.style.display = "none";
	showMonitor.style.display = "none";
  showSysPayment.style.display = "none";

	adminLevel.classList.remove('nullPadding')
	adminLevelTab.style.display = "block"

	document.getElementById('levelLevelTwoTab').style.display = "flex";
	document.getElementById('levelAdminTab').style.display = "none";
 }, false);
document.getElementById('tabSelection').children[3].addEventListener('click', function(){
  showHoliday.style.display = "none";
  showBody.style.display = "none";
  showAlerts.style.display = "block";
	showMonitor.style.display = "none";
  showSysPayment.style.display = "none";

	adminLevel.classList.remove('nullPadding')
	adminLevelTab.style.display = "block";

	document.getElementById('levelLevelTwoTab').style.display = "flex";
	document.getElementById('levelAdminTab').style.display = "none";
 }, false);
document.getElementById('tabSelection').children[4].addEventListener('click', function(){
  showHoliday.style.display = "none";
  showBody.style.display = "none";
  showAlerts.style.display = "none";
  showMonitor.style.display = "block";
  showSysPayment.style.display = "none";

	adminLevel.classList.remove('nullPadding')
	adminLevelTab.style.display = "block";

	document.getElementById('levelLevelTwoTab').style.display = "flex";
	document.getElementById('levelAdminTab').style.display = "none";
 }, false);
document.getElementById('tabSelection').children[5].addEventListener('click', function(){
  showHoliday.style.display = "none";
  showBody.style.display = "none";
  showAlerts.style.display = "none";
  showMonitor.style.display = "none";
  showSysPayment.style.display = "block";

	adminLevel.classList.add('nullPadding')
	adminLevelTab.style.display = "none";


	document.getElementById('bill_level_style').disabled = true;
	document.getElementsByClassName('wrapperOne')[0].style.display = "block";
	document.getElementsByClassName('wrapperTwo')[0].style.display = "none";

	clearAllLevels();
	document.getElementsByClassName('control-large-levels')[0].style.display = "none";

 }, false);
document.getElementById('tabSelection').children[6].addEventListener('click', function(){
  showHoliday.style.display = "none";
  showBody.style.display = "none";
  showAlerts.style.display = "none";
  showMonitor.style.display = "none";
  showSysPayment.style.display = "block";


	adminLevel.classList.add('nullPadding')
	adminLevelTab.style.display = "none";

	document.getElementById('bill_level_style').disabled = false;
	document.getElementsByClassName('wrapperOne')[0].style.display = "none";
	document.getElementsByClassName('wrapperTwo')[0].style.display = "block";

	document.getElementById('levelLevelTwoTab').style.display = "none";
	document.getElementById('levelAdminTab').style.display = "flex";
	clearAllLevels();
	document.getElementsByClassName('control-large-levels')[0].style.display = "none";

 }, false);


function clearAllLevels(){
	var elem_ = document.getElementsByClassName('selectedLevel_1')[0];
	setOrange_1(elem_);
	document.getElementById('tab_2_value').classList.remove('tabActive');
  document.getElementById('tab_2_value').setAttribute('style', 'visibility: hidden; !important');
  clearAllMarked(1);
	document.getElementsByClassName('control-level')[1].style.display = "none";
}

  function createDate(days, months, years) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    date.setMonth(date.getMonth() + months);
    date.setFullYear(date.getFullYear() + years);
    return date;
 }

 var c_date = createDate(0,-1,0);



 let fromCalendar = new VanillaCalendar({
   selector: "#fromCalendar",
    months: ['January (01)', 'February (02)', 'March (03)', 'April (04)', 'May (05)', 'June (06)', 'July (07)', 'August (08)', 'September (09)', 'October (10)', 'November (11)', 'December (12)'],
    shortWeekday: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    date: c_date,
 })
 let toCalendar = new VanillaCalendar({
   selector: "#toCalendar",
    months: ['January (01)', 'February (02)', 'March (03)', 'April (04)', 'May (05)', 'June (06)', 'July (07)', 'August (08)', 'September (09)', 'October (10)', 'November (11)', 'December (12)'],
    shortWeekday: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

 })

for (var i = 0; i < document.getElementsByClassName('vanilla-calendar-date').length; i++) {
  document.getElementsByClassName('vanilla-calendar-date')[i].onclick = function(){
    if(this.style.color != 'rgb(237, 125, 50)'){
      this.setAttribute('style', 'color:#ED7D32 !important');
    } else {
      this.setAttribute('style', 'color:white !important');
    }
  }
}

for (var i = 0; i < document.getElementsByClassName('vanilla-calendar-btn').length; i++) {
	document.getElementsByClassName('vanilla-calendar-btn')[i].addEventListener('click', function(){
		for (var i = 0; i < document.getElementsByClassName('vanilla-calendar-date').length; i++) {
		  document.getElementsByClassName('vanilla-calendar-date')[i].onclick = function(){
		    if(this.style.color != 'rgb(237, 125, 50)'){
		      this.setAttribute('style', 'color:#ED7D32 !important');
		    } else {
		      this.setAttribute('style', 'color:white !important');
		    }
		  }
		}
	 }, false);
}

document.getElementsByClassName('vanilla-calendar-btn')[0].addEventListener('click', function(){
	document.getElementsByClassName('vanilla-calendar-btn')[2].click();
 }, false);
document.getElementsByClassName('vanilla-calendar-btn')[3].addEventListener('click', function(){
	document.getElementsByClassName('vanilla-calendar-btn')[1].click();
 }, false);


 //
// showBody.style.display = "none";
showHoliday.style.display = "none";
showAlerts.style.display = "none";
showMonitor.style.display = "none";
showSysPayment.style.display = "none";
//

$("#cardNumber").on("keydown", function(e) {
    var cursor = this.selectionStart;
    if (this.selectionEnd != cursor) return;
    if (e.which == 46) {
        if (this.value[cursor] == " ") this.selectionStart++;
    } else if (e.which == 8) {
        if (cursor && this.value[cursor - 1] == " ") this.selectionEnd--;
    }
}).on("input", function() {
    var value = this.value;
    var cursor = this.selectionStart;
    var matches = value.substring(0, cursor).match(/[^0-9]/g);
    if (matches) cursor -= matches.length;
    value = value.replace(/[^0-9]/g, "").substring(0, 16);
    var formatted = "";
    for (var i=0, n=value.length; i<n; i++) {
        if (i && i % 4 == 0) {
            if (formatted.length <= cursor) cursor++;
            formatted += " ";
        }
        formatted += value[i];
    }
    if (formatted == this.value) return;
    this.value = formatted;
    this.selectionEnd = cursor;
});

function dashboardSortSelect(elem){
  for (var i = 0; i < document.getElementsByClassName('sticks')[0].childElementCount; i++) {
    document.getElementsByClassName('sticks')[0].children[i].classList.remove('dashboard-table-sort-active');
    document.getElementsByClassName('sticks')[0].children[i].classList.add('text-white');
  }
  elem.classList.remove('text-white');
  elem.classList.add('dashboard-table-sort-active');
}

document.getElementById('setupModalConfirm').onclick = function(){
  document.getElementById('setupModal').setAttribute('style', 'visibility:hidden !important');
}
document.getElementById('setupModalCancel').onclick = function(){
  document.getElementById('setupModal').setAttribute('style', 'visibility:hidden !important');
}
function showCardModal(){
	document.getElementById('setupModal').setAttribute('style', 'visibility:visible !important');
}
$("#input-field").keyup(function(e) {
  var regex = /^[a-zA-Z@]+$/;
  if (regex.test(this.value) !== true)
    this.value = this.value.replace(/[^a-zA-Z@/\s/g]+/, '');
});

function fnExcelReport(table)
{
    var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange; var j=0;
    tab = document.getElementById(table);

    for(j = 0 ; j < tab.rows.length ; j++)
    {
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
    }

    tab_text=tab_text+"</table>";
    tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");
    tab_text= tab_text.replace(/<img[^>]*>/gi,"");
    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, "");

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    {
        txtArea1.document.open("txt/html","replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus();
        sa=txtArea1.document.execCommand("SaveAs",true,"Say Thanks to Sumit.xls");
    }
    else
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));

    return (sa);
}

document.getElementById('bill_level_style').disabled = true;


document.getElementById('setupDeleteAccountCancel').onclick = function(){
  document.getElementById('levelDeleteModal').style.display = 'none';
}
document.getElementById('setupDeleteAccountConfirm').onclick = function(){
  document.getElementById('levelDeleteModal').style.display = 'none';
}

function deleteModal(){
	document.getElementById('levelDeleteModal').style.display = "flex";
}


document.getElementById('monthDate').innerText = moment().month()+1;
document.getElementById('yearDate').innerText = moment().year();

if(moment().year() == 2019){
	document.getElementById('firstYear').setAttribute('selected', 'true');
} else if(moment().year() == 2020){
	document.getElementById('secondYear').setAttribute('selected', 'true');
} else if(moment().year() == 2021){
	document.getElementById('thirdYear').setAttribute('selected', 'true');
} else if(moment().year() == 2022){
	document.getElementById('fourYear').setAttribute('selected', 'true');
}
