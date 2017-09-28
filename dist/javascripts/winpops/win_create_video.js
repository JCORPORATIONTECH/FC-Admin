"use strict";window.requirejs(["common","Vimeo","jqueryFormUploaderService"],function(e,i,o){function a(){var e=n("#video-title");if(!e.val())return window.alert("비디오 강좌명을 입력하세요."),e.focus(),!1;var i,o=n("#video-provider").val();return"VIMEO"===o||"YOUTUBE"===o?i=n("#vimeo-video-code"):"AQUA"===o&&(i=n("#aqua-video-code")),!!i.val()||(window.alert("비디오 코드를 입력하세요."),i.focus(),!1)}function d(){var e=n("#vimeo-video-code").val(),i=n("#video-provider").val(),o=n("#video-player");if(!e)return!1;switch(i){case"YOUTUBE":o.html('<iframe width="100%" height="600" src="/api/v1/youtube?id='+e+'"frameborder="0" allowfullscreen></iframe>');break;case"VIMEO":o.html('<iframe src="https://player.vimeo.com/video/'+e+'"?title=0&byline=0&portrait=0" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')}}var n=n||window.$,r=n("#regist-video"),l=n("#uploadVideo"),t=n("#play-video"),v=n("#video-provider"),c=n(".aquaplayer-settings"),s=n(".vimeo-settings"),u=n("#aquaplayer_frame"),w=e.initDataTable(n("#table_add_video"),{buttons:[]}),f=n("#btnApplyVideo");window.$(function(){var i={uploadFolder:n("#upload_folder").val(),callback:function(i){i.success&&u.attr("src","/api/v1/aqua?os="+e.getOSName()+"&video_name="+i.videoName)}};o=new o(i)}),f.bind("click",function(i){i.preventDefault();var o=n("input:first:checked",w.rows({search:"applied"}).nodes()).data();void 0!==o?window.confirm("적용하시겠습니까?")&&(n("#addVideo").modal("hide"),n("#aqua-video-code").val(o.url),u.attr("src","/api/v1/aqua?os="+e.getOSName()+"&video_id="+o.id)):window.alert("비디오를 선택하세요.")}),v.on("change",function(){var e=n(this).val();"VIMEO"===e||"YOUTUBE"===e?(s.removeClass("blind"),c.addClass("blind"),n(".video-preview").addClass("blind")):"AQUA"===e&&(c.removeClass("blind"),s.addClass("blind"),n(".video-preview").removeClass("blind"))}),l.on("click",function(){}),n("#vimeo-video-code").bind("keypress",function(e){13===(e.which||e.keyCode)&&d()}),t.bind("click",function(e){d()}),r.bind("click",function(e){if(e.preventDefault(),!a())return!1;if(!window.confirm("저장하시겠습니까?"))return!1;var i,o=n("#video-provider").val();"VIMEO"===o||"YOUTUBE"===o?i=n("input[name='vimeo_video_code']").val():"AQUA"===o&&(i=n("input[name='aqua_video_code']").val()),window.axios.post("/course/create/video",{course_id:n("input[name='course_id']").val(),video_name:n("input[name='video_name']").val(),video_provider:o,video_code:i}).then(function(e){window.alert("비디오를 저장하였습니다."),window.parent.opener.winpop_listener(!0),window.close()}).catch(function(e){return console.log(e),!1})}),window.onbeforeunload=function(e){}});
//# sourceMappingURL=../../maps/winpops/win_create_video.js.map
