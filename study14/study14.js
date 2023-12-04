// function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) {
//       yield i;
//     }
// }
  
// for(let value of generateSequence(1, 5)) {
//     console.log(value); 
// }

// async function* generateSequence(start, end) {

//     for (let i = start; i <= end; i++) {
  
//       await new Promise(resolve => setTimeout(resolve, 1000));
  
//       yield i;
//     }
  
// }
  
// (async () => {
//     let generator = generateSequence(1, 5);
//     for await (let value of generator) {
//       console.log(value); 
//     }
// })();

// let range = {
//     from: 1,
//     to: 5,
  
//     async *[Symbol.asyncIterator]() { // [Symbol.asyncIterator]: async function*()와 동일
//       for(let value = this.from; value <= this.to; value++) {
  
//         await new Promise(resolve => setTimeout(resolve, 1000));
  
//         yield value;
//       }
//     }
//   };
  
//   (async () => {
  
//     for await (let value of range) {
//         console.log(value); // 1, 2, 3, 4, 5
//     }
  
//   })();

const content1 = document.getElementById('myElement').innerHTML;
console.log("content = " + content1);
document.getElementById('myElement').innerHTML = 'New content1';
console.log("content = " + content1);

const content2 = $('#myElement').html();
console.log(content2);
$('#myElement').html('New content2');
console.log(content2);


$('#first').replaceWith('<div id="third">세 번째 div</div>');