const reviewForm = document.querySelector("#review-form");
const reviewMessage = document.querySelector("#review-message");

reviewForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!reviewForm.reportValidity()) {
    return;
  }

  reviewMessage.textContent = "Thank you for your feedback. This demo does not send or store reviews.";
  reviewForm.reset();
});
