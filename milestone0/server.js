
// TEST DATA GENERATION, REMOVE IT WHEN USE REAL DATABASE
for (let i = 0; i < 50; i++) {
  let copy_data = document.getElementsByClassName('dashboard-table-data')[0].cloneNode(true);
  document.getElementById("dashboard-table").appendChild(copy_data);
}
for (let i = 0; i < 51; i++) {
  document.getElementsByClassName('dashboard-table-accountname')[i].innerText = i;
}

for (let i = 0; i < 50; i++) {
  let copy_data = document.getElementsByClassName('dashboard-statistics-table-data')[0].cloneNode(true);
  document.getElementById("dashboard-statistics-table").appendChild(copy_data);
}
for (let i = 0; i < 51; i++) {
  document.getElementsByClassName('dashboard-statistics-table-accounts')[i].innerText = i;
}

for (let i = 0; i < 50; i++) {
  let copy_data = document.getElementsByClassName('dashboard-alerts-table-data')[0].cloneNode(true);
  document.getElementById("dashboard-alerts-table").appendChild(copy_data);
}
for (let i = 0; i < 51; i++) {
  document.getElementsByClassName('dashboard-alerts-table-errorid')[i].innerText = i;
}

for (let i = 0; i < 3; i++) {
  let copy_data = document.getElementsByClassName('dashboard-table-admin-data')[0].cloneNode(true);
  document.getElementById("dashboard-admin-table").appendChild(copy_data);
}
for (let i = 0; i < 3; i++) {
  if(i==0){
    document.getElementsByClassName('dashboard-admin-table-total')[i].classList.add("dashboard-admin-table-total-disconnected");
  } else{
    document.getElementsByClassName('dashboard-admin-table-total')[i].classList.add("dashboard-admin-table-total-paid");
  }
}

for (let i = 0; i < 15; i++) {
  let copy_data = document.getElementsByClassName('dashboard-table-popup-data')[0].cloneNode(true);
  document.getElementById("dashboard-popup-table").appendChild(copy_data);
}
for (let i = 0; i < 15; i++) {
  let copy_data = document.getElementsByClassName('dashboard-table-popup-default-data')[0].cloneNode(true);
  document.getElementById("dashboard-popup-default-table").appendChild(copy_data);
}
for (let i = 0; i < 15; i++) {
  document.getElementsByClassName('dashboard-table-accountname')[i].innerText = i;
}

for (let i = 0; i < 5; i++) {
  if(i==0){
    document.getElementsByClassName('dashboard-table-popup-data')[i].classList.add("dashboard-table-popup-data-disconnected");
    document.getElementsByClassName('dashboard-table-popup-default-data')[i].classList.add("dashboard-table-popup-default-data-disconnected");
  } else if(i==1){
    document.getElementsByClassName('dashboard-table-popup-data')[i].classList.add("dashboard-table-popup-data-delayed");
    document.getElementsByClassName('dashboard-table-popup-default-data')[i].classList.add("dashboard-table-popup-default-data-delayed");
  } else{
    document.getElementsByClassName('dashboard-table-popup-data')[i].classList.add("dashboard-table-popup-data-paid");
    document.getElementsByClassName('dashboard-table-popup-default-data')[i].classList.add("dashboard-table-popup-default-data-paid");
  }
}
// END OF TEST DATA




// Login / reset password modals
let reset_modal = document.getElementById('resetModal');
let log_modal = document.getElementById('logModal');

let log_modal_reset = document.getElementById('logModalReset');
let reset_modal_cancel = document.getElementById('resetModalCancel');
let reset_modal_confirm = document.getElementById('resetModalConfirm');

log_modal_reset.onclick = function(){
  log_modal.style.display = "none";
  reset_modal.style.display = "flex";
}

reset_modal_cancel.onclick = function(){
  reset_modal.style.display = "none";
  log_modal.style.display = "flex";
}

reset_modal_confirm.onclick = function(){
  reset_modal.style.display = "none";
  log_modal.style.display = "none";
}
// Delete account modal
let dashboard_delete = document.getElementsByClassName('dashboardTableDelete');
let dashboard_delete_modal = document.getElementById('dashboardDeleteModal');

let dashboard_delete_cancel  = document.getElementById('dashboardDeleteAccountCancel');
let dashboard_delete_confirm = document.getElementById('dashboardDeleteAccountConfirm');

// Generate diffrent id s for delete account label
for (let i = 0; i < dashboard_delete.length; i++) {
  dashboard_delete[i].setAttribute('id','dashboardTableDelete_' + i);
  dashboard_delete[i].onclick = function(){
    dashboard_delete_modal.style.display = "flex";
  }
}

dashboard_delete_confirm.onclick = function(){
  dashboard_delete_modal.style.display = "none";
}
dashboard_delete_cancel.onclick = function(){
  dashboard_delete_modal.style.display = "none";
}
// Delete account modal (Admin tab)
let dashboard_admin_delete = document.getElementsByClassName('dashboardAdminTableDelete');

