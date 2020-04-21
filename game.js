var buttoncolors=["red","green","yellow","blue"];

var gamepattern=[];
var userpattern=[];
var i=0;
var start=false;
var len=0;
var next=true;
$(".btn").click(function(){
 var userchoose=$(this).attr("id");
 userpattern.push(userchoose);
 anim(userchoose);
 playsound(userchoose);
  len=userpattern.length;
  check(len);
});

function nextseq(){
    userpattern=[];
    i++;
    $("h1").text("level "+i)
    var randomno=Math.floor(Math.random()*4);
   var randomchoose=buttoncolors[randomno];

    gamepattern.push(randomchoose);
    $("#" + randomchoose).fadeIn(100).fadeOut(100).fadeIn(100);
     playsound(randomchoose);
   
     
}
 function playsound(name)
 {
    var audio=new Audio("sounds/"  + name + ".mp3");
    audio.play();
 }
 function anim(col)
 {
     $("."+col).addClass("pressed");
    setTimeout(function(){
        $("."+col).removeClass("pressed");
    },100);
        
     
 }
 
 
    $(document).keypress(function(){
        if(!start)
        {
            $("h1").text("level "+i);
         nextseq();
         start=true; 
        }
          
     });
     $(".start").click(function(){
        if(!start)
        {
            $("h1").text("level "+i);
         nextseq();
         start=true; 
        }
          
     });

     function check( level){
        
        
            if(userpattern[level-1]==gamepattern[level-1])
            {
                

                if(userpattern.length==gamepattern.length)
                {
                    setTimeout(function(){
                        nextseq();
                    },1000);
                }
            }else
            {
                
                $("body").addClass("game-over");

                var audio=new Audio("sounds/wrong.mp3");
                audio.play();
                setTimeout(function(){
                    $("body").removeClass("game-over");
                }, 200);
                $("h1").text("Game-over,press any key to restart..");
                start=false;
                i=0;
                gamepattern=[];
                userpattern=[];
            }
            
        
        }
        $(".info").click(function(){
            $("h3").text("It is a memory based game.. how much you can remember..    ");
            $(".l1").text(" 1.On starting game one of the color gets flash with corresponding sound. You have to start with that color");
            $(".l2").text(" 2.As level increases colors get added randomly     ")
            $(".l3").text("3 You have to press all colors from starting in the sequence they were added at each level")
            $(".l4").text("  4 If you press wrong color game will over")
            $("h3").addClass("rule"); 
        });
        $(".stop").click(function(){
          $("h3").text("   ");
          $(".ll").text(" ");
        });
   
 
