
import moment from "moment";
import 'moment/locale/ru'

 const renderComments = (data, container) => {
   container.innerHTML = '';
   data.forEach(comment => {
     moment.locale('ru');
     const commentTimePublication = moment.unix(comment.time).format('LL');

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

  };


export default renderComments;