// Generate diffrent id s for delete account label (Admin tab)
for (let i = 0; i < dashboard_admin_delete.length; i++) {
  dashboard_admin_delete[i].setAttribute('id','dashboardAdminTableDelete_' + i);
  dashboard_admin_delete[i].onclick = function(){
    dashboard_delete_modal.style.display = "flex";
  }
}
let dashboard_admin_table_active = document.getElementsByClassName('dashboardAdminTableCheckbox');
let dashboard_admin_table_active_label = document.getElementsByClassName('dashboardAdminTableLabel');

// Generate diffrent id s active account label
for (let i = 0; i < dashboard_admin_table_active.length; i++) {
  dashboard_admin_table_active[i].setAttribute('id','dashboardAdminTableActive_' + i);
  dashboard_admin_table_active_label[i].setAttribute('for','dashboardAdminTableActive_' + i);
}

dashboard_delete_confirm.onclick = function(){
  dashboard_delete_modal.style.display = "none";
}
dashboard_delete_cancel.onclick = function(){
  dashboard_delete_modal.style.display = "none";
}
// New password modal
let dashboard_password = document.getElementsByClassName('dashboardTableActive');
let dashboard_password_modal = document.getElementById('dashboardActiveModal');

let dashboard_password_cancel  = document.getElementById('dashboardActiveAccountCancel');
let dashboard_password_confirm = document.getElementById('dashboardActiveAccountConfirm');


// Generate diffrent id s for password label
for (let i = 0; i < dashboard_password.length; i++) {
  dashboard_password[i].setAttribute('id','dashboardTablePassword_' + i);
  dashboard_password[i].onclick = function(){
    dashboard_password_modal.style.display = "flex";
  }
}

dashboard_password_confirm.onclick = function(){
  dashboard_password_modal.style.display = "none";
}
dashboard_password_cancel.onclick = function(){
  dashboard_password_modal.style.display = "none";
}

let dashboard_table_active = document.getElementsByClassName('dashboardTableCheckbox');
let dashboard_table_active_label = document.getElementsByClassName('dashboardTableLabel');

// Generate diffrent id s active account label
for (let i = 0; i < dashboard_table_active.length; i++) {
  dashboard_table_active[i].setAttribute('id','dashboardTableActive_' + i);
  dashboard_table_active_label[i].setAttribute('for','dashboardTableActive_' + i);
}

let dashboard_showAll = document.getElementById('dashboard_main_showAll');
let dashboard_showSingle = document.getElementById('dashboard_main_showSingle');
let dashboard_showAdmin = document.getElementById('dashboard_main_showAdmin');
let dashboard_showAirconet = document.getElementById('dashboard_main_showAirconet');

function dashboard_disableAllTabs(){
  dashboard_showAll.classList.remove('dashboard-navigation-active');
  dashboard_showSingle.classList.remove('dashboard-navigation-active');
  dashboard_showAdmin.classList.remove('dashboard-navigation-active');
  dashboard_showAirconet.classList.remove('dashboard-navigation-active');
}
dashboard_showAll.onclick = function(){
  dashboard_disableAllTabs();
  dashboard_showAll.classList.add('dashboard-navigation-active');
}
dashboard_showSingle.onclick = function(){
  dashboard_disableAllTabs();
  dashboard_showSingle.classList.add('dashboard-navigation-active');
}
dashboard_showAdmin.onclick = function(){
  dashboard_disableAllTabs();
  dashboard_showAdmin.classList.add('dashboard-navigation-active');
}
dashboard_showAirconet.onclick = function(){
  dashboard_disableAllTabs();
  dashboard_showAirconet.classList.add('dashboard-navigation-active');
}

let dashboard_admin_showAll = document.getElementById('dashboard_admin_showAll');
let dashboard_admin_showPaid = document.getElementById('dashboard_admin_showPaid');
let dashboard_admin_showDisconnected = document.getElementById('dashboard_admin_showDisconnected');

function dashboard_admin_disableAllTabs(){
  dashboard_admin_showAll.classList.remove('dashboard-navigation-active');
  dashboard_admin_showPaid.classList.remove('dashboard-navigation-active');
  dashboard_admin_showDisconnected.classList.remove('dashboard-navigation-active');
}
dashboard_admin_showAll.onclick = function(){
  dashboard_admin_disableAllTabs();
  dashboard_admin_showAll.classList.add('dashboard-navigation-active');
}
dashboard_admin_showPaid.onclick = function(){
  dashboard_admin_disableAllTabs();
  dashboard_admin_showPaid.classList.add('dashboard-navigation-active');
}
dashboard_admin_showDisconnected.onclick = function(){
  dashboard_admin_disableAllTabs();
  dashboard_admin_showDisconnected.classList.add('dashboard-navigation-active');
}

// Pages counter generation
let dashboard_pages_current_label = document.getElementById('dashboardPagesCurrent');
let dashboard_pages_max_label = document.getElementById('dashboardPagesMax');
let dashboard_lines = document.getElementsByClassName('dashboard-table-data');
let dashboard_current_page = 1;

let dashboard_current_range = 1;

dashboard_pages_max_label.innerText = Math.ceil(dashboard_lines.length / 25);

