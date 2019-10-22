// TEST DATA GENERATION, REMOVE IT WHEN USE REAL DATABASE
for (let i = 0; i < 20; i++) {
  let copy_data = document.getElementsByClassName('admin-table-line')[0].cloneNode(true);
  document.getElementById("adminTableData").appendChild(copy_data);
}
for (let i = 0; i < 2; i++) {
  let copy_data = document.getElementById('level_31_tableLine').cloneNode(true);
  document.getElementById("level_3_1_TableData").appendChild(copy_data);
}
for (let i = 0; i < 20; i++) {
  let copy_data = document.getElementsByClassName('level_2_table-line')[0].cloneNode(true);
  document.getElementById("level_2_TableData").appendChild(copy_data);
}
for (let i = 0; i < 20; i++) {
  document.getElementsByClassName('level_1_table-level')[i].innerText = "Level " + i;

  document.getElementsByClassName('level_3_table-level')[i].innerText = "Level " + i;
}

for (let i = 0; i < 20; i++) {
  let copy_data = document.getElementsByClassName('level_1_table-line')[0].cloneNode(true);
  document.getElementById("level_1_TableData").appendChild(copy_data);
}

for (let i = 0; i < 20; i++) {
  document.getElementsByClassName('level_1_table-level')[i].innerText = "Level " + i;
  document.getElementsByClassName('level_1_table-username')[i].value = "City " + i;
  document.getElementsByClassName('level-table-username')[i].value = "City " + i + 2;

  document.getElementsByClassName('level_2_table-level')[i].innerText = "Level " + i;
  document.getElementsByClassName('level_2_table-level')[i].innerText = "Level " + i;
  document.getElementsByClassName('level_3_table-level')[i].innerText = "Level " + i;
  document.getElementsByClassName('level_3_table-level')[i].innerText = "Level " + i;

}


// END OF TEST DATA

document.getElementById('setupModaWelcomelConfirm').onclick = function(){
  document.getElementById('setupModalWelcome').style.display = 'none';
}
document.getElementById('home-desktop-setup').onclick = function(){
  document.getElementById('setupModal').style.display = 'flex';
}
document.getElementById('setupModalCancel').onclick = function(){
  document.getElementById('setupModal').style.display = 'none';
}
document.getElementById('setupModalConfirm').onclick = function(){
  document.getElementById('setupModal').style.display = 'none';
}
document.getElementById('level-info').onclick = function(){
  document.getElementById('setupModalWelcome').style.display = 'flex';
}

Sortable.create(adminTableData, {
  group: 'adminTableData',
  animation: 100
});

Sortable.create(level_1_TableData, {
  group: 'level_1_TableData',
  animation: 100
});

Sortable.create(level_2_TableData, {
  group: 'level_2_TableData',
  animation: 100
});
Sortable.create(level_3_TableData, {
  group: 'level_3_TableData',
  animation: 100
});
Sortable.create(level_3_0_TableData, {
  group: 'level_3_0_TableData',
  animation: 100
});


// Generate diffrent id s for admin table
let admin_table_delete = document.getElementsByClassName('admin-table-delete');
let level_delete_modal = document.getElementById('levelDeleteModal');

for (let i = 0; i < admin_table_delete.length; i++) {
  admin_table_delete[i].setAttribute('id',' adminTableDelete_' + i);
  admin_table_delete[i].onclick = function(){
    level_delete_modal.style.display = "flex";
  }

  document.getElementsByClassName('admin-level-checkbox')[i].setAttribute('id','adminLevelCheckbox_' + i);
  document.getElementsByClassName('admin-level-label')[i].setAttribute('for','adminLevelCheckbox_' + i);
}
// Generate diffrent id s for level 3 table


for (let i = 0; i < document.getElementsByClassName('level_3-label').length; i++) {
  document.getElementsByClassName('level_3-checkbox')[i].setAttribute('id','level_3_0_LevelCheckbox_' + i);
  document.getElementsByClassName('level_3-label')[i].setAttribute('for','level_3_0_LevelCheckbox_' + i);
}

