//import renderElement from './utils';
import moment from "moment";
import 'moment/locale/ru'
//export default () => {
 const renderComments = (data, container) => {
   container.innerHTML = '';
   data.forEach(comment => {
     moment.locale('ru')
     const commentTimePublication = moment.unix(comment.time).format('LL');
     //console.log(test);
     console.log(comment.time);
     console.log(commentTimePublication);

     const commentContent = `
          <div class="reviews__heading">
            <b class="reviews__author">${comment.author}</b>
            <p class="reviews__publication">Опубликовано <span class="reviews__time">${commentTimePublication}</span></p>
          </div>
          <div class="review__content">
              <blockquote>${comment.text}</blockquote>
          </div>`;

      let newComment = document.createElement(`li`);
       newComment.setAttribute('class', `reviews__item`);
       newComment.innerHTML = commentContent;
      container.appendChild(newComment);
   });

    //const newCommnet = renderElement('li', 'reviews__item', commentContent);

    //return renderElement('li', 'reviews__item', commentContent);
  };
//};

export default renderComments;
