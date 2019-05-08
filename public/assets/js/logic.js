$("#end").hide();
$(function () {
    $(".new-thing").on("submit", function (event) {
        event.preventDefault();
        let newthing = {
            name: $("#something").val().trim(),
        };
        $.ajax("./api/things", {
            type: "POST",
            data: newthing
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".change-eat").on("click", function (event) {
        let id = $(this).data("id");
        let newEat = $(this).data("neweat");
        let newEatState = {
            digested: newEat
        };
        $.ajax("./api/things/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {
                location.reload();
            }
        );
    });
    
    $(".delete-thing").on("click", function (event) {
        $("#end").show();
        let id = $(this).data("id");
        $.ajax("./api/things/" + id, {
            type: "DELETE"
        }).then(
            function () {
                location.reload();
            }
        );
    });
});
    