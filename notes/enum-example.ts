enum GRADE {
  A = 1,
  B = 2,
  C = 3,
  D = 4,
  E = 5,
  F = 6,
}

const resultG = (grade: GRADE) => {
  if (grade === GRADE.A) {
    return "A";
  }
  if (grade === GRADE.B) {
    return "B";
  }
  if (grade === GRADE.C) {
    return "C";
  }
  if (grade === GRADE.D) {
    return "D";
  }
  if (grade === GRADE.E) {
    return "E";
  }
  if (grade === GRADE.F) {
    return "F";
  }
  return "Invalid grade";
};

console.log(`R`, resultG(6));
console.log(`R`, resultG(GRADE.F));

const A = 1;
const B = 2;
const C = 3;
const D = 4;
const E = 5;
const F = 6;

const result2 = (grade: number) => {
  if (grade === A) {
    return "A";
  }
  if (grade === B) {
    return "B";
  }
  if (grade === C) {
    return "C";
  }
  if (grade === D) {
    return "D";
  }
  if (grade === E) {
    return "E";
  }
  if (grade === F) {
    return "F";
  }
  if (grade > 6) {
    return "Invalid grade";
  }
  return "Invalid grade";
};

console.log(`R`, result2(1000000));

const resultA = <T>(grade: T) => {
  return grade;
};

const res1 = resultA<GRADE>(7);
const res2 = resultA<number>(7);
