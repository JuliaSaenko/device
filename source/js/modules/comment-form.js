export default () => {

document.querySelector('#feedback').addEventListener('click', function(){
    document.querySelector('.comment-popup').classList.remove('hide');
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.comment-popup').classList.add('hide');
});
};