document.getElementById('dashboardPagesNext').onclick = function(){
  if (dashboard_current_page != Math.ceil(dashboard_lines.length / 25)){
    dashboard_current_page += 1;
    dashboard_pages_current_label.innerText = dashboard_current_page;
    dashboardHideLines();
    dashboard_current_range += 25;
    for (let i = dashboard_current_range-1; i < dashboard_current_range+24; i++){
        try{
          dashboard_lines[i].style.display = "table-row";
        } catch {
          break;
        }
    }
  }
}
document.getElementById('dashboardPagesPrev').onclick = function(){
  if (dashboard_current_page != 1){
    dashboard_current_page -= 1;
    dashboard_pages_current_label.innerText = dashboard_current_page;
    dashboardHideLines();
    dashboard_current_range -= 25;
    for (let i = dashboard_current_range-1; i < dashboard_current_range+24; i++){
        try{
          dashboard_lines[i].style.display = "table-row";
        } catch {
          break;
        }
    }
  }
}

function dashboardHideLines(){
  for (let i=0; i< dashboard_lines.length; i++){
      dashboard_lines[i].style.display = "none";
  }
}
function dashboardAlertsHideLines(){
  for (let i=0; i< dashboard_alerts_lines.length; i++){
      dashboard_alerts_lines[i].style.display = "none";
  }
}
function dashboardStatisticsHideLines(){
  for (let i=0; i< dashboard_statistics_lines.length; i++){
      dashboard_alerts_lines[i].style.display = "none";
  }
}
dashboardHideLines();
for (let i = dashboard_current_range-1; i < dashboard_current_range+24; i++){
    dashboard_lines[i].style.display = "table-row";
}

document.getElementById('dashboardPagesGo').onclick = function(){
  let dashboard_page_value = document.getElementById('dashboardPagesInput').value;
  let dashboard_current_page_start = dashboard_current_page;
  if (dashboard_page_value >= 1 && dashboard_page_value <= Math.ceil(dashboard_lines.length / 25)){
    dashboardHideLines();
    if(dashboard_page_value-dashboard_current_page >= 0){
        for (let j = 0; j < dashboard_page_value-dashboard_current_page_start; j++) {
            dashboard_current_page += 1;
            dashboard_pages_current_label.innerText = dashboard_current_page;
            dashboardHideLines();
            dashboard_current_range += 25;
            for (let i = dashboard_current_range-1; i < dashboard_current_range+24; i++){
                try{
                  dashboard_lines[i].style.display = "table-row";
                } catch {
                  break;
                }
            }
        }
    } else {
      let dashboard_current_page_diff = dashboard_current_page-dashboard_page_value;

      for (let j = 0; j < dashboard_current_page_diff; j++) {
        if (dashboard_current_page != 1){
          dashboard_current_page -= 1;
          dashboard_pages_current_label.innerText = dashboard_current_page;
          dashboardHideLines();
          dashboard_current_range -= 25;
          for (let i = dashboard_current_range-1; i < dashboard_current_range+24; i++){
              try{
                dashboard_lines[i].style.display = "table-row";
              } catch {
                break;
              }
          }
        }
    }
    }


  }
}
// Alerts Pages counter generation
let dashboard_alerts_pages_current_label = document.getElementById('dashboardAlertsPagesCurrent');
let dashboard_alerts_pages_max_label = document.getElementById('dashboardAlertsPagesMax');
let dashboard_alert_lines = document.getElementsByClassName('dashboard-alerts-table-data');
let dashboard_alerts_current_page = 1;

let dashboard_alerts_current_range = 1;

dashboard_alerts_pages_max_label.innerText = Math.ceil(dashboard_alert_lines.length / 25);

document.getElementById('dashboardAlertsPagesNext').onclick = function(){
  if (dashboard_alerts_current_page != Math.ceil(dashboard_alert_lines.length / 25)){
    dashboard_alerts_current_page += 1;
    dashboard_alerts_pages_current_label.innerText = dashboard_alerts_current_page;
    dashboardAlertsHideLines();
    dashboard_alerts_current_range += 25;
    for (let i = dashboard_alerts_current_range-1; i < dashboard_alerts_current_range+24; i++){
        try{
          dashboard_alert_lines[i].style.display = "table-row";
        } catch {
          break;
        }
    }
  }
}
document.getElementById('dashboardAlertsPagesPrev').onclick = function(){
  if (dashboard_alerts_current_page != 1){
    dashboard_alerts_current_page -= 1;
    dashboard_alerts_pages_current_label.innerText = dashboard_alerts_current_page;
    dashboardAlertsHideLines();
    dashboard_alerts_current_range -= 25;
    for (let i = dashboard_alerts_current_range-1; i < dashboard_alerts_current_range+24; i++){
        try{
          dashboard_alert_lines[i].style.display = "table-row";
        } catch {
          break;
        }
    }
  }
}

function dashboardAlertsHideLines(){
  for (let i=0; i< dashboard_alert_lines.length; i++){
      dashboard_alert_lines[i].style.display = "none";
  }
}
dashboardAlertsHideLines();
for (let i = dashboard_alerts_current_range-1; i < dashboard_alerts_current_range+24; i++){
    dashboard_alert_lines[i].style.display = "table-row";
}

