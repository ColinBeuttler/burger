$(function () {
    $(".change-list").on("click", function (event) {
        var id = $(this).data("id");

    })
});
$.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newBurgerId
})
$(".create-form").on("buttonClick", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

});