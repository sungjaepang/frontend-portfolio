
/* ES6+ 핵심문법 공부 (with. claude.ai) */

// 1️⃣ let/const

/*  
* 옛날 함수 방식
    function greet(name) {
        return "안녕하세요 " + name
    }; 
* 2️⃣ 화살표 함수
    const greet = (name) => {
        return "안녕하세요 " + name 
    };
*/
// 화살표함수 축약식
const greet = (name) => "안녕하세요 " + name;
console.log(greet("철수"));

// 3️⃣ 템플릿 리터럴 -- 백틱(`) 사용 [키보드 숫자1 왼쪽 키]
const greet = (name) => `안녕하세요 ${name}`

// 4️⃣ 구조분해 할당





/* ---- */
/* 배열 메서드 - map, filter, reduce */

// 1️⃣ map - 배열 반환
    const numbers = [1, 2, 3, 4, 5]

    // 모든 숫자에 2를 곱하기
    const doubled = numbers.map((num) => num * 2)

    console.log(doubled) // [2, 4, 6, 8, 10]
    // 배열 각 요소를 변환해서 새 배열 만들기

    //✏️퀴즈5번 - 아래 배열에서 모든 이름 뒤에 "님"을 붙여서 새 배열 만들기
    const names = ["철수", "영희", "민준"]
    // 답
    const sir = names.map((str) => `${str}님`) // [철수님, 영희님, 민준님]

/* -------------------------------------
// 2️⃣ filter - 배열 필터링 */
    const numbers = [1, 2, 3, 4, 5, 6]

    // 짝수만 골라내기
    const evens = numbers.filter((num) => num % 2 === 0)

    console.log(evens) // [2, 4, 6]
    // 조건이 true인 요소만 골라서 새 배열 만들기
    
    // ✏️퀴즈6번 - 
    const products = [
        { name: "커피", price: 4500 },
        { name: "노트북", price: 1500000 },
        { name: "마우스", price: 25000 },
        { name: "껌", price: 500 },
    ] // 결과 : 노트북, 마우스만 남아야 함.

    const ilman = products.filter((item) => item.price > 10000)
    console.log(ilman);

/* -------------------------------------
// 3️⃣ reduce — 배열을 하나의 값으로 */
    const numbers = [1, 2, 3, 4, 5]

    // 모든 숫자 합산
    const total = numbers.reduce((acc, cur) => acc + cur, 0)
                                // acc — 누적값 (accumulator)
                                // cur — 현재 요소 (current)
                                // , 0 — 시작값
    console.log(total) // 15

    const products = [
        { name: "커피", price: 4500 },
        { name: "노트북", price: 1500000 },
        { name: "마우스", price: 25000 },
        { name: "껌", price: 500 },
    ]

    const total = products.reduce((acc, cur) => acc + cur.price, 0);
    console.log(total);