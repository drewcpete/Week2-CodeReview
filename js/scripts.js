$(document).ready(function() {
  // $("#nameSelect").change(console.log(this.val()));

  $("#languageForm").submit(function(event){
    var material = $("#question1").val();
    var emotion = $("#question2").val();
    var alcohol = $("question3").val();
    var sport = $("question4").val();
    var currency = $("question5").val();
    var topping = $("question6").val();
    var avocado = $("question7").val();

    var result = (material + emotion + alcohol + sport + currency + topping + avocado) % 3;

    if (result === 0){
      $("#friendModal").show();
    } else if (result === 1) {
      $("#boatModal").show();
    } else {
      $("#tjModal").show();
    }

    $(".close").click(function() {
      $(".modal").hide();
    });



    console.log(favoriteColor);
    event.preventDefault();
  });
});
