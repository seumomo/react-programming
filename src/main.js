// 함수를 변수에 할당

// 함수를 인수로 전달받을 수 있다.
const greetCurry = message => name => `${name} ${message}!`;

const morningGreet = greetCurry('안녕! 좋은 아침이야!');
const eveningGreet = greetCurry('맛있는 저녁 먹으러 가자!');

console.log(typeof morningGreet);
console.log(typeof morningGreet('야무'));
