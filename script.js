/*welcome*/
var body = document.querySelector('body');
if (body.classList.contains('login')){
$(".welcome").hide()
var username = document.querySelector('#username');
var button = document.querySelector('#login');
var h3 = document.querySelector('h3');
button.addEventListener('click', function(){
  $(".welcome").fadeIn(1000);
  if (username.value != '') {
    var welcomeName = username.value;
    h3.innerHTML = `Welcome ${welcomeName}`;
  };
})
}

/* */


/*divider stuff*/
    /*.divider*/
$(".divider button.left").css("background-color", "#3FA34D");
$(".left svg").css("fill","white");
$(".left h3").css("color","white");
$("#right").hide();
$("#left").slideDown(500);

$(".divider button.left").click(function(){
    $(".divider button.right").css("background-color", "#F8F9FA");
    $(".right svg").css("fill","black");
    $(".right h3").css("color","black");
    $(".divider button.left").css("background-color", "#3FA34D");
    $(".left svg").css("fill","white");
    $(".left h3").css("color","white");
    $("#right").hide();
    $("#left").slideDown(500);
});

$(".divider button.right").click(function(){
    $(".divider button.left").css("background-color", "#F8F9FA");
    $(".left svg").css("fill","black");
    $(".left h3").css("color","black");
    $(".divider button.right").css("background-color", "#3FA34D");
    $(".right svg").css("fill","white");
    $(".right h3").css("color","white");
    $("#left").hide();
    $("#right").slideDown(500);
});

    /*dvdr*/
$(".dvdr button.left").css("background-color", "#3FA34D");

$(".dvdr button.left").click(function(){
    $(".dvdr button.right").css("background-color", "#F8F9FA");
    $(".right svg").css("fill","black");
    $(".right h3").css("color","black");
    $(".dvdr button.left").css("background-color", "#3FA34D");
    $(".left svg").css("fill","white");
    $(".left h3").css("color","white");
    $("#right").hide();
    $("#left").slideDown(500);
});

$(".dvdr button.right").click(function(){
    $(".dvdr button.left").css("background-color", "#F8F9FA");
    $(".left svg").css("fill","black");
    $(".left h3").css("color","black");
    $(".dvdr button.right").css("background-color", "#3FA34D");
    $(".right svg").css("fill","white");
    $(".right h3").css("color","white");
    $("#left").hide();
    $("#right").slideDown(500);
});

    /*.dvr*/
$(".dvr button.left").css("background-color", "#3FA34D");

$(".dvr button.left").click(function(){
    $(".dvr button.right").css("background-color", "#F8F9FA");
    $(".right svg").css("fill","black");
    $(".dvr button.left").css("background-color", "#3FA34D");
    $(".left svg").css("fill","white");
    $("#right").hide();
    $("#left").slideDown(500);
});

$(".dvr button.right").click(function(){
    $(".dvr button.left").css("background-color", "#F8F9FA");
    $(".left svg").css("fill","black");
    $(".dvr button.right").css("background-color", "#3FA34D");
    $(".right svg").css("fill","white");
    $("#left").hide();
    $("#right").slideDown(500);
});

/* */

/*Search Bar*/
function search_item() {
    let input = document.getElementById('srch').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('item');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="block";                 
        }
    }
}

/* */

/*SideNav*/

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("borger").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("borger").style.width = "0";
  }

/* */

/*mark tasks done and disappear*/
$(".task path").css("visibility", "hidden");
$("#wMint button").click(function(){
    $("#wMint button path").css("visibility", "visible")
    $("#wMint").hide(500)
});
$("#wHibiscus button").click(function(){
    $("#wHibiscus button path").css("visibility", "visible")
    $("#wHibiscus").hide(500)
});

/* */

/*save article that doesnt actually work lol*/
$("#save").css({"fill":"none","stroke":"#F8F9FA"});
$("#save").click(function(){
    $("#save").css({"fill":"#F8F9FA", "stroke":"#F8F9FA"});
});

/* */

/*saved articles*/
$(".saved").css({"fill":"#F8F9FA", "stroke":"#F8F9FA"});

/* */

/*create reminders*/
$("#check1").css("visibility", "hidden");
$("#check2").css("visibility", "hidden");
$("#bell1").click(function(){
    $("#check1").css("visibility", "visible");
});
$("#bell2").click(function(){
    $("#check2").css("visibility", "visible");
});

/* */

/*search for plant*/
$("#sh").hide();
$("#new").hide();

$("#search").click(function(){
    $("#sh").show();
    $("#new").show();
    $("#garden").hide();
});

$("#bk").click(function(){
    $("#sh").hide();
    $("#new").hide();
    $("#garden").show();
});

/* */

/*save plant that doesnt actually work lol*/
$(".gsave").css({"fill":"none","stroke":"#3FA34D"});
$(".gsave").toggle(function(){
    $(this).css({"fill":"#3FA34D", "stroke":"#3FA34D"});
}, function(){
    $(this).css({"fill":"none","stroke":"#3FA34D"});
});

/* */

/*saved plants*/
$(".gsaved").css({"fill":"#3FA34D", "stroke":"#3FA34D"});
$(".gsaved").toggle(function(){
    $(this).css({"fill":"none","stroke":"#3FA34D"});
}, function(){
    $(this).css({"fill":"#3FA34D", "stroke":"#3FA34D"});
});
/* */