document.getElementById('dashboardAlertsPagesGo').onclick = function(){
  let dashboard_page_value = document.getElementById('dashboardAlertsPagesInput').value;
  let dashboard_alerts_current_page_start = dashboard_alerts_current_page;
  if (dashboard_page_value >= 1 && dashboard_page_value <= Math.ceil(dashboard_alert_lines.length / 25)){
    dashboardAlertsHideLines();
    if(dashboard_page_value-dashboard_alerts_current_page >= 0){
        for (let j = 0; j < dashboard_page_value-dashboard_alerts_current_page_start; j++) {
            dashboard_alerts_current_page += 1;
            dashboard_alerts_pages_current_label.innerText = dashboard_alerts_current_page;
            dashboardAlertsHideLines();
            dashboard_alerts_current_range += 25;
            for (let i = dashboard_alerts_current_range-1; i < dashboard_alerts_current_range+24; i++){
                try{
                  dashboard_alert_lines[i].style.display = "table-row";
                } catch {
                  break;
                }
            }
        }
    } else {
      let dashboard_alerts_current_page_diff = dashboard_alerts_current_page-dashboard_page_value;

      for (let j = 0; j < dashboard_alerts_current_page_diff; j++) {
        if (dashboard_alerts_current_page != 1){
          dashboard_alerts_current_page -= 1;
          dashboard_alerts_pages_current_label.innerText = dashboard_alerts_current_page;
          dashboardAlertsHideLines();
          dashboard_alerts_current_range -= 25;
          for (let i = dashboard_alerts_current_range-1; i < dashboard_alerts_current_range+24; i++){
              try{
                dashboard_alert_lines[i].style.display = "table-row";
              } catch {
                break;
              }
          }
        }
    }
    }


  }
}

// Statistics Pages counter generation
let dashboard_statistics_pages_current_label = document.getElementById('dashboardStatisticsPagesCurrent');
let dashboard_statistics_pages_max_label = document.getElementById('dashboardStatisticsPagesMax');
let dashboard_statistics_lines = document.getElementsByClassName('dashboard-statistics-table-data');
let dashboard_statistics_current_page = 1;

let dashboard_statistics_current_range = 1;

dashboard_statistics_pages_max_label.innerText = Math.ceil(dashboard_statistics_lines.length / 25);

document.getElementById('dashboardStatisticsPagesNext').onclick = function(){
  if (dashboard_statistics_current_page != Math.ceil(dashboard_statistics_lines.length / 25)){
    dashboard_statistics_current_page += 1;
    dashboard_statistics_pages_current_label.innerText = dashboard_statistics_current_page;
    dashboardStatisticsHideLines();
    dashboard_statistics_current_range += 25;
    for (let i = dashboard_statistics_current_range-1; i < dashboard_statistics_current_range+24; i++){
        try{
          dashboard_statistics_lines[i].style.display = "table-row";
        } catch {
          break;
        }
    }
  }
}
document.getElementById('dashboardStatisticsPagesPrev').onclick = function(){
  if (dashboard_statistics_current_page != 1){
    dashboard_statistics_current_page -= 1;
    dashboard_statistics_pages_current_label.innerText = dashboard_statistics_current_page;
    dashboardStatisticsHideLines();
    dashboard_statistics_current_range -= 25;
    for (let i = dashboard_statistics_current_range-1; i < dashboard_statistics_current_range+24; i++){
        try{
          dashboard_statistics_lines[i].style.display = "table-row";
        } catch {
          break;
        }
    }
  }
}

function dashboardStatisticsHideLines(){
  for (let i=0; i< dashboard_statistics_lines.length; i++){
      dashboard_statistics_lines[i].style.display = "none";
  }
}
dashboardStatisticsHideLines();
for (let i = dashboard_statistics_current_range-1; i < dashboard_statistics_current_range+24; i++){
    dashboard_statistics_lines[i].style.display = "table-row";
}

