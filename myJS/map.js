let myMap;
    ymaps.ready(init);
    function init () {
        myMap = new ymaps.Map('map', {
            center: [59.932468, 30.351810],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        });

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'WhiteTickets',
            balloonContent: 'Россия, Санкт-Петербург, Невский проспект, 88'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './myimg/logo.svg',
            // Размеры метки.
            iconImageSize: [50, 50],
        });
        myMap.geoObjects.add(myPlacemark);
    }