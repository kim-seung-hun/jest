const fn = require("./fn");

// // 설명은 알아보기 쉽게
// test("2 더하기 3은 5야", () => {
//   // expect(검증할값).toBe(기대되는값)
//   // toBe 부분에서 사용되는 함수를 Matcher라고 한다 (toBe는 숫자 사용)
//   expect(fn.add(2, 3)).toBe(5);
// });

// test("3 더하기 3은 5가 아니야", () => {
//   expect(fn.add(3, 3)).not.toBe(5);
// });

////////////////////////////////////////////////////////////////////////////////

// test("2 더하기 3은 5야", () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

// test("2 더하기 3은 5야", () => {
//   expect(fn.add(2, 3)).toEqual(5);
// });

/////////////////////////////////////////////////////////////////////////////

// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("huni", 30)).toEqual({
//     name: "huni",
//     age: 30,
//   });
// });

// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   // toStrictEqual 엄격한 test >> 사용 권유
//   expect(fn.makeUser("huni", 30)).toStrictEqual({
//     name: "huni",
//     age: 30,
//   });
// });

////////////////////////////////////////////////////////////////////////////////

// // toBeNull
// // toBeUndefined
// // toBeDefined
// test("null은 null입니다.", () => {
//   expect(null).toBeNull();
// });

// // Boolean 값 판별
// // toBeTruthy
// // toBeFalsy
// test("비어있지 않은 문자열은 true 입니다.", () => {
//   expect(fn.add("hello", "world")).toBeTruthy();
// });

/////////////////////////////////////////////////////////////////////////////////

// // toBeGreaterThan 크다
// // toBeGreaterThanOrEqual 크거나 같다
// // toBeLessThan 작다
// // toBeLessThanOrEqual 작거나 같다

// test("ID는 10자 이하여야 합니다.", () => {
//   const id = "THE_BLACK";
//   expect(id.length).toBeLessThanOrEqual(10);
// });
// test("비밀번호는 4자리", () => {
//   const pw = "1234";
//   expect(pw.length).toBe(4);
// });

// // 자바스크립트는 이진법으로 계산되기 때문에 소수는 계산이 이상하게 됨
// // 그래서 소수점은 toBeCloseTo를 사용해서 값이 근사치인지 확인
// test("0.1 더하기 0.2 는 0.3", () => {
//   expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
// });

// // 정규표현식 확인하는 방법
// test("Hello world에 a 라는 글자가 있니?", () => {
//   expect("Hello world").toMatch(/h/i);
// });

// // 배열에서 특정요소가 있는지 확인하는 방법
// // toContain
// test("유저리스트에 Mike가 있나?", () => {
//   const user = "Mike";
//   const userList = ["Tom", "Mike", "Jane"];
//   expect(userList).toContain(user);
// });

// // 어떤 내용이든 상관없이 예외가 발생하면 패스시킴
// // 어떤 작업을 했을때 특정 에러를 발생시킴
// // toThrow
// test("이거 에러 나나요?", () => {
//   expect(() => fn.throwErr()).toThrow("xx");
// });

////////////////////////////////////////////////////////////////////////////////////////

// 비동기로 동작하는 코드 만들기

// // done이 호출되기 전까지 jest는 test를 끝내지 않고 기다림
// test("3초후에 이름은 Mike야", (done) => {
//   function cb(name) {
//     expect(name).toBe("Mike");
//     done();
//   }
//   fn.getName(cb);
// });

// Promise 사용할땐 return 해야함
// test("3초후에 나이는 30이야", () => {
// (1)
//   return fn.getAge().then((age) => {
//     expect(age).toBe(30);
//   });
// (2) resoles , rejects
//   return expect(fn.getAge()).resolves.toBe(30);
//   return expect(fn.getAge()).rejects.toMatch("error");
// });

// async/await [resoles rejects]
// test("3초후에 나이는 30이야", async () => {
//   const age = await fn.getAge();
//   expect(age).toBe(30);
//   await expect(fn.getAge()).resolves.toBe(30);
// });

/////////////////////////////////////////////////////////////

// test 전/후에 할 작업들에 대해 jest는 helper함수 제공

// let num = 10;

// num에 새로운 값이 계속 할당되고 있음
// 각각의 test를 시작하기 전에 num 값을 초기화 시켜주는 작업을 해야함
// beforeEach => test 전에 실행
// beforeEach(() => {
//   num = 0;
// });
// afterEach => test 후에 실행
// afterEach(() => {
//   num = 0;
// });

// test("0 더하기 1은 1이야", () => {
//   num = fn.add(num, 1);
//   expect(num).toBe(1);
// });
// test("0 더하기 2은 2이야", () => {
//   num = fn.add(num, 2);
//   expect(num).toBe(2);
// });

// test 시작 전/후에 작업 해야할 작업이 시간이 걸리는 작업이라면? (db연결 작업)
// let user;

// // beforeEach(async () => {
// //   user = await fn.connectUserDb();
// // });
// // afterEach(() => {
// //   return fn.disconnectDb();
// // });

