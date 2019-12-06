import '@babel/polyfill';
import 'whatwg-fetch';

var url = 'https://randomuser.me/api/?results=10';

fetch(url)
  .then(res => res.json())
  .then(json => {
    console.log(json)
    show_info(json);
  })
  .catch(err => console.log(err));

function show_info(data) {
  var html = '<ul>';

  for(var i in data.results) {
    var src = data.results[i].picture.large;
    html += `<li><img src="${src}" />`;
    html += `<li>name: ${data.results[i].name.first}</li>`;
    html += `<li>${data.results[i].cell}</li>`;
  }
  html += '</ul>';
  
  document.body.innerHTML = html;
}
