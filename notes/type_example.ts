// creating interface like object
type result = {
  pass: boolean;
};

// defining a set of variable as type
type subject_type = "theory" | "practical" | "project";

// extending the type
type subject = result & {
  name: string;
  marks: number;
  sType: subject_type;
};

const DSA: subject = {
  pass: true,
  marks: 75,
  name: "DSA",
  sType: "practical",
};
console.log(`DSA`, DSA);

// predefining the output of function
// such that the output contain only 2 item of number type in array  as response
type res = [number, number];

const fa = (mark: number): res => {
  const gpa = mark % 4;
  const percentage = mark % 100;
  return [gpa, percentage];
};

const result = fa(70);
console.log("result[0]", result[0]);