document.getElementById('dashboardStatisticsPagesGo').onclick = function(){
  let dashboard_page_value = document.getElementById('dashboardStatisticsPagesInput').value;
  let dashboard_statistics_current_page_start = dashboard_statistics_current_page;
  if (dashboard_page_value >= 1 && dashboard_page_value <= Math.ceil(dashboard_statistics_lines.length / 25)){
    dashboardStatisticsHideLines();
    if(dashboard_page_value-dashboard_statistics_current_page >= 0){
        for (let j = 0; j < dashboard_page_value-dashboard_statistics_current_page_start; j++) {
            dashboard_statistics_current_page += 1;
            dashboard_statistics_pages_current_label.innerText = dashboard_statistics_current_page;
            dashboardStatisticsHideLines();
            dashboard_statistics_current_range += 25;
            for (let i = dashboard_statistics_current_range-1; i < dashboard_statistics_current_range+24; i++){
                try{
                  dashboard_statistics_lines[i].style.display = "table-row";
                } catch {
                  break;
                }
            }
        }
    } else {
      let dashboard_statistics_current_page_diff = dashboard_statistics_current_page-dashboard_page_value;

      for (let j = 0; j < dashboard_statistics_current_page_diff; j++) {
        if (dashboard_statistics_current_page != 1){
          dashboard_statistics_current_page -= 1;
          dashboard_statistics_pages_current_label.innerText = dashboard_statistics_current_page;
          dashboardStatisticsHideLines();
          dashboard_statistics_current_range -= 25;
          for (let i = dashboard_statistics_current_range-1; i < dashboard_statistics_current_range+24; i++){
              try{
                dashboard_statistics_lines[i].style.display = "table-row";
              } catch {
                break;
              }
          }
        }
    }
   }
  }
}
// Statistics total section values
let dashboard_statistics_total_accounts = 0;
let dashboard_statistics_total_ac = 0;
let dashboard_statistics_total_sw = 0;
let dashboard_statistics_total_sw_2 = 0;
let dashboard_statistics_total = 0;
let dashboard_statistics_total_total_paid = 0;
let dashboard_statistics_total_new_admin = 0;
let dashboard_statistics_total_errors = 0;

for (let i = 0; i < document.getElementsByClassName('dashboard-statistics-table-accounts').length; i++) {
  dashboard_statistics_total_accounts += Number(document.getElementsByClassName('dashboard-statistics-table-accounts')[i].innerText);
  dashboard_statistics_total_ac += Number(document.getElementsByClassName('dashboard-statistics-table-ac')[i].innerText);
  dashboard_statistics_total_sw += Number(document.getElementsByClassName('dashboard-statistics-table-sw')[i].innerText);
  dashboard_statistics_total_sw_2 += Number(document.getElementsByClassName('dashboard-statistics-table-sw_2')[i].innerText);

  dashboard_statistics_total_total_paid += Number(document.getElementsByClassName('dashboard-statistics-table-total_paid')[i].innerText);

  dashboard_statistics_total += Number(document.getElementsByClassName('dashboard-statistics-table-total-total')[i].innerText);
  dashboard_statistics_total_new_admin += Number(document.getElementsByClassName('dashboard-statistics-table-new_admin')[i].innerText);
  dashboard_statistics_total_errors += Number(document.getElementsByClassName('dashboard-statistics-table-errors')[i].innerText);
}
document.getElementById('dashboard-statistics-total-accounts').innerText = dashboard_statistics_total_accounts;
document.getElementById('dashboard-statistics-total-ac').innerText = dashboard_statistics_total_ac;

document.getElementById('dashboard-statistics-total-sw').innerText = dashboard_statistics_total_sw;
document.getElementById('dashboard-statistics-total-sw_2').innerText = dashboard_statistics_total_sw_2;

document.getElementById('dashboard-statistics-total-total_paid').innerText = dashboard_statistics_total_total_paid;

document.getElementById('dashboard-statistics-total-total').innerText = dashboard_statistics_total;
document.getElementById('dashboard-statistics-total-new_admin').innerText = dashboard_statistics_total_new_admin;
document.getElementById('dashboard-statistics-total-errors').innerText = dashboard_statistics_total_errors;



function dashboardHideTabs(){
  for (let i = 0; i < document.getElementsByClassName('dashboard').length; i++) {
    document.getElementsByClassName('dashboard')[i].style.setProperty('display', 'none');
  }
}
function dashboardSortSelect(element) {
  for (let i = 0; i < document.getElementsByClassName('dashboard-table-sort-select').length; i++) {
    document.getElementsByClassName('dashboard-table-sort-select')[i].style.setProperty('color', 'rgb(255, 255, 255)', 'important');
  }
  element.style.setProperty('color', 'rgb(237, 125, 50)', 'important');
}
function dashboardAlertsSortSelect(element) {
  for (let i = 0; i < document.getElementsByClassName('dashboard-alerts-table-sort-select').length; i++) {
    document.getElementsByClassName('dashboard-alerts-table-sort-select')[i].style.setProperty('color', 'rgb(255, 255, 255)', 'important');
  }
  element.style.setProperty('color', 'rgb(237, 125, 50)', 'important');
}
function dashboardStatisticsSortSelect(element) {
  for (let i = 0; i < document.getElementsByClassName('dashboard-statistics-table-sort-select').length; i++) {
    document.getElementsByClassName('dashboard-statistics-table-sort-select')[i].style.setProperty('color', 'rgb(255, 255, 255)', 'important');
  }
  element.style.setProperty('color', 'rgb(237, 125, 50)', 'important');
}

function dashboardAdminSortSelect(element) {
  for (let i = 0; i < document.getElementsByClassName('dashboard-admin-table-sort-select').length; i++) {
    document.getElementsByClassName('dashboard-admin-table-sort-select')[i].style.setProperty('color', 'rgb(255, 255, 255)', 'important');
  }
  element.style.setProperty('color', 'rgb(237, 125, 50)', 'important');
}

