// Show a friendly confirmation when the visitor completes the pledge.
const pledgeForm = document.querySelector("#pledge-form");
const formMessage = document.querySelector("#form-message");

pledgeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!pledgeForm.reportValidity()) {
    return;
  }

  const visitorName = document.querySelector("#name").value.trim();
  formMessage.textContent = `Thank you, ${visitorName}! Your pledge is ready. Now find a nearby collection point below.`;
  pledgeForm.reset();
});

// Update the embedded map with the visitor's chosen area.
const mapSearch = document.querySelector("#map-search");
const locationInput = document.querySelector("#location");
const collectionMap = document.querySelector("#collection-map");

mapSearch.addEventListener("submit", function (event) {
  event.preventDefault();

  const area = locationInput.value.trim();
  if (!area) {
    locationInput.focus();
    return;
  }

  const search = encodeURIComponent(`e-waste collection centre near ${area}`);
  collectionMap.src = `https://www.google.com/maps?q=${search}&output=embed`;
});
