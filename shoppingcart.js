document.addEventListener("DOMContentLoaded", function () {
  const btnAdds = document.querySelectorAll("#add");
  const btnRemoves = document.querySelectorAll("#remove");
  const deleteButtons = document.querySelectorAll(".delete-btn");
  const heartButtons = document.querySelectorAll(".heart-btn");

  btnAdds.forEach((btnAdd, index) => {
    btnAdd.addEventListener("click", function () {
      btnAdd.previousElementSibling.textContent++;
      updateTotalPrice();
    });
  });

  btnRemoves.forEach((btnRemove, index) => {
    btnRemove.addEventListener("click", function () {
      if (btnRemove.nextElementSibling.textContent > 0) {
        btnRemove.nextElementSibling.textContent--;
        updateTotalPrice();
      }
    });
  });

  deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      button.closest(".card").remove();
      updateTotalPrice();
    });
  });
  heartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
    });
  });

  function updateTotalPrice() {
    let totalPrice = 0;

    document.querySelectorAll(".card").forEach((card) => {
      const quantity = parseInt(card.querySelector("h6").textContent);
      const price = parseFloat(
        card.querySelector(".price").textContent.replace(" TND", "")
      );
      totalPrice += price * quantity;
    });
    document.getElementById(
      "total-price"
    ).textContent = `Total Price: ${totalPrice.toFixed(2)} TND`;
  }

  updateTotalPrice();
});