// Show Database App tab
document.getElementById('dashboardMainTab').onclick = function(){
  for (let i = 0; i < document.getElementsByClassName('headerDesktopSelect').length; i++) {
    document.getElementsByClassName('headerDesktopSelect')[i].style.setProperty('color', 'rgb(191, 191, 191)', 'important');
  }
  document.getElementById('dashboardMainTab').style.setProperty('color', 'rgb(237, 125, 50)', 'important');

  dashboardHideTabs();
  document.getElementById('dashboardMain').style.setProperty('display', 'block');
}

// Show admin tab
document.getElementById('dashboardAdminTab').onclick = function(){
  for (let i = 0; i < document.getElementsByClassName('headerDesktopSelect').length; i++) {
    document.getElementsByClassName('headerDesktopSelect')[i].style.setProperty('color', 'rgb(191, 191, 191)', 'important');
  }
  document.getElementById('dashboardAdminTab').style.setProperty('color', 'rgb(237, 125, 50)', 'important');

  dashboardHideTabs();
  document.getElementById('dashboardAdmin').style.setProperty('display', 'block');
}

// Show alerts tab
document.getElementById('dashboardAlertsTab').onclick = function(){
  for (let i = 0; i < document.getElementsByClassName('headerDesktopSelect').length; i++) {
    document.getElementsByClassName('headerDesktopSelect')[i].style.setProperty('color', 'rgb(191, 191, 191)', 'important');
  }
  document.getElementById('dashboardAlertsTab').style.setProperty('color', 'rgb(237, 125, 50)', 'important');
  dashboardHideTabs();
  document.getElementById('dashboardAlerts').style.setProperty('display', 'block');
}

// Show statistics tab
document.getElementById('dashboardStatisticsTab').onclick = function(){
  for (let i = 0; i < document.getElementsByClassName('headerDesktopSelect').length; i++) {
    document.getElementsByClassName('headerDesktopSelect')[i].style.setProperty('color', 'rgb(191, 191, 191)', 'important');
  }
  document.getElementById('dashboardStatisticsTab').style.setProperty('color', 'rgb(237, 125, 50)', 'important');
  dashboardHideTabs();
  document.getElementById('dashboardStatistics').style.setProperty('display', 'block');
}

// Show Pop up
let dashboard_popup = document.getElementsByClassName('dashboard-popup')[0];
document.getElementById('dashboard-labels-button-showModal').onclick = function(){
  dashboard_popup.style.display = "flex";
}
// Show Default Pop up
let dashboard_default_popup = document.getElementById('dashboardDefaultPopup');
for (var i = 0; i < document.getElementsByClassName('dashboardTableDefaultEmail').length; i++) {
  document.getElementsByClassName('dashboardTableDefaultEmail')[i].onclick = function(){
    dashboard_default_popup.style.display = "flex";
  }
}


function dashboardPopupSortSelect(element) {
  for (let i = 0; i < document.getElementsByClassName('dashboard-popup-sort-select').length; i++) {
    document.getElementsByClassName('dashboard-popup-sort-select')[i].style.setProperty('color', 'rgb(255, 255, 255)', 'important');
  }
  element.style.setProperty('color', 'rgb(237, 125, 50)', 'important');
}

function dashboardPopupDefaultSortSelect(element) {
  for (let i = 0; i < document.getElementsByClassName('dashboard-popup-default-sort-select').length; i++) {
    document.getElementsByClassName('dashboard-popup-default-sort-select')[i].style.setProperty('color', 'rgb(255, 255, 255)', 'important');
  }
  element.style.setProperty('color', 'rgb(237, 125, 50)', 'important');
}

// Popup currency dropdown
$("#dashboard-popup-setting-dropdown-menu li a").click(function(){
  $(this).parents(".dashboard-popup-setting-dropdown").find('.btn').html($(this).text() + ' <span class="dashboard-popup-setting-dropdown-caret"></span>');
  $(this).parents(".dashboard-popup-setting-dropdown").find('.btn').val($(this).data('value'));
});

// Default Popup currency dropdown
$("#dashboard-popup-default-setting-dropdown-menu li a").click(function(){
  $(this).parents(".dashboard-popup-default-setting-dropdown").find('.btn').html($(this).text() + ' <span class="dashboard-popup-default-setting-dropdown-caret"></span>');
  $(this).parents(".dashboard-popup-default-setting-dropdown").find('.btn').val($(this).data('value'));
});

// Popup month dropdown
for (let i = 2; i < 14; i++) {
  let copy_data = document.getElementsByClassName('dropdown-month-item')[0].cloneNode(true);
  document.getElementById("dashboard-popup-month-dropdown-menu").appendChild(copy_data);
}
for (let i = 2; i < 13; i++) {
  if(i < 10){
    document.getElementsByClassName('dropdown-month-item')[i].firstChild.innerText = '0' + i;
  } else {
    document.getElementsByClassName('dropdown-month-item')[i].firstChild.innerText = i;
  }
}
document.getElementsByClassName('dropdown-month-item')[0].style.display = "none";

$("#dashboard-popup-month-dropdown-menu li a").click(function(){
  $(this).parents(".dashboard-popup-month-dropdown").find('.btn').html($(this).text() + ' <span class="dashboard-popup-month-dropdown-caret"></span>');
  $(this).parents(".dashboard-popup-month-dropdown").find('.btn').val($(this).data('value'));
});

