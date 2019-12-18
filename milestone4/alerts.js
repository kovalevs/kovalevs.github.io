document.getElementById('settingSelect').children[0].style.color = "#EB7C32";

function whiteAllSetting(){
  for (var i = 0; i < document.getElementById('settingSelect').childElementCount; i++) {
    document.getElementById('settingSelect').children[i].style.color = "white";
  }
}

var table_1 = document.getElementById('alert-1');
var table_2 = document.getElementById('alert-2');
var table_3 = document.getElementById('alert-3');
var table_4 = document.getElementById('alert-4');
var table_5 = document.getElementById('alert-5');
var table_6 = document.getElementById('alert-last');

function hideTables(){
  table_1.style.display = "none";
  table_2.style.display = "none";
  table_3.style.display = "none";
  table_4.style.display = "none";
  table_5.style.display = "none";
  table_6.style.display = "none";
}
hideTables();
table_1.style.display = "table";

var newDate = document.getElementById('mobileTitle');

mobileTitle.innerText = document.getElementsByClassName('dashboard-table-date')[0].innerText;

function show_1(){
  whiteAllSetting();
  // Test value
    mobileTitle.innerText = document.getElementsByClassName('dashboard-table-date')[0].innerText;
  //

  document.getElementById('settingSelect').children[0].style.color = "#EB7C32";
  document.getElementById('setupModal').setAttribute('style', 'display:flex !important');
  hideTables();
  table_1.style.display = "table";


  document.getElementById('save-1').onclick = function(){
    fnExcelReport('alert-1');
  }
}
function show_2(){

  // Test value
    mobileTitle.innerText = document.getElementsByClassName('dashboard-table-date')[3].innerText;
  //
  whiteAllSetting();
  document.getElementById('settingSelect').children[1].style.color = "#EB7C32";
  hideTables();
  table_2.style.display = "table";

  document.getElementById('save-1').onclick = function(){
    fnExcelReport('alert-2');
  }
}
function show_3(){
  // Test value
    mobileTitle.innerText = document.getElementsByClassName('dashboard-table-date')[8].innerText;
  //
  whiteAllSetting();
  document.getElementById('settingSelect').children[2].style.color = "#EB7C32";
  hideTables();
  table_3.style.display = "table";

  document.getElementById('save-1').onclick = function(){
    fnExcelReport('alert-3');
  }
}
function show_4(){
  // Test value
    mobileTitle.innerText = document.getElementsByClassName('dashboard-table-date')[12].innerText;
  //
  whiteAllSetting();
  document.getElementById('settingSelect').children[3].style.color = "#EB7C32";
  hideTables();
  table_4.style.display = "table";

  document.getElementById('save-1').onclick = function(){
    fnExcelReport('alert-4');
  }
}
function show_5(){
  // Test value
    mobileTitle.innerText = document.getElementsByClassName('dashboard-table-date')[14].innerText;
  //
  whiteAllSetting();
  document.getElementById('settingSelect').children[4].style.color = "#EB7C32";
  hideTables();
  table_5.style.display = "table";

  document.getElementById('save-1').onclick = function(){
    fnExcelReport('alert-5');
  }
}
function show_6(){
  whiteAllSetting();
  document.getElementById('settingSelect').children[5].style.color = "#EB7C32";
  hideTables();
  table_6.style.display = "table";
}

function dashboardSortSelect(elem){
  for (var i = 0; i < document.getElementsByClassName('sticks')[0].childElementCount; i++) {
    document.getElementsByClassName('sticks')[0].children[i].classList.remove('dashboard-table-sort-active');
    document.getElementsByClassName('sticks')[0].children[i].classList.add('text-white');
  }
  elem.classList.remove('text-white');
  elem.classList.add('dashboard-table-sort-active');
}
function dashboardSortSelect_1(elem){
  for (var i = 0; i < document.getElementsByClassName('sticks')[1].childElementCount; i++) {
    document.getElementsByClassName('sticks')[1].children[i].classList.remove('dashboard-table-sort-active');
    document.getElementsByClassName('sticks')[1].children[i].classList.add('text-white');
  }
  elem.classList.remove('text-white');
  elem.classList.add('dashboard-table-sort-active');
}
function dashboardSortSelect_2(elem){
  for (var i = 0; i < document.getElementsByClassName('sticks')[2].childElementCount; i++) {
    document.getElementsByClassName('sticks')[2].children[i].classList.remove('dashboard-table-sort-active');
    document.getElementsByClassName('sticks')[2].children[i].classList.add('text-white');
  }
  elem.classList.remove('text-white');
  elem.classList.add('dashboard-table-sort-active');
}
function dashboardSortSelect_3(elem){
  for (var i = 0; i < document.getElementsByClassName('sticks')[3].childElementCount; i++) {
    document.getElementsByClassName('sticks')[3].children[i].classList.remove('dashboard-table-sort-active');
    document.getElementsByClassName('sticks')[3].children[i].classList.add('text-white');
  }
  elem.classList.remove('text-white');
  elem.classList.add('dashboard-table-sort-active');
}
function dashboardSortSelect_4(elem){
  for (var i = 0; i < document.getElementsByClassName('sticks')[4].childElementCount; i++) {
    document.getElementsByClassName('sticks')[4].children[i].classList.remove('dashboard-table-sort-active');
    document.getElementsByClassName('sticks')[4].children[i].classList.add('text-white');
  }
  elem.classList.remove('text-white');
  elem.classList.add('dashboard-table-sort-active');
}


document.getElementById('setupModalConfirm').onclick = function(){
  document.getElementById('setupModal').setAttribute('style', 'display:none !important');
}

function showDate(elem){
  var time = moment().format('DD.MM.YYYY[</br>] HH:mm')
  elem.outerHTML = time;
}


var showCount = document.getElementsByClassName('show_count');
showCount[0].innerHTML = document.getElementById('alert-1').children[0].childElementCount - 1;
showCount[1].innerHTML = document.getElementById('alert-2').children[0].childElementCount - 1;
showCount[2].innerHTML = document.getElementById('alert-3').children[0].childElementCount - 1;
showCount[3].innerHTML = document.getElementById('alert-4').children[0].childElementCount - 1;
showCount[4].innerHTML = document.getElementById('alert-5').children[0].childElementCount - 1;

var needJ = 0;
function setBlue(elem){
  alertsData = document.getElementsByClassName('alertsData');
  for (var i = 0; i < alertsData.length; i++) {
     alertsData[i].children[0].style.background = "#262626";
     alertsData[i].children[1].style.background = "#262626";
     alertsData[i].children[2].style.background = "#262626";
   }

  for (var i = 0; i < document.getElementsByClassName('link-class').length; i++) {
    if(document.getElementsByClassName('link-class')[i] == elem){
      needJ = i;
    }
  }
  for (var i = 0; i < document.getElementsByClassName('alertsData')[needJ].childElementCount; i++) {
    document.getElementsByClassName('alertsData')[needJ].children[i].style.background = "#303D52";
  }

}







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
