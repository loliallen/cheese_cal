$(() => {
    let clicked_C = false;
    $('.c_list').click(() => {
        $('.material-icons').hide()
        $('#c_list').toggle(400);
        if (clicked_C) {
            $('.material-icons').text('arrow_drop_down');
            clicked_C = false;
            $('.material-icons').show(400);
        } else {
            $('.material-icons').text('arrow_left');
            clicked_C = true;
            $('.material-icons').show(400);
        }
    });
    $('#calculation').click(() => {
        let tm = $("#tm").val();
        let tw = $("#tw").val();
        let mm = $("#mm").val();
        let mw = $("#mw").val();
        let tn = $("#tn").val();
        let Cw = 4200;
        let Cm = $('#cm').val();

        console.log(tm, tw, mm, mw, tn);
        if (sub([tm, tw, mm, mw, tn, Cm]) == 6) {
            $("#tm, #tw, #mm, #mw, #tn").css('color', 'black');
            $("#tm, #tw, #mm, #mw, #tn").css('background-color', 'white');
            $("#tm").val(undefined);
            $("#tw").val(undefined);
            $("#mm").val(undefined);
            $("#mw").val(undefined);
            $("#tn").val(undefined);

        }
        if (sub([tm, tw, mm, mw, tn, Cm]) >= 5) {
            if (tm == "") {
                $("#tm").css('background-color', 'green');
                $("#tm").css('color', 'white');
                let s = tn - (Cw * mw * (tw - tn)) / (Cm * mm);
                $("#tm").val(s);
            } else if (tw == "") {
                $("#tw").css('background-color', 'green');
                $("#tw").css('color', 'white');
                let s = tn + (Cm * mm * (tn - tm)) / (Cw * mw);
                console.log(s);
                $("tw").val(s);

            } else if (mm == "") {
                $("#mm").css('background-color', 'green');
                $("#mm").css('color', 'white');

                let s = (Cw * mw * (tw - tn) / (Cm * (tn - tm)));
                $("#mm").val(s);

            } else if (mw == "") {
                $("#mw").css('background-color', 'green');
                $("#mw").css('color', 'white');

                let s = (Cm * mm * (tn - tm)) / (Cw * (tw - tn));
                $("#mw").val(s);

            } else if (tn == "") {
                $("#tn").css('background-color', 'green');
                $("#tn").css('color', 'white');
                let s = (tm * Cm * mm + tw * Cw * mw) / (Cw * mw + Cm * mm);
                $("#tn").val(s);

            }
        } else {
            alert("Более 2 неизестных");
        }
    });
});
const sub = (items) => {
    let q = 0;
    for (var i = items.length - 1; i >= 0; i--) {
        if (items[i] != "") {
            q++;
        }

    }
    console.log(q);
    return q;
}