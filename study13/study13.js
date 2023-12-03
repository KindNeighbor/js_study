$.get('https://codingapple1.github.io/hello.txt')
  .then(function(data){
    console.log(data)
  })
  .catch(function(error){
    console.log('실패함')
  });

  $.get('https://codingapple1.github.io/price.json')
  .then(function(data){
    console.log(data)
  })
  .catch(function(error){
    console.log('실패함')
  });

  fetch('https://codingapple1.github.io/price.json')
  .then(res => res.json())
  .then(function(data){
    console.log(data)
  })
  .catch(function(error){
    console.log('실패함')
  });

  var products = [
    {id: 0, price: 70000, title: 'Blosoom Dress'},
    {id: 1, price: 50000, title: 'Springfield Shirt'},
    {id: 2, price: 60000, title: 'Black Monastery'}
  ]

  products.forEach((a, i)=>{
    var 템플릿 = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}</p>
    </div>`;
    $('.row').append(템플릿)
});

let cnt = 1;

$('#more').click(function(){
  const url = `https://codingapple1.github.io/js/more${cnt}.json`;
  $.get(url)
  .done((data)=>{      
    data.forEach((a, i)=>{
      var 템플릿 = 
        `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${data[i].title}</h5>
        <p>가격 : ${data[i].price}</p>
        </div>`;
        $('.row').append(템플릿)
      })  
    });
  if (cnt == 2) {
    $('#more').css("display", 'none');
  } else {
    cnt++;
  }
});

