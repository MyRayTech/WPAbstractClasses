$(function(){$(".rtabstract_upload_image_button").on("click",function(e){e.preventDefault();const a=$(this),i=wp.media({title:"Insert image",library:{type:"image"},button:{text:"Use this image"},multiple:!1}).on("select",function(){const t=i.state().get("selection").first().toJSON();$(a).removeClass("button").html('<img class="true_pre_image" src="'+t.url+'" style="max-width:95%;display:block;" />').next().val(t.id).next().show()}).open()}),$(".rtabstract_remove_image_button").on("click",function(){return $(this).hide().prev().val("").prev().addClass("button").html("Upload image"),!1})});
