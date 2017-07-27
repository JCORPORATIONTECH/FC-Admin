"use strict";requirejs(["common"],function(e){var t=t||window.$;t(function(){e.initDataTable(t("#table-point-by-edu"),{columns:[{data:"branch_name",className:"center"},{data:"duty_name",className:"center"},{data:"user_name",className:"center"},{data:"period",className:"center"},{data:"complete",className:"center"},{data:"quiz_correction",className:"center"},{data:"final_correction",className:"center"},{data:"reeltime",className:"center"},{data:"speed",className:"center"},{data:"repetition",className:"center"},{data:"point_total",className:"right"}],order:[[10,"desc"]]}),e.initDataTable(t("#table_point"),{order:[[3,"desc"]],buttons:[{text:'<i class="fa fa-copy"></i> 복사',extend:"copy",className:"btn-sm btn-default",exportOptions:{columns:[0,1,2,3]}},{text:'<i class="fa fa-download"></i> 엑셀',extend:"excel",className:"btn-sm btn-default",exportOptions:{columns:[0,1,2,3]}}]})}),t("#select-point-by-edu").change(function(){var e=t("#table-point-by-edu").DataTable();if(0===t(this).prop("selectedIndex"))return e.clear().draw(),!1;var a=t(this).val();axios.get("/dashboard/edupoint",{params:{edu_id:a}}).then(function(t){var a=t.data.data;e.clear().draw(),e.rows.add(a),e.columns.adjust().draw()}).catch(function(e){console.error(e)})}),t("#modal-point-details").on("show.bs.modal",function(e){axios.get("/dashboard/point/details",{params:{user_id:t(e.relatedTarget).data("user-id")}}).then(function(e){t("#table_point_details > tbody ").html("");for(var a,o,n=e.data.list,c="",r=0;r<n.length;r++){c="<tr>",c+="<td>"+n[r].edu_name+"</td>",a=null===n[r].edu_start_dt?"시작전":null===n[r].edu_end_dt?n[r].edu_start_dt+" ~ 미완료":n[r].edu_start_dt+" ~ "+n[r].edu_end_dt,o=null===n[r].speed.user_period?0:n[r].speed.user_period,c+='<td class="center">'+a+"</td>",c+='<td class="center">'+n[r].complete.complete_course_count+" / "+n[r].complete.total_course_count+"</td>",c+='<td class="center">'+n[r].quiz_correction.correct_count+" / "+n[r].quiz_correction.total_count+"</td>",c+='<td class="center">'+n[r].final_correction.correct_count+" / "+n[r].final_correction.total_count+"</td>",c+='<td class="center">'+(void 0===n[r].reeltime.video_watch_count?"0":n[r].reeltime.video_watch_count)+" / "+(void 0===n[r].reeltime.video_count?"0":n[r].reeltime.video_count)+"</td>",c+='<td class="center">'+o+" / "+n[r].speed.edu_period+"</td>",c+='<td class="center">'+(1===n[r].repetition.value?"예":"아니오")+"</td>";c+='<td class="center">'+(n[r].complete.value*n[r].point_complete+n[r].quiz_correction.value*n[r].point_quiz+n[r].final_correction.value*n[r].point_final+n[r].reeltime.value*(n[r].point_reeltime-(void 0===n[r].reeltime.refresh_count?0:n[r].reeltime.refresh_count))+n[r].speed.value*n[r].point_speed+n[r].repetition.value*n[r].point_repetition).toFixed(2)+"</td>",c+="</tr>",t("#table_point_details > tbody ").append(c)}}).catch(function(e){console.error(e)})})});
//# sourceMappingURL=../maps/dashboard.js.map