// Default Popup month dropdown
for (let i = 2; i < 14; i++) {
  let copy_data = document.getElementsByClassName('dropdown-month-default-item')[0].cloneNode(true);
  document.getElementById("dashboard-popup-month-default-dropdown-menu").appendChild(copy_data);
}
for (let i = 2; i < 13; i++) {
  if(i < 10){
    document.getElementsByClassName('dropdown-month-default-item')[i].firstChild.innerText = '0' + i;
  } else {
    document.getElementsByClassName('dropdown-month-default-item')[i].firstChild.innerText = i;
  }
}
document.getElementsByClassName('dropdown-month-default-item')[0].style.display = "none";

$("#dashboard-popup-month-default-dropdown-menu li a").click(function(){
  $(this).parents(".dashboard-popup-month-default-dropdown").find('.btn').html($(this).text() + ' <span class="dashboard-popup-month-default-dropdown-caret"></span>');
  $(this).parents(".dashboard-popup-month-default-dropdown").find('.btn').val($(this).data('value'));
});

// Popup year dropdown
let popup_year = 2019;

for (let i = 2; i < 11; i++) {
  let copy_data = document.getElementsByClassName('dropdown-year-item')[0].cloneNode(true);
  document.getElementById("dashboard-popup-year-dropdown-menu").appendChild(copy_data);
}
for (let i = 2; i < 10; i++) {
  document.getElementsByClassName('dropdown-year-item')[i].firstChild.innerText = popup_year;
  popup_year -= 1;
}
document.getElementsByClassName('dropdown-year-item')[0].style.display = "none";

$("#dashboard-popup-year-dropdown-menu li a").click(function(){
  $(this).parents(".dashboard-popup-year-dropdown").find('.btn').html($(this).text() + ' <span class="dashboard-popup-month-dropdown-caret"></span>');
  $(this).parents(".dashboard-popup-year-dropdown").find('.btn').val($(this).data('value'));
});

// Default popup year dropdown
popup_year = 2019;

for (let i = 2; i < 11; i++) {
  let copy_data = document.getElementsByClassName('dropdown-year-default-item')[0].cloneNode(true);
  document.getElementById("dashboard-popup-default-year-dropdown-menu").appendChild(copy_data);
}
for (let i = 2; i < 10; i++) {
  document.getElementsByClassName('dropdown-year-default-item')[i].firstChild.innerText = popup_year;
  popup_year -= 1;
}
document.getElementsByClassName('dropdown-year-default-item')[0].style.display = "none";

$("#dashboard-popup-default-year-dropdown-menu li a").click(function(){
  $(this).parents(".dashboard-popup-default-year-dropdown").find('.btn').html($(this).text() + ' <span class="dashboard-popup-default-year-dropdown-caret"></span>');
  $(this).parents(".dashboard-popup-default-year-dropdown").find('.btn').val($(this).data('value'));
});

function dashboardPopupArrowSortSelect(element) {
  for (let i = 0; i < document.getElementsByClassName('dashboard-popup-arrow-sort-select').length; i++) {
    document.getElementsByClassName('dashboard-popup-arrow-sort-select')[i].style.setProperty('color', 'rgb(255, 255, 255)', 'important');
  }
  element.style.setProperty('color', 'rgb(237, 125, 50)', 'important');
}
function dashboardAlertsSelect(element) {
  for (let i = 0; i < document.getElementsByClassName('dashboardAlertsSelectTab').length; i++) {
    document.getElementsByClassName('dashboardAlertsSelectTab')[i].style.setProperty('color', 'rgb(255, 255, 255)', 'important');
  }
  element.style.setProperty('color', 'rgb(237, 125, 50)', 'important');
}
function dashboardStatisticsSelect(element) {
  for (let i = 0; i < document.getElementsByClassName('dashboardStatisticsSelectTab').length; i++) {
    document.getElementsByClassName('dashboardStatisticsSelectTab')[i].style.setProperty('color', 'rgb(255, 255, 255)', 'important');
  }
  element.style.setProperty('color', 'rgb(237, 125, 50)', 'important');
}

function dashboardPopupDefaultArrowSortSelect(element) {
  for (let i = 0; i < document.getElementsByClassName('dashboard-popup-default-arrow-sort-select').length; i++) {
    document.getElementsByClassName('dashboard-popup-default-arrow-sort-select')[i].style.setProperty('color', 'rgb(255, 255, 255)', 'important');
  }
  element.style.setProperty('color', 'rgb(237, 125, 50)', 'important');
}

// Generate diffrent id s for popup account label
let dashboard_popup_checkbox = document.getElementsByClassName('dashboardPopupTableCheckbox');
let dashboard_popup_checkbox_label = document.getElementsByClassName('dashboardPopupTableLabel');

for (let i = 0; i < dashboard_popup_checkbox.length; i++) {
  dashboard_popup_checkbox[i].setAttribute('id','dashboardPopupTableCheckbox_' + i);
  dashboard_popup_checkbox_label[i].setAttribute('for','dashboardPopupTableCheckbox_' + i);
}

