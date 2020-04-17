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
                $("h1").text("Game-over,press any key to restart..")
                start=false;
                i=0;
                gamepattern=[];
                userpattern=[];
            }
            
        
        }
   
 
