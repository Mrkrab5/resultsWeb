document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".beautiEff .mybutton").forEach(function (el) {
        el.addEventListener("click", function () {
            el.classList.add("mybutton--click"), setTimeout(function () {
                el.classList.remove("mybutton--click");
            }, 600);
        });
    });
});