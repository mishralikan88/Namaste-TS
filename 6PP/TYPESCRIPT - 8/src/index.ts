// Utility classes => Typescript provides utility classes which is very helpful for ease of access

// Partial<Type> => converts properties types to optional

// Manual way.I am using ? operator to make these property types optional

// type user ={
//     name?:string,
//     email?:string
// }

// using utility class partial<Type>

type User = {
  name: string;
  email: string;
};

type partialuserType = Partial<User>; // coverts all the properties inside User object to optional irrespective of there state

const Useroptional: partialuserType = {
  // both properties are optional you may provide or may not provide.Here I am providing both
  name: "Lycan",
  email: "a@a.com",
};

// ==============================================================================================================================

// Required<Type> => opposite of partial

type User1 = {
  name?: string;
  email: string;
};

type requireduserType = Required<User1>; // coverts all the properties inside User1 object to required irrespective of there state

const User2: requireduserType = {
  // both properties are requires unless we get an error.
  name: "Lycan",
  email: "a@a.com",
};

// ================================================================================================================================

// Readonly<Type>

type readOnlyUser = {
  name: string;
  email: string;
};

type readOnlyuserType = Readonly<readOnlyUser>; // coverts all the properties inside readOnlyUser object to read Only.

const user: readOnlyuserType = {
  // both properties are requires unless we get an error.
  name: "Amar",
  email: "a@gmail.com",
};

// user.name="asdasd" // not editable as read only

// ==================================================================================================================================

//Record Synatx - Record<unionSeparatedprops,TypeName/InterfaceName> where TypeName/InterfaceName or type applies to all union separated props.



// example 1
type UserRecord = {
  name:string;
  email:string;
  address:string
}

type user1 = Record<"name"|"email"|"address",string>

// user1 & UserRecord are equal

// example 2

interface UserInfo {
  age: number;
}

type userName = "Amar" | "Lycan" | "Levi" | "Lisa"; 

const users: Record<userName, UserInfo> = {
  Amar: { age: 24 },
  Lycan: { age: 24 },
  Levi: { age: 24 },
  Lisa: { age: 24 },
};

// ====================================================================================================================================

// Pick<Type,keys> and Omit<Type,keys>

interface orderInfo {
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country: string;
  status: string;
}

//Pick<Type,keys>
// type ShippingInfo= Pick<orderInfo,"city"|"state"|"country"> // picking specific types from the interface and creating a new type using Pick<>

// Omit<Type,keys>
type ShippingInfo = Omit<orderInfo, "city" | "state" | "country">; // omits specific types from the interface and creating a new type using Omit<>

// ===================================================================================================================================

// Exclude <propsSeparatedbyUnion,excludedType>
// type Random = Exclude<string | number | boolean, number>; // exclude number from string , number & boolean types a create a new type Random.
// Random types allows only string and boolean types.type Random = string | boolean

// Extract<Type,Union>
// type Random = Extract<string | number | boolean, number>; // extract number from string | number | boolean type and create a new type random. type of Random is number

// NonNullable<Type>
type myUnion = string | number | boolean | null | undefined;
type sometype = NonNullable<myUnion>; // deletes null and undefined types and create a new type out of the supplied union value.

//====================================================================================================================================

// Parameters<Type>


const myFunc = (a: string, b: string) => {
  console.log(a + b);
};


type parameterTypes = Parameters<typeof myFunc> // parameterTypes = [a: string, b: string]


// ConstructorParameter<Type>

class SampleClass{
    constructor(public s:string,public t:string){}
}

type constructorTypes = ConstructorParameters<typeof SampleClass> // we get the constructor parameter inside constructorTypes which is  [s: string, t: string] 


// ReturnType<Type>
const myFuncreturned = (a: number, b: number) => {
   return a+b
  };

  type functionreturnType = ReturnType<typeof myFuncreturned>  // functionreturnType type is number

// InstanceType<Type>


class SampleClass2{
    constructor(public s:string,public t:string){}
}

type Instance = InstanceType<typeof SampleClass2> // Instance type is SampleClass2