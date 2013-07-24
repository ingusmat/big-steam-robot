$(document).ready(function(){
  $(".add").click(function(e){
    e.preventDefault();
    $.post("/" + $(this).attr('data-controller') + "/" + $(this).attr('data-action') + ".js", $(this).data(), null, "script");
  })
  $(".remove").click(function(e){
    e.preventDefault();
    $.post("/" + $(this).attr('data-controller') + "/" + $(this).attr('data-action') + ".js", $(this).data(), null, "script");
  })
  $(".attach_unit").click(function(e){
    e.preventDefault();
    $.post("/attachments/create.js", $(this).data(), null, "script");
  })
  $(".remove_attachment").click(function(e){
    e.preventDefault();
    $.post("/attachments/destroy.js", $(this).data(), null, "script");
  })
  $(".list_attachables").click(function(e){
    e.preventDefault();
    $.post("/units/list_attachables.js", {unit: $(this).data()}, null, "script");
  })
  $(".min-max-toggle").click(function(e){
    e.preventDefault();
    $.post("/army_units/min_max_unit_toggle.js", $(this).data(), null, "script");
  })

});
