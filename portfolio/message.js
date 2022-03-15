var today = new Date();
var presentHour = today.getHours();
var message;

if (presentHour > 17) {
   message = 'Good evening, welcome to ';
} else if (presentHour > 11) {
   message = 'Good afternoon, welcome to ';
} else if (presentHour > 0) {
   message = 'Good morning, welcome to ';
} else { message = 'Welcome to ';
}
document.write('<h3>' + message + '<h3>');