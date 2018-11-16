const URL_API = 'https://swapi.co/api/films/?format=json';

function getDataBy (url) {
  return new Promise((resolve, reject) => {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.send();

	xhr.addEventListener('readystatechange', (...args) => {
	   if (xhr.readyState !== 4) return;

	   let contentType = xhr.getResponseHeader('Content-Type')
	   if (xhr.status === 200 && contentType === "application/json") {
	     let response = JSON.parse(xhr.responseText);
	   resolve(response);
}});});};
btn.onclick = function() {
	    getDataBy(URL_API).then((resp)=>{
	    	var arr = resp.results

	          	arr.forEach(movie => {
	      		let li = document.createElement("li");
	        	li.innerHTML = movie.title;
	        	document.querySelector('ul').appendChild(li); 

					li.onclick = function(){
	        			var allPlanets = arr.map(function(item){
	    				let li = document.createElement("li");

			        	li.innerHTML = item.planets;
			        	console.log(item.planets)
	        			document.querySelector('ul').appendChild(li);
	        		})
	        }; } ) }, err => {alert('ERROR') } ) }
//     	Promise.all(allPlanets).then(values => {console.log(values);
