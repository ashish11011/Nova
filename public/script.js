const lowerElement = document.querySelectorAll(".lower");
const editButton = document.querySelectorAll(".edit");
for (let i = 0; i < editButton.length; i++) {
  editButton[i].addEventListener("click", () => {
    lowerElement[i].classList.toggle("hidden");
    if (lowerElement[i].classList.contains("hidden")) {
      editButton[i].innerHTML = "Edit";
    } else {
      editButton[i].innerHTML = "save";
    }

    if (editButton[i].innerHTML == "save") {
      editButton[i].addEventListener("click", () => {
        const form = document.querySelector("#list-des-form");

        // FIXME: required form.submit()?
        // form.submit();

        const formDetails = new FormData(form);
        const des = formDetails.get("des");
        const count = formDetails.get("count");
        console.log(des, count);

        // Directly calling the API here
        fetch("/click", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            des,
            count,
          }),
        })
          .then((response) => {
            if (response.ok) {
              console.log("POST request sent successfully!");
              // Do your routing either here or in /click route
            } else {
              console.error("Error sending POST request:", response.status);
            }
          })
          .catch((error) => {
            console.error("Error sending POST request:", error);
          });
      });
    }
  });

  ///////////////////////////

  // Get the H1 element
  const fiberHeading = document.querySelectorAll(".fiber-heading");

  // Add a click event listener to the H1
  for (let i = 0; i < fiberHeading.length; i++) {
    fiberHeading[i].addEventListener("click", () => {
      const clickedText = fiberHeading[i].innerHTML;
      console.log(clickedText);

      fetch("/click", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: "abc",
      })
        .then((response) => {
          if (response.ok) {
            console.log("POST request sent successfully!");
          } else {
            console.error("Error sending POST request:", response.status);
          }
        })
        .catch((error) => {
          console.error("Error sending POST request:", error);
        });
    });
  }

  ///////////////////////////
}
