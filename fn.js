const fn = {
  add: (a, b) => a + b,
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  throwErr: () => {
    throw new Error("xx");
  },
  /////////////////////////////////////////////////////////////////
  getName: (cb) => {
    const name = "Mike";
    setTimeout(() => {
      cb(name);
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
        // rej("error");
      }, 3000);
    });
  },
  /////////////////////////////////////////////////////////////////
  connectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: "Mike",
          age: 30,
          gender: "male",
        });
      }, 500);
    });
  },
  disconnectDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  connectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          brand: "BMW",
          name: "z4",
          color: "red",
        });
      }, 500);
    });
  },
  disconnectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  /////////////////////////////////////////////////
  createUser: (name) => {
    console.log("실제로 사용자가 생성되었습니다.");
    return {
      name,
    };
  },
};

module.exports = fn;
