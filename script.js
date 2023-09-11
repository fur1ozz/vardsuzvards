function submit_name(){
    $("#input").css("display", "none")
    $("#text-above").css("display", "none")
    $("#output").css("display", "flex")

    let name = $("#in-name").val();
    let surname = $("#in-surname").val();
    // console.log(name);
    $("#magic").text("Your name is - "+name+" "+surname);
}
function back(){
    $("#input").css("display", "flex")
    $("#text-above").css("display", "flex")
    $("#output").css("display", "none")

    $("#in-name").val("");
    $("#in-surname").val("");
}
