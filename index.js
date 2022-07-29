function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

document.getElementById('blah').addEventListener('click', function () {
    document.getElementById('input').click();
});

document.getElementById('small').addEventListener('click', function () {
    document.getElementById('blah').style.width = "160px";
    document.getElementById('blah').style.height = "120px";
});

document.getElementById('medium').addEventListener('click', function () {
    document.getElementById('blah').style.width = "200px";
    document.getElementById('blah').style.height = "140px";
});

document.getElementById('large').addEventListener('click', function () {
    document.getElementById('blah').style.width = "220px";
    document.getElementById('blah').style.height = "160px";
});

document.getElementById('reg').addEventListener('click', function () {
    document.getElementById('cta').style.fontStyle = "normal";
    document.getElementById('cta').style.fontWeight = "normal";
});

document.getElementById('itl').addEventListener('click', function () {
    document.getElementById('cta').style.fontStyle = "italic";
    document.getElementById('cta').style.fontWeight = "normal";
});
document.getElementById('bold').addEventListener('click', function () {
    document.getElementById('cta').style.fontStyle = "normal";
    document.getElementById('cta').style.fontWeight = "bold";
});