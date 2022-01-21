// 1. string concatenation
// + 기호를 사용해서 문자와 문자를 연결시키거나
// 문자와 숫자를 연결시켜서 문자열로 만들 수도 있다.
// 또한, ``을 이용해 템플릿 리터럴을 사용할 수도 있다. $ 를 이용하면 변수값을 계산해서 string으로 포함한다.
// 리터럴의 장점은 줄바꿈을 하거나 중간에 특수기호 ' 등을 사용하여도 다 출력이 된다.

console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log(`ellie's 
book`);
console.log("ellie's \nbook");

// 2. 사칙연산

// 3. 증감 연산자

// 3-1 전위

let counter = 2;
const preIncrement = ++counter;
/*
이것은 다음과 같다.
counter = counter + 1;
postIncrement = counter;
*/
const preDecrement = --counter;

// 3-2 후위

const postIncrement = counter++;
/*
이것은 다음과 같다.
postIncrement = counter;
counter = counter + 1;
*/

const postDecrement = counter--;

// 4.

let x = 3;
let y = 6;

x += y;
x -= y;
x *= y;
x /= y;

// 5.

console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. || && !
/**
 * - || 하나라도 true이면 전체 결과가 true. 그래서 맨 앞이 true이면 계산을 멈춘다.
 * 심플한 애들이 앞에 와야함. 너무 복잡한 애들이 앞에오면 그걸 다 계산해야하니까 안좋음
 * - && 하나라도 false이면 전체 결과가 false. 얘도 무거울수록 뒤에 놔야 한다.
 * &&는 null인지 아닌지 검사할때에도 많이 사용한다.
 * - ! 반대의 값을 결과로 내준다.
 *
 */
const value1 = true;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || ckeck()}`);
console.log(`and: ${value1 && value2 && ckeck()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    console.log("hi");
  }
  return true;
}

console.log(!value1); // > false

console.log("----7.Equality");
// 7. Equality
const stringFive = "5";
const numberFive = 5;

// 두개의 ==을 쓰면 타입 변경해서 검사를 함. 정확하지 못하다.
// stringFive에서 '' 안의 값이 숫자니까 너는 결국 숫자야! 그러니까 둘이 똑같애! 이런 식인것이다.
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// 세개의 ===를 쓰면 타입이 다르면 다르다고 해줌. 웬만하면 이걸 쓰자.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object 사용할 때 더 주의해야함.

const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;

console.log(ellie1 == ellie2); //레퍼런스가 다르기 때문에
console.log(ellie1 === ellie2); //레퍼런스 값이 다르기 때문에
console.log(ellie1 === ellie3); // 같은 레퍼런스 값이기 때문에

console.log("퀴즈!");
console.log(0 == false); //false : 0, null, undefined, 빈 문자열은 false로 간주! > true
console.log(0 === false); // 0은 불리언 타입이 아니라 > false
console.log("" == false); // 빈 문자열은 false니까 > false
console.log("" === false); // 빈 문자열은 불리언 타입이 아니니까 > false
console.log(null == undefined); // null과 undefined는 같음 > true
console.log(null === undefined); // null과 undefined는 다른 타입이니까 > false

// 8. if , else if, else

const name = "coder";
if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unkwnon");
}

// 9. 삼항 연산자
// 조건 ? 참일 경우의 결과 : 거짓일 경우의 결과
console.log(name === "ellie" ? "yes" : "no");

// 10. switch문

const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
    console.log("Chrome is the best!");
    break;
  case "Firefox":
    console.log("Fire~~~~~");
    break;
  default:
    console.log("same all!");
    break;
}

/*
그런데 switch case문을 쓸 때,
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
    console.log("love you~");
    break;
  case "Firefox":
    console.log("love you~");
    break;
  default:
    console.log("same all!");
    break;
}

크롬과 파이어폭스 부분이 똑같은걸 출력하고 있으니까 그럴때에는

case "Chrome":
case "Firefox":
    console.log("love you~");
    break;

    이렇게 해주면 자동으로 크롬도 love you가 출력된다.
*/

// 11. Loops - while
// 조건이 false가 되기 전까지 계속 반복한다.

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
} // i>0 이 false가 되기 전까지 while문 안의 코드가 무한으로 반복된다.

//do while loop
//먼저 블럭을 실행한 후 조건이 맞는지 안맞는지 검사한다.

do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for문
// 3부터 0보다 클때까지 i-- 시킨다.
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

//중첩 for문
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// 퀴즈!
// Q1.
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`Q1: ${i}`);
}

//Q2.

for (let i = 0; i < 11; i++) {
  if (i === 8) {
    break;
  }
  console.log(`Q2: ${i}`);
}
