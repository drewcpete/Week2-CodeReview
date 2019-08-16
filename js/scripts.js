$(document).ready(function() {
  $("#languageForm").submit(function(event){
    console.log("test");
    var material = parseInt($("#question1").val());
    var emotion = parseInt($("#question2").val());
    var alcohol = parseInt($("#question3").val());
    var sport = parseInt($("#question4").val());
    var currency = parseInt($("#question5").val());
    var topping = parseInt($("#question6").val());
    var avocado = parseInt($("#question7").val());
    console.log(avocado);
    var result = (material + emotion + alcohol + sport + currency + topping + avocado);

    console.log(result);
    result = (result % 4)
    console.log(result)
    // debugger;

    if (result === 0){
      $(".python").show();
    } else if ( result === 1 ) {
      $(".go").show();
    } else if ( result === 2 ) {
      $(".sharp").show();
    } else {
      $(".ruby").show();
    }
    $(".close").click(function() {
        $(".modal").hide();
      });

    event.preventDefault();
  });
});
