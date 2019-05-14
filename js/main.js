$(document).ready(function(){
    $('header .option').click(function(){
        let option=$(this).data('option')

    $('header .option').removeClass('active')
    $(this).addClass('active')

    // $('arcticle').hide()
    // $(`arcticle[data-item=${option}]`).show()

    $('arcticle').removeClass('active')
   $(`arcticle[data-item=${option}]`).addClass('active')

    })
})