"use strict";requirejs(["jquery","axios","jquery_ui","bootstrap","slimScroll","quiz_service"],function(e,i){function t(){return i.get("/api/v1/course/group/id/create")}function n(){var t=e("input[name=course_id]").val();return i.get("/course/sessioncount",{params:{id:t}})}var r=require("quiz_service");e.widget.bridge("uibutton",e.ui.button);var o=e("#btn-add-quiz-a"),u=e("#btn-add-quiz-b"),a=e("#btn-add-quiz-c"),d=e("#regist-quiz"),c=e("#createQuiz"),s=document.getElementById("quiz-container");e(function(){i.all([t(),n()]).then(i.spread(function(i,t){var n={root_wrapper:c,wrapper:s},o={courseId:e("input[name=course_id]").val(),course_list_id:null,quiz_group_id:i.data.id,quiz_list:null,type:c.data("type"),title:e("#title").val(),session_count:t.data.session_count};r=new r(n,o,function(e){alert("퀴즈를 등록하였습니다."),window.parent.opener.location.reload(),window.close()})}))}),e(".connectedSortable").sortable({placeholder:"sort-highlight",connectWith:".connectedSortable",handle:".box-header",forcePlaceholderSize:!0,zIndex:999999,start:function(i,t){e(this).attr("data-previndex",t.item.index())},update:function(i,t){var n=t.item.index(),o=e(this).attr("data-previndex");e(this).removeAttr("data-previndex"),r.moveQuizIndexes(o,n)}}),o.bind("click",function(){r.addQuizSingleAnswer()}),u.bind("click",function(){r.addQuizMultiOptionWithOneAnswer()}),a.bind("click",function(){r.addQuizMultiOptionWithMultiAnswer()}),d.bind("click",function(){r.saveSessionAndQuiz()})});