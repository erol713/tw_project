$(document).ready(function () {
    $("form").submit(function (event) {
      var formData = {
        number: $("#to").val(),
        txt_body: $("#txt_body").val()
      };
  
      $.ajax({
        type: "POST",
        url: "message.py",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        alert('finished python script');
      });
  
      event.preventDefault();
    });
  });