console.log("first");

setTimeout(function() {
  console.log("second");
}, 0);

asynFunc(0);

Promise1(1).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
}).then((data) => {
  console.log("finally");
})

console.log("Third");

function Promise1(data) {
  return new Promise((resolve, reject) => {
    if (data === 1) {
      console.log("promise 함수 성공");
      resolve(1000);
    } else {
      console.log("promise 함수 실패");
      reject(0);
    }
  }) 
}

async function asynFunc(data) {
  try {
    await Promise1(data);
    console.log("asyncFunc");
  } catch (error) {
    console.log("asyncFail");
  }
}

function callbackFunction(data, onSuccess, onFailure) {
  if (data === 1) {
    console.log("콜백 함수 성공");
    onSuccess(1000);
  } else {
    console.log("콜백 함수 실패");
    onFailure(0);
  }
}

// 예제 사용
callbackFunction(
  1,
  function(successData) {
    console.log("콜백 함수 성공 결과:", successData);
  },
  function(failureData) {
    console.log("콜백 함수 실패 결과:", failureData);
  }
);

function examplePromise() {
  return new Promise((resolve, reject) => {
    const isSuccess = true;

    if (isSuccess) {
      resolve('작업 성공');
    } else {
      reject('작업 실패');
    }
  });
}

examplePromise()
  .then(result => {
    console.log('첫 번째 then:', result);
    // 여기서 에러 발생
    throw new Error('에러 발생!');
    return 1;
  })
  .then(result => {
    // 이 부분은 실행되지 않음
    console.log('두 번째 then:', result);
  })
  .catch(error => {
    console.error('catch에서 처리한 에러:', error);
    // catch에서 적절히 처리하고 다른 값을 반환할 수 있음
    return '에러 처리 완료';
  })
  .then(result => {
    // 이 부분은 catch에서 반환한 값이 전달됨
    console.log('catch 다음 then:', result);
  });

  function fetchData(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            return callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.send();
}

var result = fetchData(function(data) {
    console.log(data);
    return data;
});

console.log(result);  // undefined

function myAsyncFunction() {
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
          resolve("Hello, world!");
      }, 1000);
  });
}

myAsyncFunction().then(function(value) {
  console.log(value);  // "Hello, world!"
});

function delayFunc(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Delayed for ${ms} milliseconds`);
    }, ms);
  });
}

async function func() {
  const p1 = delayFunc(4000);
  const p2 = delayFunc(6000);
  await Promise.allSettled([p1, p2]);
  console.log("6 second");
  return delayFunc(1000);
}

// func 호출
func().then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);
});

function getApple(){
  return new Promise( (resolve, reject) => {
    setTimeout(() => resolve("apple"), 1000);
  })
}

function getBanana(){
  return new Promise( (resolve, reject) => {
    setTimeout(() => resolve("banana"), 1000);
  })
}

async function getFruites1() {
  let a = await getApple(); 
  let b = await getBanana(); 
  console.log(`${a} and ${b}`); 
}

async function getFruites2(){

  let getApplePromise = getApple();  
  let getBananaPromise = getBanana();
  
  console.log(getApplePromise)
  console.log(getBananaPromise)
  
  let a = await getApplePromise; 
  let b = getBananaPromise; 
  
  console.log(`${a} and ${b}`);
}

getFruites1();
getFruites2();

let a = +"100";
console.log(a); 

let b = +"ABC";
console.log(b); 

async function requestData(url) {
  try {
      let response = await fetch(url);
      console.log(response);
      if (!response.ok) {
          throw new Error("HTTP error " + response.status);
      }
      return await response.json();
  } catch (error) {
      console.error("요청이 실패했습니다 : ", error);
  }
}

// 첫 번째 요청
async function getData() {
  try {
      let data1 = await requestData('https://jsonplaceholder.typicode.com/posts/1');
      console.log("첫 번째 요청 성공 : ", data1);

      // 두 번째 요청
      let data2 = await requestData('https://jsonplaceholder.typicode.com/posts/1');
      console.log("두 번째 요청 성공 : ", data2);
  } catch (error) {
      console.error("요청이 실패했습니다 : ", error);
  }
}

getData();