// Generate diffrent id s for DEFAULT popup account label
let dashboard_popup_default_checkbox = document.getElementsByClassName('dashboardPopupDefaultTableCheckbox');
let dashboard_popup_default_checkbox_label = document.getElementsByClassName('dashboardPopupDefaultTableLabel');

for (let i = 0; i < dashboard_popup_default_checkbox.length; i++) {
  dashboard_popup_default_checkbox[i].setAttribute('id','dashboardPopupDefaultTableCheckbox_' + i);
  dashboard_popup_default_checkbox_label[i].setAttribute('for','dashboardPopupDefaultTableCheckbox_' + i);
}

document.getElementById('dashboard-popup-close').onclick = function(){
  document.getElementsByClassName('dashboard-popup')[0].style.display = "none";
}
document.getElementById('dashboard-popup-default-close').onclick = function(){
  document.getElementById('dashboardDefaultPopup').style.display = "none";
}
document.getElementById('dashboard-popup-contact-cancel').onclick = function(){
  dashboard_popup.style.display = "none";
}
document.getElementById('dashboard-popup-contact-save').onclick = function(){
  dashboard_popup.style.display = "none";
}

document.getElementById('dashboard-popup-default-contact-cancel').onclick = function(){
  document.getElementById('dashboardDefaultPopup').style.display = "none";
}
document.getElementById('dashboard-popup-default-contact-save').onclick = function(){
  document.getElementById('dashboardDefaultPopup').style.display = "none";
}

let isRightDisabled = 0;
function dashboardDisableRight(){
  if (!isRightDisabled) {
    for (let i = 0; i < document.getElementsByClassName('dashboardPopupRightItem').length; i++) {
      document.getElementsByClassName('dashboardPopupRightItem')[i].setAttribute('disabled', 'true');
      isRightDisabled = 1;
    }
  } else {
    for (let i = 0; i < document.getElementsByClassName('dashboardPopupRightItem').length; i++) {
      document.getElementsByClassName('dashboardPopupRightItem')[i].removeAttribute('disabled');
      isRightDisabled = 0;
    }
  }
}
function popupUploadImage(){
  document.getElementById('popupTrueUpload').click();
}

// Smile/Sad rate detection
function dashboardAlertsRate(element) {
  if(element.classList.contains('dashboard-alerts-rate-smile')){
    for (let i = 0; i < document.getElementsByClassName('dashboard-alerts-rate-smile').length; i++) {
      if(document.getElementsByClassName('dashboard-alerts-rate-smile')[i] == element){
        // Get rate value to server here
        //pass
      }
    }
  } else {
    for (let i = 0; i < document.getElementsByClassName('dashboard-alerts-rate-sad').length; i++) {
      if(document.getElementsByClassName('dashboard-alerts-rate-sad')[i] == element){
        // Get rate value to server here
        //pass
      }
    }
  }
}



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

dashboardHideTabs();
document.getElementById('dashboardMain').style.setProperty('display', 'block');


let copy_data = document.getElementsByClassName('dashboard-statistics-table-total-fake')[0].cloneNode(true);
document.getElementById("dashboard-statistics-table").appendChild(copy_data);


function Captcha(){
     document.getElementsByClassName('captcha-wrapper')[0].style.background = getRandomColor();
     var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
	 	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
 	    	'0','1','2','3','4','5','6','7','8','9');
     var i;
     for (i=0;i<6;i++){
         var a = alpha[Math.floor(Math.random() * alpha.length)];
         var b = alpha[Math.floor(Math.random() * alpha.length)];
         var c = alpha[Math.floor(Math.random() * alpha.length)];
         var d = alpha[Math.floor(Math.random() * alpha.length)];
         var e = alpha[Math.floor(Math.random() * alpha.length)];
         var f = alpha[Math.floor(Math.random() * alpha.length)];
         var g = alpha[Math.floor(Math.random() * alpha.length)];
                      }
         var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
         document.getElementById("mainCaptcha").innerHTML = code
		 document.getElementById("mainCaptcha").value = code
       }
function ValidCaptcha(){
     var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
     var string2 =         removeSpaces(document.getElementById('logCaptchaInput').value);
     if (string1 == string2){
            return true;
     }else{
          return false;
          }
}
function removeSpaces(string){
     return string.split(' ').join('');
}

Captcha();

let nowMonth = new Date().getMonth();
let nowYear = new Date().getFullYear();

if(nowMonth+1  >= 10){
  document.getElementById('dashboardPopupMonthDropdown').innerText = new Date().getMonth()+1;
  document.getElementById('dashboardPopupDefaultMonthDropdown').innerText = new Date().getMonth()+1;
} else {
  document.getElementById('dashboardPopupMonthDropdown').innerText = '0' + new Date().getMonth()+1;
  document.getElementById('dashboardPopupDefaultYearDropdown').innerText = '0' + new Date().getMonth()+1;
}


document.getElementById('dashboardPopupYearDropdown').innerText = nowYear;
