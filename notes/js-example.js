class Demo {
  constructor() {}

  name(params) {
    return params;
  }
}

const Demo2 = {
  name: (params) => params,
};

console.log(`Class `, typeof new Demo());
console.log(`Object `, typeof Demo2);

const teacher = {
  id: 1,
  name: "Mr. X",
  address: "BKT",
  getProfile: () => {},
  experience_in_yr: 5,
};
console.log(`teacher.address`, teacher.experience_in_yr);

const baby = {
  id: 1,
  name: "Mr. Xs",
  address: "BKT",
  getProfile: () => {},
};
console.log(`teacher.address`, baby.experience_in_yr);

const student = {
  id: 1,
  name: "Mr. Xs",
  address: "BKT",
  getProfile: () => {},
};
console.log(`teacher.address`, student.experience_in_yr);
const getSalary = (student) => {
  if (student.experience_in_yr) {
    return student.experience_in_yr * 1000;
  } else return 0;
};
