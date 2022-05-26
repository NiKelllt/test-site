<div class="form_card-size">
    <img class="form_image" alt="welcome illustr" src="images/Welcome.png" />
    <p class="form_header">Записаться на курс</p>
    <form class="site-form" method="post" action="form_handler.php">
        <input class="site-form_name-input" required type="text" name="%name%" placeholder="Ваше имя">
        <input class="site-form_email-input" required type="text" name="%email%" placeholder="Email">
        <select class="site-form_state-input" required name="%state%" >
            <option style="display: none" value="Деятельность">Деятельность</option>
            <option value="Программист">Программист</option>
            <option value="Дизайнер">Дизайнер</option>
            <option value="Маркетолог">Маркетолог</option>
        </select>
        <div class="site-form_chekbox-input">
            <input type="checkbox" name="formSubmit" value="Yes">
            <label class="text_for_eth">Согласен получать информационные материалы о старте курса</label>
        </div>
        <button class="site-form_button-input" type="submit"><span class="button-text">Записаться на курс</span></button>
    </form>
</div>
