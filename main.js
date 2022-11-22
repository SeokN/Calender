var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var today = date.getDate();
var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 
if(year % 400 == 0 || year % 4 == 0) {
    days[1] = 29;
    }
else if (year % 100 == 0) {
    days[1] = 28;
    }
var lastDate = days[date.getMonth()];
var startMonthDay = new Date(year, date.getMonth(), 1);
var startDay = startMonthDay.getDay();

var weekCount = Math.ceil((startDay + lastDate) / 7);

var html = "";
var htmlDay = "";
var htmlYM = "";
var day = 1;
var pos = 0;

htmlYM += "<table border=\"0\"> <th> <pre> <h1>             " + year + "년 " + month + "월  </h1> </pre> </th> </table>"

htmlDay += "<table border=\"0\"> <td border=\"1\" width=\"70\" height=\"70\"> <center> <p style=\"color:red\"> 일 </p> </center></td> <td border=\"1\" width=\"70\" height=\"70\"> <center>월</center></td> <td border=\"1\" width=\"70\" height=\"70\"> <center>화</center></td> <td border=\"1\" width=\"70\" height=\"70\"> <center>수</center></td> <td border=\"1\" width=\"70\" height=\"70\"> <center>목</center></td> <td border=\"1\" width=\"70\" height=\"70\"> <center>금</center></td> <td border=\"1\" width=\"70\" height=\"70\"> <center> <p style=\"color:blue\"> 토 </p> </center></td>";


html += "<table border=\"0\">";
for (var i = 0; i < weekCount; i++) {
    html += "<tr>";
    for (var j = 0; j < 7; j++) {
        if (pos != startDay) {
            html += "<td border=\"1\" width=\"70\" height=\"70\">";
            pos++
        }
        else if (pos == startDay && day <= lastDate) {
            if (j == 0) {
                html += "<td border=\"1\" width=\"70\" height=\"70\"> <center> <p style=\"color:red\">" + day + "</p> </center>";
                day++;
                startDay++;
                pos++;
            }
            else if (j == 6){
                html += "<td border=\"1\" width=\"70\" height=\"70\"> <center> <p style=\"color:blue\">" + day + "</p> </center>";
                day++;
                startDay++;
                pos++;
            } 
            else {
                html += "<td border=\"1\" width=\"70\" height=\"70\"> <center>" + day + "</center>";
                day++;
                startDay++;
                pos++;
            }
        }
        else {
            html += "<td border=\"1\" width=\"70\" height=\"70\">";
            pos++
        }
    }
    html += "</tr>";
}
html += "</table>";

document.querySelector('.dates').innerHTML = htmlYM + htmlDay + html;