// Clearing the weight change form
$("#edit-weight").on("click", () => {
  console.log("true");
  // Clear the weight-number input field
  $("#weight-number").val("");

  // Clear the error message if there is any
  $(".error-text").css("display", "none");
});

// Adding a form submission for the weight change
$("#save-changes").on("click", () => {
  const weightNumber = $("#weight-number").val();
  const weightUnit = $("#weight-unit").val();

  // If the weightNumber is empty
  if (weightNumber === "") {
    $(".error-text").css("display", "block");
  } else {
    // Update the user data
    const user = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        weight: weightNumber,
        weightUnit: weightUnit,
      })
    );

    // Update the dom now
    $("#weight-info-display").text(weightNumber + " " + weightUnit);

    $("#weight-change-modal").modal("hide");
  }
});
