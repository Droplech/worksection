$(document).ready(function(){

        
    const tabs = document.querySelectorAll('.tabs_link');
    let counter = 1;
    let t;


    function changeTabs() {

        t = setTimeout(function() {
            tabs.forEach(function(elem) {
                $(elem).removeClass('active')
                $('.tabs_content').removeClass('tabs_content-active')
               
            })
           
            $(tabs[counter]).addClass('active')
            $( $(tabs[counter]).attr('data-tab')).addClass('tabs_content-active')
            counter++

            counter = counter == tabs.length ? 0 : counter;
            
            
            
            changeTabs()
        }, 5000)
    }

    $(tabs).on('click', function() {
        let num = $(this).data('tab').substr(-1,1);
        $(tabs).removeClass('active');
        $(this).addClass('active');
        $('.tabs_content').removeClass('tabs_content-active')
        $( $(this).attr('data-tab') ).addClass('tabs_content-active')
        clearInterval(t)
        counter = num == tabs.length ? counter = 0 : counter = num;
        console.log(counter)
        changeTabs()

    })

    changeTabs()
  


    new Swiper('.slider_reviews',{
        navigation: {
            nextEl: "#reviews-next",
            prevEl: "#reviews-prev",
        },
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 30,
        pagination: {
            el: '#reviews-pagination',
        },
        breakpoints:{
           
           1024:{
            slidesPerView: 3
           }
            
        }

    })







    
    $('.li_title').click(function(){
        if( !$(this).hasClass('active') ){
            $(this).addClass('active')
            $(this).next().slideDown()

        }else{
            $(this).removeClass('active')
            $(this).next().slideUp()
        }

    })

    new Swiper('.tariffs_slider',{
        navigation: {
            nextEl: "#tariffs-next",
            prevEl: "#tariffs-prev",
        },
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 40,
        pagination: {
            el: '#tariffs-pagination',
        },
        breakpoints: {
            600:{
                slidesPerView: 1
            },
            1024:{
                slidesPerView: 3
            },
            1366:{
                slidesPerView: 4
            },
            1440:{
                slidesPerView: 4
            },
            1680:{
                slidesPerView: 5
            }
        }
    })

 
   

    $('.tryFreeBtn').click(function(e){
        e.preventDefault()
        $('.popUp_bg').fadeIn()
        $('.create_from_mail').fadeIn()
        $('.burger_menu').fadeOut()
    })
    $('.btn_close_modal, .popUp_bg').click(function(){
        $('.popUp_form').fadeOut()
        $('.popUp_bg').fadeOut()
    })


    $('.open_step2').click(function(){
        $('.create_from_mail').fadeOut()
        $('.create_from_mail_step2').fadeIn()
    })

    $('.open_steps3').click(function(){
        $('.create_from_mail_step2').fadeOut()
        $('.create_from_mail_step3').fadeIn()
    })



    $('.sms-input:first-child').focus();

    $('.sms-input').on('keydown', function(e) {
        let value = $(this).val();
        let len = value.length;
        let curTabIndex = parseInt($(this).attr('tabindex'));
        let nextTabIndex = curTabIndex + 1;
        let prevTabIndex = curTabIndex - 1;
        if (len > 0) {
            $(this).val(value.substr(0, 1));
            $('[tabindex=' + nextTabIndex + ']').focus();
        } else if (len == 0 && prevTabIndex !== 0) {
            $('[tabindex=' + prevTabIndex + ']').focus();
        }
    });


    $('.show_inputCode').click(function(){
        $('.promo_title').css("display","none")
        $('.input_code').fadeIn()
    })



   


    $('.check_politics').click(function(){
        $('.create_work_akk').attr('disabled', false)
        $('.create_work_akk').removeClass('disabled')
    })
    

    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
            $(this).find('.icon').css(
                {
                    'transform':'rotate(0deg)',
                    'transition': '.3s',
                }
            )
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
            $(this).find('.icon').css(
                {
                    'transform':'rotate(180deg)',
                    'transition': '.3s',
                }
            )
        }
    });
    
    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });
    
    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });





    $('.burger_btn').click(function(){
        $('.burger_menu').fadeIn()
    })
    $('.burger_menu .close_btn').click(function(){
        $('.burger_menu').fadeOut()
    })


    $('.burger_menu_content ul li a').click(function(){
        $('.burger_menu').fadeOut()
    })



    


    // $('.footer_form_btn').click(function(){
    //     if( $('.footer_inp').value == null || $('.footer_inp').value === '' ){
    //         $('.footer_inp').addClass('error')
    //         console.log("If")
    //     }else{
    //         if( $('.footer_inp').value ==! null || $('.footer_inp').value ==! '' ){
    //             $('.footer_inp').removeClass('error')
    //             console.log("elseIf")
    //         }
    //     }
       
    // })
    // let input = 

    // $('.footer_form_btn').click(function(){
    //     if( $('.footer_inp').val() !== '' ){
    //         $(this).removeClass('error')
    //     }else{
    //         $('.footer_inp').addClass('error')
    //     }
    // })
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    $('.footer_form_btn').click(function(){
        if( $('.inp_name').val() !== '' ){
            $('.inp_name').removeClass('error')
        }else{
            $('.inp_name').addClass('error')
        }
    })

    $('.footer_form_btn').click(function(){
        if( $('.inp_phone').val() !== '' ){
            $('.inp_phone').removeClass('error')
        }else{
            $('.inp_phone').addClass('error')
        }
    })

    $('.footer_form_btn').click(function(){
        if( $('.inp_mail').val() !== '' ){
            $('.inp_mail').removeClass('error')
            console.log('mail ok')
        }else{
            $('.inp_mail').addClass('error')
        }
    })

    $('.footer_form_btn').click(function(){
        if( $('.inp_txt').val() !== '' ){
            $('.inp_txt').removeClass('error')
        }else{
            $('.inp_txt').addClass('error')
        }
    })


   

  

    // const form = document.getElementById('form')
    // form.addEventListener('submit', formSend);

    // async function formSend(e){
    //     e.preventDefault();

    //     let error = formValidate(form);

        
    // }

    // function formValidate(form){
    //     let error = 0;

    //     let formReq = document.querySelectorAll('._req');

    //     for (let index = 0; index < formReq.length; index++) {
    //         const input = formReq[index];

    //         formRemoveError(input);

    //         if(input.classList.contains('_email')){
    //             if(emailTest(input)){
    //                 formAddError(input)
    //                 error++;
    //             }else{
    //                 if(input.value === ''){
    //                     formAddError(input)
    //                     error++;
    //                 }
    //             }
    //         }
            
    //     }

    // }






    // function formAddError(input){
    //     input.perentElement.classList.add('_error');
    //     input.classList.add('_error')
    // }

    // function formRemoveError(input){
    //     input.perentElement.classList.remove('_error');
    //     input.classList.remove('_error')
    // }

    // function emailTest(input){
    //     return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+{2,8})+$/.test(input.value)
    // }



   


    


})



