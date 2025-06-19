const createPair = <A1, B1>(v1: A1, v2: B1): [A1, B1] => {
  return [v1, v2];
};

const pair = createPair<string, number>("rank", 2);


