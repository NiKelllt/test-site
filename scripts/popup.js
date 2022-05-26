window.onload = main;

function main() {
    const btn = document.body.getElementsByClassName('top-button')[0];
    btn.addEventListener('click', showPopup);
    let darkBg = document.createElement('div');
    darkBg.classList.add('dark-bg');
    window.addEventListener('scroll', movePopup);
    darkBg.appendChild(addCardForm());
    
    
    
    function showPopup(event){
        document.body.appendChild(darkBg);
        let sendButton = document.getElementsByClassName('site-form_button-input')[0];
        let closeButton = document.getElementsByClassName('site-form_closing-cross')[0];
        console.log(sendButton);
        sendButton.addEventListener('click', sendForm)
        closeButton.addEventListener('click', hidePopup)
        
    }
    
    async function sendForm(event){
        event.preventDefault();
        
        let name = document.getElementsByClassName('site-form_name-input')[0];
        let email = document.getElementsByClassName('site-form_email-input')[0];
        let profession = document.getElementsByClassName('site-form_state-input')[0];
        let agreement = document.getElementsByClassName('site-form_checkbox')[0];
        
        let json = JSON.stringify({
            name: name.value,
            email: email.value,
            profession: profession.value,
            agreement: agreement.value,
        })
        
        console.log(json);
        alert('ok')
        
        const response = await fetch('form_handler.php', {
            method: 'POST',  
            body: json,
            headers: {
                'Content-type': 'application/json',
            }
        })
    }
    
    function hidePopup(event){
        document.body.removeChild(darkBg);
    }
    
    function movePopup(event){
        darkBg.style.top = window.scrollY + 'px';
    }
    
    function addCardForm() {
        const form = document.createElement('div');
        form.classList.add('white-back');
        form.innerHTML = 
            `<div class="form_card-size">
                <img class="site-form_closing-cross" alt="close popup" src="images/Closing-cross.svg" />
                <img class="form_image" alt="welcome illustr" src="images/Welcome.png" />
                <p class="form_header">Записаться на курс</p>
                <form class="site-form" method="post" action="">
                    <input class="site-form_name-input" required type="text" name="%name%" placeholder="Ваше имя">
                    <input class="site-form_email-input" required type="text" name="%email%" placeholder="Email">
                    <select class="site-form_state-input" required name="%state%" >
                        <option style="display: none" value="Деятельность">Деятельность</option>
                        <option value="Программист">Программист</option>
                        <option value="Дизайнер">Дизайнер</option>
                        <option value="Маркетолог">Маркетолог</option>
                    </select>
                    <div class="site-form_chekbox-input">
                        <input class="site-form_checkbox" type="checkbox" name="formSubmit" value="Yes">
                        <label class="text_for_eth">Согласен получать информационные материалы о старте курса</label>
                    </div>
                    <button class="site-form_button-input" type="button"><span class="button-text">Записаться на курс</span></button>
                </form>
            </div>`;
        
        return form;
    }
}

