interface IGeneral {
  id: number;
  status: (params: string) => string;
}

class Todo implements IGeneral {
  public id: number;

  public status(params: string) {
    return params;
  }
}

class User implements IGeneral {
  constructor(id: number) {
    this.id = id;
  }

  public id: number;

  public status(params: string) {
    return params;
  }
}

const admin: User = {
  id: 10,
  status: (params: string) => params,
};

console.log(`Class `, typeof new Todo());
console.log(`Object `, typeof admin);
