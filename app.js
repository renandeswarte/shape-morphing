$(function() {

  $(".initial-btn")
  .bind("click", function() { init() })
  .bind("touchstart", function() { init() })

  $(".cube-btn")
  .bind("click", function() { cube () })
  .bind("touchstart", function() { cube() })

  $(".sphere-btn").bind("click", function() { sphere() })
  .bind("touchstart", function() { sphere() })

  $(".spin-btn").bind("click", function() { spin() })


  function init() {
    $("#shape").removeClass("sphere").removeClass("cube").addClass("init");
  }
  function cube() {
    $("#shape").removeClass("init").removeClass("sphere").addClass("cube");
  }
  function sphere() {
    $("#shape").removeClass("init").removeClass("cube").addClass("sphere");
  }
  function spin() {
    $("#shape").toggleClass("spin");
  }

})