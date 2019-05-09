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

    $(".change-chew").on("click", function (event) {
        let id = $(this).data("id");
        let newChew = $(this).data("newchew");
        let newChewState = {
            digested: newChew
        };
        $.ajax("./api/things/" + id, {
            type: "PUT",
            data: newChewState
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
    