$(document).ready(function(){

    $('#main_form').bind("submit",checkForm);
    function checkForm(e){
        e.preventDefault()

        var el = document.getElementById('main_form')

        var name = el.name.value;
        var phone = el.phone.value;
        var mail = el.mail.value;
        var question = el.question.value
        var fail = "";
        var acept = "Форма заполнена";
        
        if(name == "" || phone == "" || mail == "" || question == "")
        fail = "Все поля должны быть заполнены корректно";

        else if(name.length <= 1 || name.length > 50  )
        fail = "Введите корректное имя";

        else if(phone.length < 12 || phone.length > 12)
        fail = "Номер введен некорректно"

        
        
        else if (question.length < 10)
        fail = "Вопрос введен некорректно"

        
       
        
        

        console.log("Name:" + " " + name + ";")
        console.log("Phone"  + " " + phone + ";");
        console.log("Mail"  + " " + mail + ";");
        console.log("Question"  + " " + question + ";");
        if( fail != ""){
            $("#error").html(fail)
            $("#acept").html("")
        }else{
            $("#acept").html(acept)
            $("#error").html("")
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            
        }
    }


    $('#main_form_two').bind("submit",checkFormTwo);

    function checkFormTwo(e){
        e.preventDefault()

        var el = document.getElementById('main_form_two');
        var mail = el.mail.value;
        var fail = "";
       

        if(mail == "" )
        fail = "Поле обязательное";
        else if(mail.length <= 3)
        fail = "Поле заполнено некорректно";

        if( fail != ""){
            $("#error_two").html(fail)
            
        }else{
            $('.create_from_mail').fadeOut()
            $('.create_from_mail_step2').fadeIn()
        
            
        }
    }




    $('#main_form_three').bind("submit",checkFormThree);

    function checkFormThree(e){
        e.preventDefault()

        var el = document.getElementById('main_form_three');
        var mail = el.mail.value;
        var smsNum1 = el.smsNum1.value;
        var smsNum2 = el.smsNum2.value;
        var smsNum3 = el.smsNum3.value;
        var smsNum4 = el.smsNum4.value;
        var fail = "";
        
        if(mail == "" )
        fail = "Все поля должны быть заполнены корректно";
        else if(mail.length <= 3)
        fail = "Поле заполнено некорректно";
   





        if( fail != ""){
            $("#error_three").html(fail)
            
        }else{
                      
            $('.create_from_mail_step2').fadeOut()
            $('.create_from_mail_step3').fadeIn()
            
        }
    }



    $('#main_form_four').bind("submit",checkFormFour);

    function checkFormFour(e){
        e.preventDefault()

        var el = document.getElementById('main_form_four');
        var name = el.name.value;
        var surname = el.surname.value;
        var pass = el.pass.value;
        var phone = el.phone.value;
        var nameCompany = el.nameCompany.value;
        var company = el.company.value;
        var acept = "Ваши данный были отправлены";
        var fail = "";
        

        if(name == "" || surname == "" || pass == "" ||  phone == "" || nameCompany == "" || company == "")
        fail = "Все поля должны быть заполнены корректно";
        
        else if(name.length <= 1 || name.length > 50  )
        fail = "Введите корректное имя";

        else if(surname.length <= 1 || surname.length > 50  )
        fail = "Введите корректную Фамилию";

        else if(pass.length <= 4 )
        fail = "Придумайте боле надежный пароль";

        else if(phone.length  > 12 || phone.length < 12)
        fail = "введите корректный номер";

        else if(nameCompany.length <= 1 )
        fail = "введите название компании";

        else if(company.length <= 1)
        fail = "Введите адресс компании";

        if( fail != ""){
            $("#error_four").html(fail)
            $("#acept_four").html("")
        }else{
            $("#error_four").html("")
            $("#acept_four").html(acept)
            setTimeout(() => {
                $('.create_from_mail_step3').fadeOut()
                $('.popUp_bg').fadeOut()
            }, 1000);    
            
            
            
        }
    }


    // function emailTest(mail){
    //     return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(mail.value)
    // }

})