// // 하지만, test 코드가 많게 된다면 각각의 test 코드 전/후 마다 실행됨
// // 최초 한번, 마지막 한번만 실행할땐 달라야함
// beforeAll(async () => {
//   user = await fn.connectUserDb();
// });
// afterAll(() => {
//   return fn.disconnectDb();
// });

// test("이름은 Mike", () => {
//   expect(user.name).toBe("Mike");
// });
// test("나이는 30", () => {
//   expect(user.age).toBe(30);
// });
// test("성별은 남성", () => {
//   expect(user.gender).toBe("male");
// });

// // car와 관련된 작업은 describe 내부에서만 작동
// describe("Car 관련 작업", () => {
//   let car;

//   beforeAll(async () => {
//     car = await fn.connectCarDb();
//   });
//   afterAll(() => {
//     return fn.disconnectCarDb();
//   });

//   test("이름은 z4", () => {
//     expect(car.name).toBe("z4");
//   });
//   test("브랜드는 BMW", () => {
//     expect(car.brand).toBe("BMW");
//   });
//   test("색깔은 빨강", () => {
//     expect(car.color).toBe("red");
//   });
// });

// 내부와 외부 작업 순서 잘 알아야함

// test.only는 이 test만 실행함
// test,skip은 이 test만 건너뛰고 실행

///////////////////////////////////////////////////////////////////////////////////

// mock함수 (테스트하기 위해 흉내만 내는 함수)

// userDB에 접근해서 user list를 select 해오는 작업이 필요
// 작성해야될 코드가 상당히 많아짐
// 외부요인의 영향을 많이 받음(네트워크 환경, DB 상태 등)
// 테스트에서 같은 코드는 같은 결과를 내는것이 중요

// const mockFn = jest.fn();

// mockFn();
// mockFn(1);

// test("함수는 2번 호출됩니다.", () => {
//   // calls은 함수가 총 몇번 호출되었는지, 무엇이 인수로 들어갔는지 배열형태로 알 수 있다.
//   //   console.log(mockFn.mock.calls);
//   expect(mockFn.mock.calls.length).toBe(2);
// });
// test("두번째로 호출된 함수에 전달된 첫번째 인수는 1이다.", () => {
//   expect(mockFn.mock.calls[1][0]).toBe(1);
// });

// function forEachAdd1(arr) {
//   arr.forEach((num) => {
//     mockFn(num + 1);
//   });
// }

// forEachAdd1([10, 20, 30]);

// test("함수 호출은 3번 됩니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(3);
// });
// test("전달된 값은 11,21,31 입니다.", () => {
//   expect(mockFn.mock.calls[0][0]).toBe(11);
//   expect(mockFn.mock.calls[1][0]).toBe(21);
//   expect(mockFn.mock.calls[2][0]).toBe(31);
// });

// const mockFn = jest.fn((num) => num + 1);

// mockFn(10);
// mockFn(20);
// mockFn(30);

// test("11 반환", () => {
//   expect(mockFn.mock.results[0].value).toBe(11);
// });
// test("21 반환", () => {
//   expect(mockFn.mock.results[1].value).toBe(21);
// });
// test("31 반환", () => {
//   expect(mockFn.mock.results[2].value).toBe(31);
// });

// 각각 다른 함수를 리턴 해줄수도 있다.

// const mockFn = jest.fn();

// mockFn.mockReturnValueOnce(true);
// mockFn.mockReturnValueOnce(false);
// mockFn.mockReturnValueOnce(true);
// mockFn.mockReturnValueOnce(false);
// mockFn.mockReturnValue(true);

// const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num));

// test("홀수는 1,3,5", () => {
//   expect(result).toStrictEqual([1, 3, 5]);
// });

// 비동기로 표현해 줄수도 있다.

// const mockFn = jest.fn();

// mockFn.mockResolvedValue({ name: "Mike" });

// test("받아온 이름은 Mike", () => {
//   mockFn().then((res) => {
//     expect(res.name).toBe("Mike");
//   });
// });

// fn을 mock킹 모듈로 만들어준다
// 그렇게 되면 fn.createUser는 호출되지 않고 mockReturnValue를 통해 nama만 반환된다.
// jest.mock("./fn");
// fn.createUser.mockReturnValue({ name: "Mike" });

// test("유저를 만든다", () => {
//   const user = fn.createUser("Mike");
//   expect(user.name).toBe("Mike");
// });

const mockFn = jest.fn();

mockFn(10, 20);
mockFn();
mockFn(30, 40);

test("한번 이상 호출?", () => {
  expect(mockFn).toBeCalled();
});
test("정확히 세번 호출?", () => {
  expect(mockFn).toBeCalledTimes(3);
});
test("10이랑 20 전달받은 함수가 있는가?", () => {
  expect(mockFn).toBeCalledWith(10, 20);
});
test("마지막 함수는 30이랑 40 받았는가?", () => {
  expect(mockFn).lastCalledWith(30, 40);
});
