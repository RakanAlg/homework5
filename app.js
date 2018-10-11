var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users/');
request.onload = function () {
  var data = JSON.parse(this.response);
var copy=[];
  data.forEach(user => {
  copy.push(user.email);
});
copy.sort();
var email = document.getElementById('demo');
email.innerHTML=copy.join(" ");
console.log(copy);

}
request.send();

fetch('https://jsonplaceholder.typicode.com/users/').then(response => {
  return response.json();
}).then(data => {
  var temp=[];
  data.forEach(user => {
    temp.push(user.name);
});
var name = document.getElementById('username');
name.innerHTML=temp.sort(function(a, b){
  return a.length - b.length;
});
}).catch(err => {

});
