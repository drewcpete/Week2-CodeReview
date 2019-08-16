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

    if (material === 0) {
      $("#mat").text("fabric");
    } else if (material === 1) {
      $("#mat").text("organic matter");
    } else if (material === 2) {
      $("#mat").text("hard things");
    } else {
      $("#mat").text("fancy wood");
    }

    if (emotion === 0) {
      $("#emo").text("rage");
    } else if (emotion === 1) {
      $("#emo").text("being annoyed");
    } else if (emotion === 2) {
      $("#emo").text("relief");
    } else {
      $("#emo").text("kidney damage");
    }

    if (alcohol === 0) {
      $("#alc").text("the taste of medicine");
    } else if (alcohol === 1) {
      $("#alc").text("bourban");
    } else if (alcohol === 2) {
      $("#alc").text("Great Britain");
    } else {
      $("#alc").text("liver damage");
    }

    if (sport === 0) {
      $("#spo").text("Rip City");
    } else if (sport === 1) {
      $("#spo").text("smoking weed");
    } else if (sport === 2) {
      $("#spo").text("being bored");
    } else {
      $("#spo").text("the best show on tv");
    }

    if (currency === 0) {
      $("#cur").text("simplicity");
    } else if (currency === 1) {
      $("#cur").text("your phone");
    } else if (currency === 2) {
      $("#cur").text("technology");
    } else {
      $("#cur").text("anarchism");
    }

    if (topping === 0) {
      $("#top").text("a dry mouth");
    } else if (topping === 1) {
      $("#top").text("stickiness");
    } else if (topping === 2) {
      $("#top").text("thick liquids");
    } else {
      $("#top").text("being gross");
    }

    if (avocado === 0) {
      $("#avo").text("rage");
    } else if (avocado === 1) {
      $("#avo").text("an ingredient");
    } else {
      $("#avo").text("a condiment");
    }



    event.preventDefault();
  });
});
