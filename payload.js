const Http = new XMLHttpRequest();
const url='https://www.google.com';
Http.open("GET", url);

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
};

Http.send();