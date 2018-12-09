$(document).ready(function() {

    var fighter1hp=0;
    var fighter1="";
    var fighter2="";
    var fighter1dmg=0;
    var fighter2dmg=0;
    var wins="0";
    
    //var choosefighter1 = function () {
        
                
    $(".fighter").hover(function(){
        $(this).css("background-color", "lightblue");
        $(this).css("opacity", "0.5");
        }, function(){
        $(this).css("background-color", "white");
    });
    $("#fighter1text").text("Pick your character");

    $(".fighter").on("click", function() {
        
        if (fighter1===""){
        $("#fighter1").animate({backgroundColor: 'white', opacity: '0.5'}, "fast");
        wins=0;
        $("#fighter1").addClass("container fighter");
        $(this).fadeOut();
        fighter1=$(this).attr("id");
        switch (fighter1){
            case "Obiwan":
                fighter1hp = 200;
                $("#fighter1text").text("You have selected Obi Wan Kanobi");
                $("#fighter1name").text("Obi Wan Kanobi");
                $("#fighter1img").attr("src", "Images/obiwan.jpg");
                $("#fighter1hp").text("HP: "+fighter1hp);
                fighter1dmg=10;
                break;
            case "Luke":
                    fighter1hp = 180;
                    $("#fighter1text").text("You have selected Luke");
                    $("#fighter1name").text("Luke Skywalker");
                $("#fighter1img").attr("src", "Images/luke.jpg");
                $("#fighter1hp").text("HP: "+fighter1hp);
                fighter1dmg=15;
                break;
            case "Maul":
            fighter1hp = 210;
            $("#fighter1text").text("You have selected Darth Maul");
            $("#fighter1name").text("Darth Maul");
            $("#fighter1img").attr("src", "Images/maul.jpg");
            $("#fighter1hp").text("HP: "+fighter1hp);
            fighter1dmg=11;
                break;
            case "Palpatine":
            fighter1hp = 300;
            $("#fighter1text").text("You have selected Palpatine");
            $("#fighter1name").text("Darth Sidious");
            $("#fighter1img").attr("src", "Images/palpatine.jpg");
            $("#fighter1hp").text("HP: "+fighter1hp);
            fighter1dmg=70;
                break;
            }
            $("#fighter2text").text("Pick your character");
        }
        else if (fighter2===""){
            $("#fighter2").animate({backgroundColor: 'white', opacity: '0.5'}, "fast");
            $("#fighter2").addClass("container fighter");
            $(this).fadeOut();
            fighter2=$(this).attr("id");
            switch (fighter2){
                case "Obiwan":
                    fighter2hp = 200;
                    $("#fighter2text").text("Your enemy is Obi Wan Kanobi");
                    $("#fighter2name").text("Obi Wan Kanobi");
                    $("#fighter2img").attr("src", "Images/obiwan.jpg");
                    $("#fighter2hp").text("HP: "+fighter2hp);
                    fighter2dmg=20;
                    break;
                case "Luke":
                        fighter2hp = 180;
                        $("#fighter2text").text("Your enemy is Luke");
                        $("#fighter2name").text("Luke Skywalker");
                    $("#fighter2img").attr("src", "Images/luke.jpg");
                    $("#fighter2hp").text("HP: "+fighter2hp);
                    fighter2dmg=30;
                    break;
                case "Maul":
                fighter2hp = 210;
                $("#fighter2text").text("Your enemy is Darth Maul");
                $("#fighter2name").text("Darth Maul");
                $("#fighter2img").attr("src", "Images/maul.jpg");
                $("#fighter2hp").text("HP: "+fighter2hp);
                fighter2dmg=22;
                    break;
                case "Palpatine":
                fighter2hp = 300;
                $("#fighter2text").text("Your enemy is Darth Sidious");
                $("#fighter2name").text("Darth Sidious");
                $("#fighter2img").attr("src", "Images/palpatine.jpg");
                $("#fighter2hp").text("HP: "+fighter2hp);
                fighter2dmg=17;
                    break;
                }
                fight();
            }
        });
        
        var fight = function () {
            var attack = $("<button>");
            attack.addClass("btn btn-dark mt-2");
            attack.attr("id","attack");
            attack.html("Fight!")
            $("#box1").append(attack);
            $("#attack").on("click", function() {
                console.log("testing");
                $("#fighter1").animate({backgroundColor: 'blue', opacity: '0.2'}, "fast");
                $("#fighter1").animate({backgroundColor: 'white', opacity: '0.5'}, "fast");
                $("#fighter2").animate({backgroundColor: 'green', opacity: '0.2'}, "fast");
                $("#fighter2").animate({backgroundColor: 'white', opacity: '0.5'}, "fast");
                fighter1hp = fighter1hp-fighter2dmg;
                fighter2hp = fighter2hp - fighter1dmg;
                fighter1dmg=fighter1dmg*2;
                $("#fighter1hp").text("HP: "+fighter1hp);
                $("#fighter2hp").text("HP: "+fighter2hp);
                if (fighter1hp<=0) {
                    $("#fighter1hp").text("HP: 0");
                    $("#fighter1text").attr("style","color:red;");
                    $("#fighter1text").text("You lose!");
                    $("#fighter2text").text("The Dark Side Wins!");
                    if (fighter2hp<=0){
                        $("#fighter2hp").text("HP: 0");
                    }
                    $(attack).fadeOut();
                }
                else if (fighter2hp<=0){
                    $("#fighter2hp").text("HP: 0");
                    $("#fighter2text").text("You win! Select next fighter");
                    $("#fighter2").animate({backgroundColor: 'yellow', opacity: '0.2'}, "fast");
                    fighter2="";
                    $(attack).remove();
                    fighter1dmg=30;
                    wins++;
                    if (wins===3) {
                        $("#fighter1text").text("Winner Winner!");
                        $("#fighter2text").attr("style","color:red;");
                        $("#fighter2text").text("Congratulations! You have beaten everyone");
                    }
                }
        
                });
            }
              

        $("#reset").on("click", function (){
            $("#Obiwan").fadeIn();
            $("#Luke").fadeIn();
            $("#Palpatine").fadeIn();
            $("#Maul").fadeIn();
            $("#attack").remove();
            $("#fighter1").animate({backgroundColor: 'gray', opacity: '0.5'}, "fast");
            $("#fighter2").animate({backgroundColor: 'gray', opacity: '0.5'}, "fast");
            $("#fighter2name").text("");
            $("#fighter2img").attr("src", "");
            $("#fighter2hp").text("");
            $("#fighter1name").text("");
            $("#fighter1img").attr("src", "");
            $("#fighter1hp").text("");
            fighter1="";
            fighter2="";
            $("#fighter1text").text("Pick your character");
            $("#fighter2text").text("");
        });
                console.log(fighter1);
        

})