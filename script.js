document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("profitForm");
  const resultBox = document.getElementById("resultBox");
  const resultText = document.getElementById("resultText");
  const backButton = document.getElementById("backButton");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values from input
    const cost = parseFloat(document.getElementById("cost").value) || 0;
    const price = parseFloat(document.getElementById("price").value) || 0;
    const discount = parseFloat(document.getElementById("discount").value) || 0;
    const tax = parseFloat(document.getElementById("tax").value) || 0;
    const shipping = parseFloat(document.getElementById("shipping").value) || 0;
    const platform = parseFloat(document.getElementById("platform").value) || 0;
    const marketing = parseFloat(document.getElementById("marketing").value) || 0;
    const other = parseFloat(document.getElementById("other").value) || 0;

    // Adjusted Selling Price after discount
    const discountedPrice = price - (price * discount) / 100;
    const taxAmount = (discountedPrice * tax) / 100;
    const revenue = discountedPrice + taxAmount;

    // Total cost
    const totalCost =
      cost +
      shipping +
      (discountedPrice * platform) / 100 +
      (discountedPrice * marketing) / 100 +
      other;

    const profit = revenue - totalCost;
    const margin = (profit / revenue) * 100;

    // Show result
    resultText.innerHTML = `
      <strong>Profit:</strong> ₹${profit.toFixed(2)}<br>
      <strong>Margin:</strong> ${margin.toFixed(2)}%
    `;

    // Switch view
    form.style.display = "none";
    resultBox.style.display = "flex";
  });

});

