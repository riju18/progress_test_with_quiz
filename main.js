$(document).ready(function () {
    $("#que_one").hide();
    $("#que_two").hide();
    $("#que_three").hide();
    $("#que_four").hide();
    $("#que_five").hide();
    $("#cancel_retake").hide();
    $("#finish").hide();
    $("#answer").hide();
    $("#answers").hide();

    /* all que answers is hided */
    $("#queestion1_ans").hide();
    $("#queestion2_ans").hide();
    $("#queestion3_ans").hide();
    $("#queestion4_ans").hide();
    $("#queestion5_ans").hide();
    /* all que answers is hided */


    var pro = document.getElementById("percent");
    var width = 0;
    var score="";
    var correctAnswer = 0;

    $("#start").click(function () {   //when start is clicked
        $("#start").hide();
        $("#que_one").show();
        $("#cancel_retake").show();
        $("#que_two").hide();
        $("#que_three").hide();
        $("#que_four").hide();
        $("#que_five").hide();
        $("#finish").hide();
        $("#one").css({
            "background":"#f39c12",
            "color":"white"
        });
    });
    $("#retake").click(function () {    //when retake is clicked
        location.reload();        //page refresh
        $("#start").show();
        $("#que_one").hide();
        $("#cancel_retake").hide();
        $("#que_two").hide();
        $("#que_three").hide();
        $("#que_four").hide();
        $("#que_five").hide();
        $("#finish").hide();
        $("#one").css({
            "background":"none",
            "color":"black"
        });
        $("#two").css({
            "background":"none",
            "color":"black"
        });
        $("#three").css({
            "background":"none",
            "color":"black"
        });
        $("#four").css({
            "background":"none",
            "color":"black"
        });
        $("#five").css({
            "background":"none",
            "color":"black"
        });
    });
    $("#submit_one").click(function () {    //when 1st que is submitted;
        var getCheck = $('input[type="checkbox"]:checked');
        if ( getCheck.length > 0 ) {
             var result = getCheck.length;
            getCheck.each(function () {
               result=$(this).val();
              });
              if ( result == "Operating System" ) {
               // $("#output").html(result);   
               correctAnswer++;
              }

              width+=20;
              pro.style.width = width + '%';
              pro.innerHTML = width * 1 + '%' ;
        }
        $("#two").css({
            "background":"#f39c12",
            "color":"white"
        });

        $("#start").hide();
        $("#que_one").hide();
        $("#cancel_retake").show();
        $("#que_two").show();
        $("#que_three").hide();
        $("#que_four").hide();
        $("#que_five").hide();
        $("#finish").hide();
    });
    $("#submit_two").click(function () { 
        var getCheck = $('input[type="checkbox"]:checked');
        if ( getCheck.length > 0 ) {
            var result = getCheck.length;
            getCheck.each(function () {
               result=$(this).val();
              });
              if ( result == "Animation/movie file" ) {
                //$("#output").html(result);
                correctAnswer++;   
              }

              width+=20;
              pro.style.width = width + '%';
              pro.innerHTML = width * 1 + '%' ;
              
        }
        $("#three").css({
            "background":"#f39c12",
            "color":"white"
        });
        $("#start").hide();
        $("#que_one").hide();
        $("#cancel_retake").show();
        $("#que_two").hide();
        $("#que_three").show();
        $("#que_four").hide();
        $("#que_five").hide();
        $("#finish").hide();
    });
    $("#submit_three").click(function () { 
        var getCheck = $('input[type="checkbox"]:checked');
        if ( getCheck.length > 0 ) {
            var result = getCheck.length;
            getCheck.each(function () {
               result=$(this).val();
              });
              if ( result == "David Filo & Jerry Yang" ) {
                //$("#output").html(result);
                correctAnswer++;   
              }

              width+=20;
              pro.style.width = width + '%';
              pro.innerHTML = width * 1 + '%' ;
              
        }
        $("#four").css({
            "background":"#f39c12",
            "color":"white"
        });

        $("#start").hide();
        $("#que_one").hide();
        $("#cancel_retake").show();
        $("#que_two").hide();
        $("#que_three").hide();
        $("#que_four").show();
        $("#que_five").hide();
        $("#finish").hide();
    });
    $("#submit_four").click(function () { 
        var getCheck = $('input[type="checkbox"]:checked');
        if ( getCheck.length > 0 ) {
            var result = getCheck.length;
            getCheck.each(function () {
               result=$(this).val();
              });
              if ( result == "R = 1/s" ) {
                //$("#output").html(result);   
                correctAnswer++;
              }

              width+=20;
              pro.style.width = width + '%';
              pro.innerHTML = width * 1 + '%' ;
              
        } 
        $("#five").css({
            "background":"#f39c12",
            "color":"white"
        });

        $("#start").hide();
        $("#que_one").hide();
        $("#cancel_retake").show();
        $("#que_two").hide();
        $("#que_three").hide();
        $("#que_four").hide();
        $("#que_five").show();
        $("#finish").hide();
    });
    $("#submit_five").click(function () { 
        var getCheck = $('input[type="checkbox"]:checked');
        if ( getCheck.length > 0 ) {
            var result = getCheck.length;
            getCheck.each(function () {
               result=$(this).val();
              });
              if ( result == "Database" ) {
                //$("#output").html(result);   
                correctAnswer++;
              }

              width+=20;
              pro.style.width = width + '%';
              pro.innerHTML = width * 1 + '%' ;
              
        }
        if ( correctAnswer == 5 ) {
            score = "score 100%";
            setTimeout(function () { 
                $("#end").html(score);
                $("#end").css({
                    "background":"#2ecc71",
                    "font-family": "'Bungee', cursive",
                    "fontSize":"25px"
                });
             }, 3700);
        }
        if ( correctAnswer == 4 ) {
            score = "score 80%";
            setTimeout(function () { 
                $("#end").html(score);
                $("#end").css({
                    "background":"#2ecc71",
                    "font-family": "'Bungee', cursive",
                    "fontSize":"25px"
                });
             }, 3700);
        }
        if ( correctAnswer == 3 ) {
            score = "score 60%";
            setTimeout(function () { 
                $("#end").html(score);
                $("#end").css({
                    "background":"#2ecc71",
                    "font-family": "'Bungee', cursive",
                    "fontSize":"25px"
                });
             }, 3700);
        }
        if ( correctAnswer == 2 ) {
            score = "score 40%";
            setTimeout(function () { 
                $("#end").html(score);
                $("#end").css({
                    "background":"#2ecc71",
                    "font-family": "'Bungee', cursive",
                    "fontSize":"25px"
                });
             }, 3700);
        }
        if ( correctAnswer == 1 ) {
            score = "score 20%";
            setTimeout(function () { 
                $("#end").html(score);
                $("#end").css({
                    "background":"#2ecc71",
                    "font-family": "'Bungee', cursive",
                    "fontSize":"25px"
                });
             }, 3700);
        }
        if ( correctAnswer == 0 ) {
            score = "score 0%";
            setTimeout(function () { 
                $("#end").html(score);
                $("#end").css({
                    "background":"#2ecc71",
                    "font-family": "'Bungee', cursive",
                    "fontSize":"25px"
                });
             }, 3700);
        }
        $("#start").hide();
        $("#que_one").hide();
        $("#cancel_retake").show();
        $("#que_two").hide();
        $("#que_three").hide();
        $("#que_four").hide();
        $("#que_five").hide();
        $("#finish").show();
        $("#answer").show();

        $("#answer").click(function () { 
            $("#answers").show();

            $("#que1_plus").click(function () { 
                $("#queestion1_ans").slideDown();
                $("#que1_minus").click(function () { 
                    $("#queestion1_ans").slideUp();
                });
            });

            $("#que2_plus").click(function () { 
                $("#queestion2_ans").slideDown();
                $("#que2_minus").click(function () { 
                    $("#queestion2_ans").slideUp();
                });
            });

            $("#que3_plus").click(function () { 
                $("#queestion3_ans").slideDown();
                $("#que3_minus").click(function () { 
                    $("#queestion3_ans").slideUp();
                });
            });

            $("#que4_plus").click(function () { 
                $("#queestion4_ans").slideDown();
                $("#que4_minus").click(function () { 
                    $("#queestion4_ans").slideUp();
                });
            });

            $("#que5_plus").click(function () { 
                $("#queestion5_ans").slideDown();
                $("#que5_minus").click(function () { 
                    $("#queestion5_ans").slideUp();
                });
            });

        });
    });
});