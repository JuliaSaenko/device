// import commentForm from './comment-form';
// import sliders from './sliders';
// import services from './services';
// import contacts from './contacts';
// import aboutUs from './about-us';
import order from './order';

let orderPage = {
  render : async () => {
    let view = `

<div class="order-popup-container">
  <h3>Ваш заказ</h3>

  <div class="popup-form order-form">
    <form name="popupform"  action="#" class="input-text-wraper">

      <label for="user_name" class="popup-label">
        Ваше имя:
        <input type="text" name="user_name" placeholder="Имя Фамилая">
      </label>
      <label for="tel" class="popup-label">
        Номер телефона:
        <input type="tel" name="tel" placeholder="+38 000 00 00">
      </label>
      <label class="popup-label">
        Ваш email:
        <input type="text" name="email" placeholder="example@mail.com">
      </label>
      <label for="city" class="popup-label">
          Укажите город:
        <select id="city" name="city_select">
          <option value="0">...</option>
          <option value="1">Киев</option>
          <option value="2">Харьков</option>
          <option value="3">Одесса</option>
          <option value="4">Львов</option>
          <option value="5">Днепр</option>
        </select>
      </label>
      <label for="delivery-option" id="delivery-option" class="popup-label hide">
            Способ доставки:
        <select name="delivery">
          <option value="0">...</option>
          <option value="1">Отделение НП</option>
          <option value="2">Адресная доставка</option>
        </select>
      </label>
      <label for="NP-number" class="popup-label hide" id="NP-number"  placeholder="1 - 130">
        Отделение НП:
        <input type="number" name="number" min="1">
      </label>
      <label class="popup-label hide" id="user-adress">
        Адрес:
        <input type="text" name=email" placeholder="адрес">
      </label>
      <label for="payment-option" id="payment-option" class="popup-label hide">
        Способ оплаты:
        <select name="payment_option">
          <option value="0">...</option>
          <option value="1">Наличными при получении</option>
          <option value="2">Перевод на карту</option>
        </select>
      </label>
      <label for="creditcard" class="popup-label hide" id="credit-card">
        Номер карты:
        <input type="text"  name="creditcard" placeholder="XXXX XXXX XXXX XXXX">
      </label>

    </form>
    <ul class="products-list-in-cart">   <!-- тут список товаров в корзине -->
 

      <li>
        <div class="cart__product">
            <div class="cart__product-img">
              <img src="#" width="130" height="130">
            </div>
            <div class="cart__product-info">
              <div class="cart__product-name product-name"> товар 1 </div>
              <div class="amount-of-produts">
                <span class="amount">Количество: </span>
                <button class="btnMinus">-</button>
                <span class="number-of-amount">1</span>
                <button class="btnPlus">+</button>
                <p class="cart__product-price">Цена: <span class="product-price">2000</span></p>
              </div>
              <div class="delete_item">Убрать из корзины</div>
            </div>
          </div>
      </li>

    </ul>
    <div class="finalPrice-container">
      <div>
        <span>Всего:</span>
        <span class="finalPrice">2000</span>
      </div>

      <button type="button" class="btn confirm-order-btn">Заказ подтверждаю</button>
    </div>

  </div>

<!--  <button disabled type="button " class="cart__close modal__close"></button>-->
</div>



        `;


    return view
  }
  , after_render: async () => {
    order();
  }

};

export default orderPage;
