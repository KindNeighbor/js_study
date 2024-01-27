$(document).ready(function() {
    $("#btn1").click(function() {
        executePromises();
    });

    $("#btn2").click(async function() {
        executeAsyncRequests();
    });

    $("#btn3").click(async function() {
        btn3();
    });

    $("#btn5").click(async function() {
        btn3();
    });
})

function executePromises() {
    var testPromise = new Promise(function(resolve, reject) {
      $.get('https://codingapple1.github.io/hello.txt').done(function(result) {
        resolve(result);
      }).fail(function(error) {
        reject(error);
      });
    });

    testPromise.then(function(result) {
      console.log(result);

      var testPromise2 = new Promise(function(resolve, reject) {
        $.get('https://codingapple1.github.io/hello2.txt').done(function(result) {
          resolve(result);
        }).fail(function(error) {
          reject(error);
        });
      });

      return testPromise2;

    }).then(function(result) {
      console.log(result);
    });
}

async function executeAsyncRequests() {

    var result1 = await $.get('https://codingapple1.github.io/hello.txt');
    console.log(result1);

    var result2 = await $.get('https://codingapple1.github.io/hello2.txt');
    console.log(result2);
}


function fetchData(url) {
    return new Promise(function(resolve, reject) {
      $.get(url)
        .done(function(result) {
          resolve(result);
        })
        .fail(function(error) {
          reject(error);
        });
    });
  }
  
function btn3() {
  fetchData('https://codingapple1.github.io/hello.txt')
    .then(function(result1) {
      console.log(result1);
      return fetchData('https://codingapple1.github.io/hello2.txt');
    })
    .then(function(result2) {
      console.log(result2);
    })
    .catch(function(error) {
      console.error(error);
    });
}

var testPromise3 = new Promise(function(resolve, reject) {
    document.getElementById('btn4').addEventListener('click', function(){
        resolve();
    });
})

async function btn4(){
    try {
        var 결과 = await testPromise3;
        console.log('성공했으요')
    } catch(error) {
        console.error("실패!")
    }
}

btn4();

function fetchData2(url, successCallback, errorCallback) {
    $.ajax({
    url: url,
    method: 'GET',
    success: function(result) {
      successCallback(result);
    },
    error: function(error) {
      errorCallback(error);
    }
  });
  }
  
  function executePromises1(callback) {
    fetchData2('https://codingapple1.github.io/hello.txt', function(result1) {
      console.log(result1);
  
      fetchData2('https://codingapple1.github.io/hello2.txt', function(result2) {
        console.log(result2);
  
        // 최종 콜백 호출
        if (callback) {
          callback();
        }
      }, function(error) {
        console.error(error);
      });
  
    }, function(error) {
      console.error(error);
    });
  }
  
  executePromises1(function() {
    console.log('모든 작업 완료');
  });