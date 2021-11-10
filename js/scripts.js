

function appoint(){
$(document).ready(function() {
    $("form#group").submit(function(event) {
     //event.preventDefault()
    
      let firstName = ($("#firstName").val());
      let middleName = ($("#middleName").val());
      let lastName = ($("#lastName").val());
      let date1 = ($("#date").val());
      let time1 = ($("#time").val());
      let date2 = ($("#date2").val());
      let time2 = ($("#time2").val());
      let fullName = (`${firstName} ${middleName} ${lastName} ${ date1} ${time1} ${date2}  ${time2}`)
      $("#firstName").val("");
      $("#middleName").val("");
      $("#lastName").val("");
      $("#output").text(fullName);

    });
  });
};
$(document).ready(function(){
    $("button").click(function(){
        $("#me").load("index.html")
    
    })
    
});

