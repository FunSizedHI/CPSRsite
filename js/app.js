// HOWARD THURMAN TRIVIA APP

$(".answers span").hide();
$(".answers").append("<button>Reveal Answer</button>");
$("button").click(function(){
  $(this).prev().show();
  $(this).remove();
});
