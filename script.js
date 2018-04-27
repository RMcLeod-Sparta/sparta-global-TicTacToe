var turn = 0;

function xWinCons(){
  if($('#0').hasClass('X') && $('#1').hasClass('X') && $('#2').hasClass('X')){
    $("h2").text("X's WINS!").css('color','green');
  }else if($('#0').hasClass('X') && $('#4').hasClass('X') && $('#8').hasClass('X')){
    $("h2").text("X's WINS!").css('color','green');
  }else if($('#0').hasClass('X') && $('#3').hasClass('X') && $('#6').hasClass('X')){
    $("h2").text("X's WINS!").css('color','green');
  }else if($('#6').hasClass('X') && $('#7').hasClass('X') && $('#8').hasClass('X')){
    $("h2").text("X's WINS!").css('color','green');
  }else if($('#2').hasClass('X') && $('#5').hasClass('X') && $('#8').hasClass('X')){
    $("h2").text("X's WINS!").css('color','green');
  }else if($('#3').hasClass('X') && $('#4').hasClass('X') && $('#5').hasClass('X')){
    $("h2").text("X's WINS!").css('color','green');
  }else if($('#1').hasClass('X') && $('#4').hasClass('X') && $('#7').hasClass('X')){
    $("h2").text("X's WINS!").css('color','green');
  }else if($('#2').hasClass('X') && $('#4').hasClass('X') && $('#6').hasClass('X')){
    $("h2").text("X's WINS!").css('color','green');
}
}
function oWinCons(){
  if($('#0').hasClass('O') && $('#1').hasClass('O') && $('#2').hasClass('O')){
    $("h2").text("O's WINS!").css('color','blue');
  }else if($('#0').hasClass('O') && $('#4').hasClass('O') && $('#8').hasClass('O')){
    $("h2").text("O's WINS!").css('color','blue');
  }else if($('#0').hasClass('O') && $('#3').hasClass('O') && $('#6').hasClass('O')){
    $("h2").text("O's WINS!").css('color','blue');
  }else if($('#6').hasClass('O') && $('#7').hasClass('O') && $('#8').hasClass('O')){
    $("h2").text("O's WINS!").css('color','blue');
  }else if($('#2').hasClass('O') && $('#5').hasClass('O') && $('#8').hasClass('O')){
    $("h2").text("O's WINS!").css('color','blue');
  }else if($('#3').hasClass('O') && $('#4').hasClass('O') && $('#5').hasClass('O')){
    $("h2").text("O's WINS!").css('color','blue');
  }else if($('#1').hasClass('O') && $('#4').hasClass('O') && $('#7').hasClass('O')){
    $("h2").text("O's WINS!").css('color','blue');
  }else if($('#2').hasClass('O') && $('#4').hasClass('O') && $('#6').hasClass('O')){
    $("h2").text("O's WINS!").css('color','blue');
}
}
//defining the win conditions for both X and O and displaying the winning text
//in place of whose turn it is text.
$('.square').on('click',function(){
  if(turn%2 === 0){
    $("h2").text("It is O's turn");
    $(this).removeClass("O");
    this.classList.add("X");
  }else if(turn%2 === 1){
    $("h2").text("It is X's turn");
    $(this).removeClass("X");
    this.classList.add("O");
  }
  turn++;
  oWinCons();
  xWinCons();
});
//This assigns squares classes of X and O while removing the other aswell as
//changing the display of whose turn it is.
$('#reset').on('click',function(){
  $('.square').removeClass("O X");
  $("h2").text("It is X's turn").css('color','black');
})
//Removing the O and X classes from all elements with a square class and changing
//the player turn back to normal.
