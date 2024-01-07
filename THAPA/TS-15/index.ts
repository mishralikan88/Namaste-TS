
// const user1: loginDetails = {
//   email: "mishralikan88@gmail.com",
//   password: "password",
//   role:"admin"
// };

// const user2: loginDetails = {
//   email: "mishralikan90@gmail.com",
//   password: "password2",
//   role:"User"
// };




// Enums in Action

// syntax -  enum enumName{enumprop1,enumprop2} or enum enumName{enumprop1=<value1>,enumprop2=<value2>}

// enum Roles {
//   user,  // Roles.user = 0 = default value
//   admin  // Roles.user = 1 = value incremented to 1 and so on for rest of the properties
// }

enum Roles {
  user = "User",
  admin = "Admin",
}

type loginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};

const user1: loginDetails = {
  name: "amar",
  email: "mishralikan88@gmail.com",
  password: "password",
  role: Roles.admin,
};

const user2: loginDetails = {
  name: "lycan",
  email: "mishralikan90@gmail.com",
  password: "password2",
  role: Roles.user,
};

const isAdmin: (user1Obj: loginDetails) => string = (
  user1Obj: loginDetails
): string => {
  const { name, role } = user1Obj;
  return role === "Admin"
    ? `${name} is allowed to edit the website`
    : `${name} is not allowed to edit the website`;
};

console.log(isAdmin(user1))
console.log(isAdmin(user2))

