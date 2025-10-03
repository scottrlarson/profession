$('#select1').change(function(){
    if($(this).val() == 'airport'){
        $('#nextStep').html('<select name="select1" id="select1"><option value="airport1">Airport1</option><option value="airport2">Airport2</option><option value="airport3">Airport3</option></select>');
    }
    if($(this).val() == 'address'){
        $('#nextStep').html('<input name="sometext" type="text" size="30" maxlength="255">');
    }
});