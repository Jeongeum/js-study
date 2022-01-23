"use strict";

// variable : 변수 -> 변경될 수 있는 값
// let : ES6에서 추가
let name = `ellie`;
console.log(name); // > ellie
name = `hello`;
console.log(name); // > hello

//  2. 블록 스코프
let globalName = "global name"; //global 변수는 어플리케이션 시작부터 끝날 때까지 메모리에 있기 때문에 최소한으로 쓰는 것이 좋다.
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
}

console.log(globalName);
console.log(name);

// var는 쓰지마!
// var hoisting : 어디에 선언했는지에 상관없이 제일 위로 선언을 끌어 올리는 것
console.log(age); // > undefined
age = 4;
console.log(age); // > 4
var age;

// 심지어 var는 블록 스코프도 없다.

{
  age1 = 5;
  var age1;
}
console.log(age1); // 블록 안에서 선언해도 어디서든 사용 가능하다.

// 3. constant
// 한번 할당하면 절대 값이 바뀌지 않는다.

const max = 5;
//max = 11; // > error

/** const 를 사용하는 이유
 * 보안 : 해커들이 값을 계속 변경할 수 있는데 이를 방지할 수 있다.
 * 스레드 안전성 : 프로세스 안에서 다양한 스레드가 동시에 실행되는데 동시에 변수에 접근해서 값을 변경할 수 있는데 이게 불가능하도록 해야한다.
 * 인간의 실수 감소
 */

//정리 : let, const

/** Variable, rw
 * 메모리에 읽고 쓰기가 가능하다.
 *
 * constant , r
 * 읽기만 가능하다.
 *
 * 웬만해서는 const로 쓰는것이 좋은 습관이다.
 *
 * 메모리에 값이 저장되는 방식
 *
 * - primitive : 값 자체가 메모리에 저장된다.
 * - object :  너무 커서 메모리에 다 저장이 안된다. 오브젝트를 가리키는 레퍼런스가 메모리에 저장된다.
 *             레퍼런스를 통해 실제 메모리가 저장된 곳을 가리킨다.
 *
 *
 * 데이터 타입
 * - immutable : 데이터 자체를 절대 변경 불가
 * - mutable : 변경이 가능한 데이터 타입 -> object
 */
console.log("-------------");
// 4. 데이터 타입

// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

//number
const count = 17;
const size = 17.1;
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = `not a number` / 2;

console.log(`value: ${count}, type:${typeof count}`);
console.log(`value: ${size}, type:${typeof size}`);
console.log(`value: ${infinity}, type:${typeof infinity}`);
console.log(`value: ${negativeInfinity}, type:${typeof negativeInfinity}`);
console.log(`value: ${nAn}, type:${typeof nAn}`);

//string
const hello = "hello";
const greeting = hello + "name my is Lee";
console.log("value: " + hello + " type: " + typeof hello);
console.log(`value: ${hello}, type: ${typeof hello}`); //템플릿 리터럴이 훨씬 편하다.

//boolean (true/false)
const t = true;
const test = 3 < 1; // false
console.log(`value: ${t}, type: ${typeof t}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null (없다 텅텅비어있다)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined (선언은 되어있지만 아무것도 값이 지정되어있지 않다)
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol
//개체에 대한 고유 식별자를 생성
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // > false : 동일한 string을 작성해도 다른 symbol로 만들어짐
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object
const stable_sound = { name: "Lee", age: 24 };
// sound 자체는 const 로 정의되어있기 때문에 다른 object로 할당이 불가능.
// 하지만 그 안에 있는 name과 age 변수는 다른값으로 할당이 가능하다.
console.log(stable_sound);
stable_sound.age = 23;
console.log(stable_sound);

// Dynamic typing
let text = `hello`;
console.log(text.charAt(0)); // > h
console.log(`value: ${text}, type: ${typeof text}`); // > type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // > type: number
text = `7` + 5;
console.log(`value: ${text}, type: ${typeof text}`); // > type: string
text = `8` / `2`;
console.log(`value: ${text}, type: ${typeof text}`); // > type: number
// console.log(text.charAt(0)); // > error : Uncaught TypeError: text.charAt is not a function
// js에서는 런타임시 타입이 정해지는데 타입이 자꾸만 변하게 되니까 에러가 발생한다.
// 그래서 나온 것이 typescript이다.
