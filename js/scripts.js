


$(document).ready(function() {
    $("form#group").submit(function() {
     
        window.location.href("reciept.html")
      let firstName = ($("#firstName").val());
      let middleName = ($("#middleName").val());
      let lastName = ($("#lastName").val());
      let fullName = (`${firstName + middleName + lastName}`)
      $("#firstName").val("");
      $("#middleName").val("");
      $("#lastName").val("");
      $("#output").text(fullName);

    });
  });