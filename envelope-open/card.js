(function() {
    function getID(id) {
        return document.getElementById(id);
    }

    var card = getID('card'),
        cardWrapper = getID('card-wrapper'),
        next = getID('hud_next'),
        back = getID('hud_previous'),
        timer = null,
        nextAction = 'next1',
        backAction = 'back1';


    next.addEventListener('click', function() {

        switch(nextAction) {
            case "next1":
                cardWrapper.setAttribute('class', 'move1');
                card.setAttribute('class', 'open-half');

                if (timer) clearTimeout(timer);

                timer = setTimeout(function() {

                    card.setAttribute('class', 'open-fully');

                    timer = null;

                }, 200);

                $('#hud_next').attr('class', 'next2');
                nextAction = 'next2';
                return false;
            break;

            case "next2":
                cardWrapper.setAttribute('class', 'move2');
                card.setAttribute('class', 'open-half2');

                if (timer) clearTimeout(timer);

                timer = setTimeout(function() {

                    card.setAttribute('class', 'open-fully2');

                    time = null;

                }, 200);

                backAction = 'back2';
                nextAction = 'End';
                return false;
            break;

        }

    });

    back.addEventListener('click', function(){
        switch(backAction){
            case "back1":
                cardWrapper.setAttribute('class', '');
                card.setAttribute('class', 'close-half');

                if (timer) clearTimeout(timer);

                timer = setTimeout(function() {

                    card.setAttribute('class', '');

                    timer = null;

                }, 200);

                backAction = 'back1';
                nextAction = 'next1';
                return false;
            break;

            case "back2":
                cardWrapper.setAttribute('class', 'move1');
                if (timer) clearTimeout(timer);
                timer = setTimeout(function() {

                    card.setAttribute('class', 'open-fully');

                    timer = null;

                }, 200);

                nextAction = 'next2';
                backAction = 'back1';

                return false;
            break;
        }
    })



    // next2.addEventListener('click', function() {
    //     if($)
    //     cardWrapper.setAttribute('class', 'move2');
    //     card.setAttribute('class', 'open-half2');
    //
    //     if (timer) clearTimeout(timer);
    //
    //     timer = setTimeout(function() {
    //
    //         card.setAttribute('class', 'open-fully2');
    //         next2.setAttribute('class', 'hide');
    //         next1.setAttribute('class', 'hide');
    //         back1.setAttribute('class', 'hide');
    //         back2.setAttribute('class', '');
    //
    //         time = null;
    //
    //     }, 200);
    //
    //     return false;
    //
    // })
    //
    // back1.addEventListener('click', function() {
    //     cardWrapper.setAttribute('class', '');
    //     card.setAttribute('class', 'close-half');
    //
    //     if (timer) clearTimeout(timer);
    //
    //     timer = setTimeout(function() {
    //
    //         card.setAttribute('class', '');
    //         next1.setAttribute('class', '');
    //         next2.setAttribute('class', 'hide');
    //         back1.setAttribute('class', 'hide');
    //         back2.setAttribute('class', 'hide');
    //
    //         timer = null;
    //
    //     }, 200);
    //
    //     return false;
    //
    // });
    //
    // back2.addEventListener('click', function() {
    //     cardWrapper.setAttribute('class', 'move1');
    //     if (timer) clearTimeout(timer);
    //     timer = setTimeout(function() {
    //
    //         card.setAttribute('class', 'open-fully');
    //         next1.setAttribute('class', 'hide');
    //         back1.setAttribute('class', '');
    //         next2.setAttribute('class', '');
    //         back2.setAttribute('class', 'hide');
    //
    //         timer = null;
    //
    //     }, 200);
    //
    //     return false;
    //
    // })



}());
