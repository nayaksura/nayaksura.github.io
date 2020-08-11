$(document).ready(function() {
  // banner slider 
  document.getElementById("sub-f").style.display = "none";
  document.getElementById("top-f").style.display = "none";

  var owl = $('#BannerSlider').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    autoHeight: true,
    autoplay: true
  });
  $("#trac-sub").click(function()
  {
    
    document.getElementById("sub-f").style.display = "block";
  });
  $("#trac-topics").click(function()
  {
    document.getElementById("top-f").style.display = "block";
  });
  /////////////////////////////////////////////////////////////////////////////////////
  $("#sub-form").submit(function(){
  
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    

  });
 
 function drawChart(){
  var val1=parseInt(document.getElementById("inputSubGroupSelect01").value);
  var val2=parseInt(document.getElementById("inputSubGroupSelect02").value);
  var val3=parseInt(document.getElementById("inputSubGroupSelect03").value);
  var val4=parseInt(document.getElementById("inputSubGroupSelect04").value);
  var val5=parseInt(document.getElementById("inputSubGroupSelect04").value);
  var val6=parseInt(document.getElementById("inputSubGroupSelect06").value);
  var data = google.visualization.arrayToDataTable([
    ['SUBJECTS', 'PREPARATION DONE TILL NOW'],
    ['MATHEMATICS', val1],
    ['PHYSICS', val2],
    ['CHEMISTRY', val3],
    ['ENGLISH', val4],
    ['COMPUTER SCIENCE', val5],
    ['BIOLOGY', val6]
  ]);
  var options = {
    title: 'MY PREAPRATION',
    is3D: true,
  };
var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);}



  $("#top-form").submit(function(){

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart_2);

    

  });
 
  function drawChart_2() {
    var val1=parseInt(document.getElementById("inputTopGroupSelect01").value);
    var val2=parseInt(document.getElementById("inputTopGroupSelect02").value);
    var val3=parseInt(document.getElementById("inputTopGroupSelect03").value);
    var val4=parseInt(document.getElementById("inputTopGroupSelect04").value);
    var data = google.visualization.arrayToDataTable([
      ["Topic", "rate of preparation", { role: "style" } ],
      ["RELATIONS AND FUNCTIONS", val1, "blue"],
      ["MATRICES", val2, "blue"],
      ["DETERMINANTS", val3, "blue"],
      ["INTEGRAION", val4, "blue"]
    ]);
    var view = new google.visualization.DataView(data);
   

    var options = {
      title: "Graph of rate of preparation for the topics",
      height: 600,
      vAxis: {
        viewWindow: {
            max: 6
        }},
    
      legend: { position: "none" },
      
      
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
}




  /////////////////////////////////////////////////////////////////////////////////
  // sticky header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      $('body').addClass("sticky");
    } else {
      $('body').removeClass("sticky");
    }
  });
  // smooth scroll
  $(".smooth-scroll").click(function() {
    var target = $(this).attr("href"),
      scrollTo = $(target).offset().top,
      headerHeight = $('#Header').outerHeight();
    console.log(headerHeight);
    $('html, body').animate({ scrollTop: scrollTo - headerHeight });
    $('#nav-icon1').trigger("click");
    $("body").removeClass("menu-active");
  });
  //menu icon animation
  $('#nav-icon1').click(function() {
    $(this).toggleClass('open');
    $("body").toggleClass("menu-active");
  });
  
  //menu link click
  // magnific video popup  
  $('.popup-youtube-wst').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  // contact form script
  $('.form-wrap input, .form-wrap textarea, .email-box input').blur(function() {
    tmpval = $(this).val();
    if (tmpval == '') {
      $(this).addClass('empty');
      $(this).removeClass('not-empty');
    } else {
      $(this).addClass('not-empty');
      $(this).removeClass('empty');
    }
  });
  // Our Work filter
  $('#OurWork .filter-list ul li').click(function() {
    dis = $(this),
      disFilter = dis.data("filter");
    finalFilter = disFilter == "all" ? "*" : "." + disFilter;
    dis.addClass('active').siblings().removeClass('active');
    $("#OurWork .filter-box .each-box").hide().filter(finalFilter).show();
  });
});