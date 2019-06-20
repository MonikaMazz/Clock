setInterval(function () {
  // date format
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var date = year + "/" + month + "/" + day;
  var dates = document.getElementById('dates');
  dates.innerHTML = date;

  var hour = d.getHours();
  var minute = d.getMinutes();
  var second = d.getSeconds();
  var hours = hour + ":" + minute + ":" + second;
  var time = document.getElementById('time');
  time.innerHTML = hours;

  var hourAngle = ((hour + minute / 60 + second / 3600) / 12) * 360;
  var minuteAngle = ((minute + second / 60) / 60) * 360;
  var secondAngle = (second / 60) * 360;

  document.getElementById('second').style.transform = `rotate(${secondAngle}deg)`;
  document.getElementById('minute').style.transform = `rotate(${minuteAngle}deg)`;
  document.getElementById('hour').style.transform = `rotate(${hourAngle}deg)`;

}, 1000);

for (i = 0; i < 12; i++) {
  var lead = document.getElementById("lead");
  var number = i + 1;
  numberAngle = (i + 1) / 12 * 360;
  var numberElement = document.createElement('div');
  var textnode = document.createElement('p');
  numberElement.appendChild(textnode);
  numberElement.className = "number"
  textnode.innerHTML = number;
  numberElement.style.transform = `rotate(${numberAngle}deg)`;
  textnode.style.transform = `rotate(-${numberAngle}deg)`;
  lead.appendChild(numberElement);
};