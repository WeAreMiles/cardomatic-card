(function() {
  function getID(id) {
    return document.getElementById(id);
  }

  var card = getID('card'),
      cardWrapper = getID('card-wrapper'),
      next1 = getID('next1'),
      next2 = getID('next2'),
      back1 = getID('back1'),
      back2 = getID('back2'),
      timer = null;


  next1.addEventListener('click', function () {
    cardWrapper.setAttribute('class', 'move1');
    card.setAttribute('class', 'open-half');

    if (timer) clearTimeout(timer);

    timer = setTimeout(function () {

      card.setAttribute('class', 'open-fully');
      next1.setAttribute('class', 'hide');
      back1.setAttribute('class', '');
      next2.setAttribute('class', '');
      back2.setAttribute('class', 'hide');

      timer = null;

    }, 200);

    return false;

  });

  next2.addEventListener('click', function () {
      cardWrapper.setAttribute('class', 'move2');
      card.setAttribute('class', 'open-half2');

      if (timer) clearTimeout(timer);

      timer = setTimeout(function () {

          card.setAttribute('class', 'open-fully2');
          next2.setAttribute('class', 'hide');
          next1.setAttribute('class', 'hide');
          back1.setAttribute('class', 'hide');
          back2.setAttribute('class', '');

          time = null;

      }, 200);

      return false;

  })

  back1.addEventListener('click', function () {
    cardWrapper.setAttribute('class', '');
    card.setAttribute('class', 'close-half');

    if (timer) clearTimeout(timer);

    timer = setTimeout(function () {

      card.setAttribute('class', '');
      next1.setAttribute('class', '');
      next2.setAttribute('class', 'hide');
      back1.setAttribute('class', 'hide');
      back2.setAttribute('class', 'hide');

      timer = null;

    }, 200);

    return false;

  });

  back2.addEventListener('click', function (){
      cardWrapper.setAttribute('class', 'move1');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {

        card.setAttribute('class', 'open-fully');
        next1.setAttribute('class', 'hide');
        back1.setAttribute('class', '');
        next2.setAttribute('class', '');
        back2.setAttribute('class', 'hide');

        timer = null;

      }, 200);

      return false;
      
  })



}());
