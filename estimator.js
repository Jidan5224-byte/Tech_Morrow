const estimatorForm = document.querySelector("#estimator-form");
const estimateWeight = document.querySelector("#estimate-weight");
const estimateCount = document.querySelector("#estimate-count");
const resultMessage = document.querySelector("#result-message");

const deviceTypes = [
  { field: "phones", weight: 0.2 },
  { field: "tablets", weight: 0.5 },
  { field: "laptops", weight: 2 },
  { field: "monitors", weight: 5 },
  { field: "accessories", weight: 0.1 }
];

function updateEstimate() {
  let totalItems = 0;
  let totalWeight = 0;

  deviceTypes.forEach(function (device) {
    const input = document.querySelector(`#${device.field}`);
    const quantity = Math.max(0, Number(input.value) || 0);
    totalItems += quantity;
    totalWeight += quantity * device.weight;
  });

  estimateWeight.textContent = totalWeight.toFixed(1);
  estimateCount.textContent = totalItems;

  if (totalItems === 0) {
    resultMessage.textContent = "Add your device counts to see an estimate.";
  } else if (totalItems === 1) {
    resultMessage.textContent = "One device can still have a better next step: repair, reuse, or recycle it responsibly.";
  } else {
    resultMessage.textContent = "Your devices may contain reusable materials. Keep them separate and find an authorised collection point.";
  }
}

estimatorForm.addEventListener("submit", function (event) {
  event.preventDefault();
  updateEstimate();
});

estimatorForm.addEventListener("input", updateEstimate);
estimatorForm.addEventListener("reset", function () {
  window.setTimeout(updateEstimate, 0);
});
