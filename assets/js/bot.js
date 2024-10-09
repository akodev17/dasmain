var telegram_bot_id = "8180733026:AAF65o3bgAqZ1eBaUTp2glxHC8leOLCApZA";
var chat_id = 1283394957;
var u_name, email, message;

var ready = function () {
  u_name = document.getElementById("name").value.trim();
  email = document.getElementById("email").value.trim();
  message = document.getElementById("message").value.trim();
  console.log("Ism: " + u_name + ", Email: " + email + ", Izoh: " + message);
};

var sendtelegram = function () {
  ready();

  if (!u_name || !email || !message) {
    toastr.error("Please fill in all fields!"); // Toastr xabari
    return false;
  }

  var fullMessage =
    "Ismi: " + u_name + "\nEmail: " + email + "\nIzoh: " + message;

  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: fullMessage,
    }),
  };

  $.ajax(settings)
    .done(function (response) {
      toastr.success("Message sent successfully!"); // Success toaster
    })
    .fail(function (error) {
      toastr.error(
        "There was an error sending the message. Please try again."
      ); // Error toaster
    });

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  return false;
};

$(document).ready(function () {
  // Toastrni boshlang'ich sozlash
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: true, // Yangilar yuqorida
    progressBar: true,
    positionClass: "toast-top-center", // Xabarlar joylashuvi
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000", // Xabar ko'rinish davomiyligi
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn", // Xabar ko'rsatish usuli
    hideMethod: "fadeOut", // Xabar yashirish usuli
  };
});
