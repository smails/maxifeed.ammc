if (document.querySelectorAll('#map-1').length) {
  ymaps.ready(() => {
    const myMap = new ymaps.Map('map-1', {
      center: [55.692318, 37.347485],
      zoom: 16,
      controls: [],
    });
    const mark1 = new ymaps.Placemark(myMap.getCenter(), {}, {
      iconLayout: 'default#image',
      iconImageHref: 'icon/icon-map-1.png',
      iconImageSize: [40, 50],
      iconImageOffset: [-20, -65],
    });


    myMap.geoObjects
      .add(mark1)
  });
}
if (document.querySelectorAll('#map-2').length) {
  ymaps.ready(() => {
    const myMap = new ymaps.Map('map-2', {
      center: [54.863513, 38.557650],
      zoom: 17,
      controls: [],
    });
    const mark1 = new ymaps.Placemark(myMap.getCenter(), {}, {
      iconLayout: 'default#image',
      iconImageHref: 'icon/icon-map-2.png',
      iconImageSize: [40, 50],
      iconImageOffset: [-20, -65],
    });


    myMap.geoObjects
      .add(mark1)
  });
}