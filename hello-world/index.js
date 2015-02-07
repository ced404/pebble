
simply.fullscreen(true);

simply.title('Hello World !!');
simply.vibe('short');


function geolocate () {
  navigator.geolocation.getCurrentPosition(function(pos) {
    var coords = pos.coords;
    var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
        'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
    ajax({ url: weatherUrl, type: 'json' }, function(data) {
      simply.text({ title: data.name, subtitle: data.main.temp });
    });
  });
}



simply.on('accelData', function (data) {
  
  var accelPoint = data.accels[0];
  
  simply.text({ title: 'accelPoint', 
                subtitle: 'x : ' + accelPoint.x + "\n"+ 'y : ' + accelPoint.y + "\n" + 'z : ' + accelPoint.z
  });
  
});


// click
simply.on('singleClick', function(e) {
  
  simply.text({ title: 'singleClick', 
                subtitle: 'You pressed the ' + e.button + ' button!' });
  
});

// long click
simply.on('longClick', function(e) {
  
  // simply.subtitle('You held the ' + e.button + ' button!');
  
  if( e.button == 'select' ) {
    geolocate();
  }
  
});

simply.on('accelTap', function(e) {
  simply.text({ title: 'accelTap' ,
                subtitle: 'You tapped across ' + (e.direction > 0 ? '+' : '-') + e.axis + '!' });
});
