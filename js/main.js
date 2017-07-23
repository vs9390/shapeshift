setTimeout(function() {
    $('.req').keyup(function(){
        if($('.ng-invalid').length > 1){
            $('#shift').attr('disabled', true);
        }else {
          $('#shift').attr('disabled', false);
        }
    })
}, 3000);

// $(document).ready(function() {
//     $('.req').keyup(function(){
//         if($('.ng-invalid').length > 1){
//             $('#shift').attr('disabled', true);
//         }else {
//           $('#shift').attr('disabled', false);
//         }
//     })
// });
