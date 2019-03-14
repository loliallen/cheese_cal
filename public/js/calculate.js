
$(()=>{

    let cheese_clicked = false;
    let cheese_item;
    $('#cheese').click(()=>{
    });
    $('#cream_p').val(45);
    $('#cream_p').prop('disabled', true);
    $('#reverse_p').val(0.1);
    $('#reverse_p').prop('disabled', true);
    
    
    $("#calM > input").css({"outline":"none"});
    $('#milk_p').css({"color":"green", "border":"none", "border-bottom":"2px solid green"});
    $('#milk_w').css({"color":"green", "border":"none", "border-bottom":"2px solid green"});
    $('#prot').css({"margin-bottom":"40px","color":"green", "border":"none", "border-bottom":"2px solid green"});
    $('#protein').css({"color":"green", "border":"none", "border-bottom":"2px solid green"});
    
    $('#calculation_2').click(()=>{
        let milk_p = $('#milk_p').val();
        let milk_m = $('#milk_w').val();
        
        let pf = $('#prot').val();
        let protein = $('#protein').val();
    
        let cream_p = $('#cream_p').val();
    
        let reverse_p = $('#reverse_p').val();
    
    
        let mixture_fat = protein/pf;
        let cream_m = milk_m*(milk_p-mixture_fat)/(cream_p-mixture_fat);
        let onSeparation = cream_m*(cream_p-reverse_p)/(milk_p-reverse_p);
        let reverse_m = onSeparation - cream_m;
        let mixture_mass = milk_m - onSeparation + reverse_m;
        console.log(mixture_fat, cream_m, onSeparation, reverse_m);

        $('#cream_w').val(cream_m.toFixed(2));
        $('#sep').val(onSeparation.toFixed(2));
        $('#mixture_p').val(mixture_fat.toFixed(2));
        $('#mixture_w').val(mixture_mass.toFixed(2));
        $('#reverse_w').val(reverse_m.toFixed(2));
    });
});



