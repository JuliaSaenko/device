// import commentForm from './comment-form';
// import sliders from './sliders';
// import services from './services';
// import contacts from './contacts';
// import aboutUs from './about-us';
import order from './order';
import addToCart from './addToCart';

let orderPage = {
  render : async () => {
    let view = `
<div class="order-popup-container modal modal--order">
  <h3>Ваш заказ</h3>
  <div class="popup-form order-form">
    <form class="input-text-wraper" name="popupform">
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
        <input type="text" name="adress" placeholder="адрес">
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
    </ul>
    <div class="finalPrice-container">
      <div>
        <span>Всего:</span>
        <span class="finalPrice"></span>
      </div>
      <button type="button" class="btn confirm-order-btn">Заказ подтверждаю</button>
    </div>
  </div>
</div>
        `;


    return view
  }
  , after_render: async () => {
    order();
    addToCart();
  }

};

export default orderPage;
