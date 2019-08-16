$(document).ready(function() {


  $("#languageForm").submit(function(event){
    var material = parseInt($("#question1").val());
    var emotion = parseInt($("#question2").val());
    var alcohol = parseInt($("question3").val());
    var sport = parseInt($("question4").val());
    var currency = parseInt($("question5").val());
    var topping = parseInt($("question6").val());
    var avocado = parseInt($("question7").val());

    var result = (material + emotion + alcohol + sport + currency + topping + avocado) % 4;
    console.log(test1);

    if (result === 0){
      $("#python").show();
    } else if ( result === 1 ) {
      $("#go").show();
    } else if ( result ===2 ) {
      $("#sharp").show();
    } else {
      $("#ruby").show();
    }




    console.log(test2);
    event.preventDefault();
  });
});