for (let i = 0; i < document.getElementsByClassName('level_3-label_0').length; i++) {
  document.getElementsByClassName('level_3-checkbox_0')[i].setAttribute('id','level_3_1_LevelCheckbox_' + i);
  document.getElementsByClassName('level_3-label_0')[i].setAttribute('for','level_3_1_LevelCheckbox_' + i);
}

// Generate diffrent id s for 1 level table
let level_1_delete = document.getElementsByClassName('level_1_table-delete');

for (let i = 0; i < level_1_delete.length; i++) {
  level_1_delete[i].setAttribute('id',' level_1_TableDelete_' + i);
  level_1_delete[i].onclick = function(){
    level_delete_modal.style.display = "flex";
  }

  document.getElementsByClassName('level_1-checkbox')[i].setAttribute('id','level_1_LevelCheckbox_' + i);
  document.getElementsByClassName('level_1-label')[i].setAttribute('for','level_1_LevelCheckbox_' + i);
}

document.getElementById('setupDeleteAccountCancel').onclick = function(){
  document.getElementById('levelDeleteModal').style.display = 'none';
}
document.getElementById('setupDeleteAccountConfirm').onclick = function(){
  document.getElementById('levelDeleteModal').style.display = 'none';
}

// Generate diffrent id s for 2 level table
let level_2_delete = document.getElementsByClassName('level_2_table-delete');

for (let i = 0; i < level_1_delete.length; i++) {
  level_2_delete[i].setAttribute('id',' level_2_TableDelete_' + i);
  level_2_delete[i].onclick = function(){
    level_delete_modal.style.display = "flex";
  }

  document.getElementsByClassName('level_2-checkbox')[i].setAttribute('id','level_2_LevelCheckbox_' + i);
  document.getElementsByClassName('level_2-label')[i].setAttribute('for','level_2_LevelCheckbox_' + i);
}

document.getElementById('setupDeleteAccountCancel').onclick = function(){
  document.getElementById('levelDeleteModal').style.display = 'none';
}
document.getElementById('setupDeleteAccountConfirm').onclick = function(){
  document.getElementById('levelDeleteModal').style.display = 'none';
}

let levelOne = document.getElementById('level_1_table');
let levelTwo = document.getElementById('level_2_table');
let levelThree = document.getElementById('level_3');
let levelAdmin = document.getElementById('admin_table');

let levelAdminTab = document.getElementById('levelAdminTab');
let levelOneTab = document.getElementById('levelLevelOneTab');
let levelTwoTab = document.getElementById('levelLevelTwoTab');
let levelThreeTab = document.getElementById('levelLevelThreeTab');

let addTab = document.getElementById('admin-add').style.display;

let levelSubextCustom = document.getElementById('level-subtext-custom').style.display;

function showLevelAdmin(element){
  levelAdmin.style.display = "table";
  levelOne.style.display = "none";
  levelTwo.style.display = "none";
  levelThree.style.display = "none";

  levelOneTab.style.display = "none";
  levelTwoTab.style.display = "none";
  levelAdminTab.style.display = "flex";
  levelThreeTab.style.display = "none";

  document.getElementById('level-subtext-custom').style.display = "none";
  document.getElementById('level-subtext-common').style.display = "block";

  document.getElementById('admin-add').style.display = "block";
  levelSubextCustom = "none";
}
function showLevelOne(element){
  levelOne.style.display = "table";
  levelAdmin.style.display = "none";
  levelTwo.style.display = "none";
  levelThree.style.display = "none";

  levelOneTab.style.display = "flex";
  levelTwoTab.style.display = "none";
  levelAdminTab.style.display = "none";
  levelThreeTab.style.display = "none";

  if(element.classList.contains('level_1_table-level')){
    for (let i = 0; i < document.getElementsByClassName('level_1_table-level').length; i++) {
      if(document.getElementsByClassName('level_1_table-level')[i] == element){
          document.getElementById('levelLevelOneTabValue').innerText = document.getElementsByClassName('level_1_table-username')[i].value;
      }
    }
  }
  document.getElementById('admin-add').style.display = "block";

  document.getElementById('level-subtext-custom').style.display = "none";
  document.getElementById('level-subtext-common').style.display = "block";

  levelSubextCustom = "none";
}
function showLevelTwo(element){
  levelOne.style.display = "none";
  levelTwo.style.display = "table";
  levelAdmin.style.display = "none";
  levelThree.style.display = "none";

  levelOneTab.style.display = "none";
  levelTwoTab.style.display = "flex";
  levelAdminTab.style.display = "none";
  levelThreeTab.style.display = "none";

  for (let i = 0; i < document.getElementsByClassName('level_2_table-level').length; i++) {
    if(document.getElementsByClassName('level_2_table-level')[i] == element){
        document.getElementById('levelLevelTwoTabValue').innerText = document.getElementsByClassName('level-table-username')[i].value;
    }
  }
  document.getElementById('levelTwoRef').innerText = document.getElementById('levelLevelOneTabValue').innerText;
  document.getElementById('levelTwoRef_0').innerText = document.getElementById('levelLevelOneTabValue').innerText;
  document.getElementById('level-subtext-custom').style.display = "block";
  document.getElementById('level-subtext-common').style.display = "none";

  document.getElementById('admin-add').style.display = "block";
  levelSubextCustom = "block";
}

