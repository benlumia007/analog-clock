const HOURHAND = document.querySelector( "#hour" );
const MINUTEHAND = document.querySelector( "#minute" );
const SECONDHAND = document.querySelector( "#second" );


function run_clock() {
    var date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    console.log( "Hour: " + hour + " Minute: " + minute + " Second: " + second );

    let hourPosition = ( hour * 360 / 12 ) + ( minute * ( 360 / 60 ) / 12 );
    let minutePosition = ( minute * 360 / 60 ) + ( second * ( 360 / 60 ) / 60 );
    let secondPosition = second * 360 / 60;

    HOURHAND.style.transform = "rotate( " + hourPosition + "deg )";
    MINUTEHAND.style.transform = "rotate( " + minutePosition + "deg )";
    SECONDHAND.style.transform = "rotate( " + secondPosition + "deg )";
}

var interval = setInterval( run_clock, 1000 );
