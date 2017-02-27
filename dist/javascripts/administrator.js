"use strict";requirejs(["common"],function(t){function a(t,a){return'<li class="list-group-item" data-branch-id="'+t+'">\t<div class="course">'+a+'<a href="#" class="btn-delete-course" onclick="administrator.removeElement(this);">\t  <i class="fa fa-remove text-red"></i></a>\t</div></li>'}function n(t){for(var a=0,n=r.length;a<n;a++)if(r[a][1]==t)return!0;return!1}function e(){var t=[];return $(".list-group-item",c).each(function(a,n){var e=[l,$(n).attr("data-branch-id")];t.push(e)}),t}t.initDataTable($("#table_admin"),{buttons:[{text:'<i class="fa fa-copy"></i> 복사',extend:"copy",className:"btn-sm btn-default",exportOptions:{columns:[0,1,2,3]}},{text:'<i class="fa fa-download"></i> 엑셀',extend:"excel",className:"btn-sm btn-default",exportOptions:{columns:[0,1,2,3]}}]});var i=$(".select-branch-list"),r=[],s=$(".btn-assign-branch"),o=$("#draggablePanelList"),d=$(".btn-assign-branch-submit"),l=null;$("#table_admin").on("click",".btn-delete-admin",function(){if(!confirm("삭제 시 되돌릴 수 없습니다. 정말 삭제하시겠습니까?"))return!1;var t={id:$(this).data("user-id")};axios.delete("/administrator",{params:t}).then(function(t){t.data.success?alert("관리자를 삭제하였습니다."):alert("관리자를 삭제하지 못했습니다."),location.reload()}).catch(function(t){console.log(t)})}),window.administrator={removeElement:function(t){return $(t).parent().parent().remove(),r=e(),!1}},$(".btn-modify-admininfo").bind("click",function(){var t=$(this),a=t.attr("data-user-name"),n=t.attr("data-user-email"),e=t.attr("data-user-role"),i=t.attr("data-url"),r=$("#frm_modify_admin");l=t.attr("data-user-id"),r.find("#name").val(a),r.find("#email").val(n),r.find(".employee_id").val(l),r.find("#select_authority").val(e),r.attr("action",i)}),$(".btn-modify-role").bind("click",function(){var t=$(this),a=t.attr("data-user-role"),n=$("#frm_change_admin_role");l=t.attr("data-user-id"),n.find(".user_id").val(l),n.find("#select_authority").val(a)}),$(".btn-add-branch").bind("click",function(){var t=$(this),n=$("#frm_assign_branch");l=t.attr("data-user-id"),n.find(".user_id").val(l),axios({method:"get",url:"/administrator/branch/"+l}).then(function(t){t.data.success?(r=[],o.empty(),t.data.list.forEach(function(t){var n=a(t.id,t.name);o.append(n),r.push([l,t.id])})):alert("알 수 없는 오류가 발생했습니다. 잠시 후에 다시 시도해주세요.")})}),s.bind("click",function(){var t=i.find("option:selected").text().trim(),e=i.find("option:selected").val().trim();if(!n(e)){var s=a(e,t);o.append(s),r.push([l,e])}});var c=$("#draggablePanelList");c.sortable({handle:".course",update:function(){r=e()}}),d.bind("click",function(t){return t.preventDefault(),r.length<=0?void alert("지점을 추가하세요."):void axios({method:"post",url:"/administrator/assign/branch",data:{user_id:l,branch_list:r}}).then(function(t){t.data.success?alert("지점을 배정하였습니다."):(console.log(t.data.msg),alert("알 수 없는 오류가 발생했습니다. 잠시 후에 다시 시도해주세요.")),window.location.reload()})})});