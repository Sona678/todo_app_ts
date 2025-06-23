// Object
interface IPerson {
  id: number;
  name: string;
  address: string;
  getProfile: () => void;
}

interface IJobPerson extends IPerson {
  experience_in_yr?: number;
}

interface IStudent extends IPerson {
  school: string;
  symbol_num: string;
  class_room: string;
}

interface IBaby extends IPerson {
  last_vaccine: Date;
  vaccine_name: string[];
}

const teacher: IJobPerson = {
  id: 1,
  name: "Mr. X",
  address: "BKT",
  getProfile: () => {},
  experience_in_yr: 5,
};
console.log(`teacher.address`, teacher.experience_in_yr);

const student: IStudent = {
  id: 1,
  name: "Mr. Xs",
  address: "BKT",
  getProfile: () => {},
  school: "",
  symbol_num: "",
  class_room: "",
};
console.log(`teacher.address`, student);

const baby: IBaby = {
  id: 1,
  name: "Mr. Xs",
  address: "BKT",
  getProfile: () => {},
  last_vaccine: new Date(),
  vaccine_name: [],
};
console.log(`teacher.address`, baby);
// const getSalary = (person: IPerson) => {
//   if (person.experience_in_yr) {
//     return person.experience_in_yr * 1000;
//   } else return 0;
// };

// appending interface
interface A {
  x: number;
}
interface A {
  y: number;
}
interface A {
  z: number;
}
const a1: A = { x: 1, y: 2 }; // Not Works!
const a2: A = { x: 1, y: 2, z: 3 }; // Works!

console.log({ a1, a2 });

const s2: Partial<IStudent> = {
  name: "Mr. Xs",
  address: "BKT",
  getProfile: () => {},
  school: "",
  symbol_num: "",
  class_room: "",
};

interface IStudentAdd extends Omit<IStudent, "id"> {}

const newStudent: IStudentAdd = {
  name: "Mr. Xs",
  address: "BKT",
  getProfile: () => {},
  school: "",
  symbol_num: "",
  class_room: "",
};

const keyValue: Record<string, string | number> = {
  os: "fedora",
  browser: "chrome",
  editor: "vscode",
  language: "typescript",
  framework: "react",
  database: "mysql",
  cloud: 5,
};