function showLevelThree(element){
  levelOne.style.display = "none";
  levelTwo.style.display = "none";
  levelAdmin.style.display = "none";
  levelThree.style.display = "table";

  levelOneTab.style.display = "none";
  levelTwoTab.style.display = "none";
  levelThreeTab.style.display = "flex";
  levelAdminTab.style.display = "none";

  for (let i = 0; i < document.getElementsByClassName('level-table-sitename').length; i++) {
    if(document.getElementsByClassName('level_3_table-level')[i] == element){
      document.getElementById('levelLevelThreeTabValue').innerText = document.getElementsByClassName('level-table-sitename')[i].value;
    }
  }

  document.getElementById('levelThreeRef').innerText = document.getElementById('levelLevelTwoTabValue').innerText;

  document.getElementById('level-subtext-custom').style.display = "none";
  document.getElementById('level-subtext-common').style.display = "block";

  document.getElementById('admin-add').style.display = "none";
  levelSubextCustom = "block";
}



function levelLinkChange(elem){
  if( elem.classList.contains('level-link') ){
    elem.classList.add('level-link-green');
    elem.classList.remove('level-link');
  } else {
    elem.classList.add('level-link');
    elem.classList.remove('level-link-green');

  }
}
function levelHideCheckboxLabel(elem){
  for (let i = 0; i < document.getElementsByClassName('level_2-checkbox').length; i++) {
    if( document.getElementsByClassName('level_2-checkbox')[i] == elem){
      if(elem.checked){
        document.getElementsByClassName('level-checkbox-label')[i].style.visibility = "hidden";
      } else {
        document.getElementsByClassName('level-checkbox-label')[i].style.visibility = "visible";
      }
    }
  }
}
$(function(){
    $('.fromTime').combodate({
        firstItem: 'none',
        value:  '09:00',
        minuteStep: 15
    });
    $('.toTime').combodate({
        firstItem: 'none',
        value:  '17:00',
        minuteStep: 15
    });
});

for (let i = 0; i < document.getElementsByClassName('fromServerDisabled').length; i++) {
  document.getElementsByClassName('fromServerDisabled')[i].setAttribute('disabled', 'true');
}




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

$(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});

$(".dropdown-menu_0 li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});
$(".dropdown-menu_1 li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});


for (let i = 17; i < 33; i++) {
  let copy_data = document.getElementById('sfSizeMin').cloneNode(true);
  copy_data.setAttribute('label', i);
  copy_data.setAttribute('value', i);
  document.getElementById("sf-size-min").appendChild(copy_data);
}
for (let i = 17; i < 33; i++) {
  let copy_data = document.getElementById('sfSizeMax').cloneNode(true);
  copy_data.setAttribute('label', i);
  copy_data.setAttribute('value', i);
  document.getElementById("sf-size-max").appendChild(copy_data);
}

function setOrange(elem){
  elem.style.color = "rgb(237, 125, 50)";
}

document.getElementsByClassName('noContent')[document.getElementsByClassName('noContent').length-1].value = "";
document.getElementsByClassName('noContent')[document.getElementsByClassName('noContent').length-2].value = "";
