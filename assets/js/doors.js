    setTimeout(function() {
        var flag = true;
        $(window).mouseout(function(e) {
            if ((e.pageY - $(window).scrollTop() < 1 && flag == true) && !($('.order_block').is(
                    ':visible'))) {
                $('.demon_popup').fadeIn(300);
                flag = false;
            }
        })
    }, 000);
    $('.demon_close, .popup_btn').click(function() {
        $('.demon_popup').fadeOut(100);
        if ($('.order_block').is(':visible')) $("html,body").animate({
            scrollTop: $("#order_form").offset().top - ($(window).height() - $("#order_form")
                .outerHeight(true))
        }, 1e3)
        else $("html,body").animate({
            scrollTop: $(".door__wrapper").offset().top
        }, 1e3)
        return e.preventDefault(), !1
        console.log(111)
    });
    $('.demon_overflow').click(function() {
        $('.demon_popup').fadeOut(100);
        console.log(333)
    });

let doors = document.querySelectorAll(".door");
let doorSales = document.querySelectorAll(".door__sales");
let doorWrapper = document.querySelector(".door__wrapper");
let spinResultWrapper = document.querySelector(".spin-result-wrapper");
let spinResultBtn = document.querySelector(".pop-up-button");
let orderBlock = document.querySelector(".order_block");
let door1 = document.getElementById("door__1");
let door2 = document.getElementById("door__2");
let door3 = document.getElementById("door__3");
let doorSale1 = document.getElementById("door__sales1");
let doorSale2 = document.getElementById("door__sales2");
let doorSale3 = document.getElementById("door__sales3");
let discount_price = document.getElementById("discount");
let customTitle = "";
doors.forEach(function (door) {
  door.addEventListener("click", openDoor);
});
function openDoor(e) {
  e.currentTarget.classList.add("open");
  doorSales.forEach(function (sale) {
    if (door1.classList.contains("open")) {
      doorSale1.innerHTML = discount_price.textContent + "%";
      doorSale2.innerHTML = "15%";
      doorSale3.innerHTML = "25%";
    } else if (door2.classList.contains("open")) {
      doorSale2.innerHTML = discount_price.textContent + "%";
      doorSale1.innerHTML = "25%";
      doorSale3.innerHTML = "15%";
    } else if (door3.classList.contains("open")) {
      doorSale1.innerHTML = "15%";
      doorSale3.innerHTML = discount_price.textContent + "%";
      doorSale2.innerHTML = "25%";
    }
  });
  for (let i = 0; i < doors.length; i++) {
    if (!doors[i].classList.contains("open")) {
      setTimeout(function () {
        doors[i].classList.add("open");
      }, 2500);
    }
  }
  for (let j = 0; j < doors.length; j++) {
    doors[j].removeEventListener("click", openDoor);
  }
  showResultWindow();
  showForm();
}
function showResultWindow() {
  setTimeout(function () {
    $(".spin-result-wrapper").css("display", "block");
  }, 2000);
}
function showForm() {
  setTimeout(function () {
    $(".door__wrapper").slideUp();
    $(".order_block").slideDown();
    setTimeout(function(){$("html,body").animate({ scrollTop: $("#order_form").offset().top - ($(window).height() - $("#order_form").outerHeight(true))}) 
  }, 1000);
  }, 3500);
}
if (typeof customDoorsForm !== "undefined") {
  $(".default_order-block").remove();
  $(".default_spin-result-wrapper").remove();
}

    $(document).on("click", ".otros-commentarios,a:not([modal], .icon-close), .scroll, .pop-up-button, .popup_btn",
        function(e) {
            $(".spin-result-wrapper").fadeOut();
            console.log(222)
            if ($('.order_block').is(':visible')) $("html,body").animate({
                scrollTop: $("#order_form").offset().top - ($(window).height() - $("#order_form")
                    .outerHeight(true))
            }, 1e3)
            else $("html,body").animate({
                scrollTop: $(".door__wrapper").offset().top
            }, 1e3)
            return e.preventDefault(), !1
        });
