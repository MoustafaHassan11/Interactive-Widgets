// slide
$(".item h3").on("click", function (e) {
  let $targetDiv = $(e.target).next();
  if ($targetDiv.is(":visible")) {
    $targetDiv.slideUp(500);
  } else {
    $(".item div").slideUp(500);
    $targetDiv.slideDown(500);
  }
});

// The history I want to reach
let countDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
  // get date now
  let dateNow = new Date().getTime();
  // find the date difference between now and countdown date
  let dateDiff = countDate - dateNow;

  // get time units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".sec").innerHTML = seconds;

  // stop the countdown when the date is reached
  if (dateDiff < 0) {
    clearInterval(counter);
    document.querySelector(".days").innerHTML = "0";
    document.querySelector(".hours").innerHTML = "0";
    document.querySelector(".minutes").innerHTML = "0";
    document.querySelector(".sec").innerHTML = "0";
  }
}, 1000);

// input counter
let textBox = document.querySelector(".textBox");
let counter_num = document.querySelector(".counter_num");

maxlength = textBox.getAttribute("maxlength");
textBox.onkeyup = () => {
  counter_num.innerText = maxlength - textBox.value.length;
};

// nav toggle

$(".side_icon").on("click", function () {
  let eleWidth = -$(".nav_links").innerWidth();
  if ($(".side_nav").css("left") == "0px") {
    $(".side_nav").css("left", eleWidth);
  } else {
    $(".side_nav").css("left", "0px");
  }
});

$(".close_icon").on("click", function () {
  $(".side_nav").css("left", -$(".nav_links").innerWidth());
});
