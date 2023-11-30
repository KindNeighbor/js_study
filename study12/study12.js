var add = function () {
	var result = 0;
	for (var i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
};
var addPartial = add.bind(null, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10)); // 55 출력

function setUpListeners(buttons) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        console.log("Button " + i + " clicked");
      });
    }
  }
  
  var buttons = document.querySelectorAll('button');
  setUpListeners(buttons);

var outer = (function () {
    var a = 1;
    var inner = function () {
	    return a++;
    };
	return inner;
})();
console.log(outer());
outer = null;