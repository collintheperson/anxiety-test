$(document).ready(function(){
  $("form#wellnessSurvey").submit(function(event)  {
    alert("hi");
    var numberWarnings = $("input:checkbox[name=warning-signs]:checked").length;
    var numberSymptoms = $("input:checkbox[name=health-symptoms]:checked").length;
    var numberCoping = $("input:checkbox[name=coping]:checked").length;
    // debugger;
    if ((numberWarnings <= 1) || (numberSymptoms <= 1) && (numberCoping >= 4)) {
      alert("firstcondition");
      $("#guidance").append("You are doing well. Keep it up.");
    };
    if ((numberWarnings <= 3) || (numberSymptoms <= 3) && (numberCoping >= 2)) {
      alert("secondcondition");
      $("#guidance").append("Slow down, feel it out, relax, get some sleep.");
    };
    if ((numberWarnings >= 4) && (numberSymptoms >= 4) && (numberCoping >= 1)) {
      alert("thirdcondition");
      $("#guidance").append("See a therapist.");
    };

    event.preventDefault()
  });
});
