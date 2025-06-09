// let person: [string, number] = ["Likan", 30];


// person = [30, "Likan"]; // ❌ Wrong order!
// person[2] = true;        // ❌ Index out of bounds


// let mixed: (string | number)[] = ["Likan", 30, "Dev", 99];

// type Person = [name: string, age: number];
// const p: Person = ["Likan", 30];

// const config: readonly [number, string] = [10, "prod"];
// config[0] = 20; // ❌ Error: cannot assign to readonly

// type User = [string, number?];
// const u1: User = ["Likan"];         // ✅ age omitted
// const u2: User = ["Likan", 30];     // ✅ age provided
// type Bad = [name?: string, age: number]; // ❌ Error


// type Logs = [level: string, ...messages: string[]];
// const log1: Logs = ["info"]; // messages = []
// const log2: Logs = ["warn", "disk", "space", "low"]; // messages = ["disk", "space", "low"] 



// type EventLog = [event: string, timestamp?: number, ...tags: string[]];

// ["click"];                        // ✅ minimal
// ["click", 123];                   // ✅ optional included
// ["click", 123, "user", "menu"];   // ✅ full


// type Config = [mode: string, debug?: boolean, ...tags: string[]];

// const c1: Config = ["dark"];                  // ✅
// const c2: Config = ["dark", true];            // ✅
// const c3: Config = ["dark", true, "beta"];    // ✅


// type User = readonly [id: number, name: string];
// const u: User = [1, "Likan"];
// u[0] = 2; // ❌ Error: read-only

// type Entry = [key: string, value: string | number];

// const pair: Entry = ["username", "Likan"];



const obj = { name: "Likan", age: 30 };
const entries: [string, string | number][] = Object.entries(obj);
console.log(entries); // [ ["name", "Likan"], ["age", 30] ]


type Person = [name: string, age: number];
const p: Person = ["Likan", 30];


p[0]

type User = [name: string, age?: number];
const u1: User = ["Likan"];         // ✅ OK
const u2: User = ["Likan", 30];     // ✅ OK




// type Bad = [...nums: number[], name: string];   // ❌ Error: Spread must be last

// type Wrong = [a: number, ...b: string[], ...c: boolean[]]; // ❌ Only one spread allowed

type LogArgs = [prefix?: string, ...messages: string[]];

const log1: LogArgs = [];                      // ✅ no prefix, no message
const log2: LogArgs = ["[INFO]"];              // ✅ prefix only
const log3: LogArgs = ["[WARN]", "disk", "low"]; // ✅ prefix + messages

type Params = [userId: number, isAdmin?: boolean, ...tags: string[]];

const p1: Params = [1];                          // ✅ only userId
const p2: Params = [2, true];                    // ✅ userId + isAdmin
const p3: Params = [3, false, "tag1", "tag2"];   // ✅ userId + isAdmin + tags









type Bad = [...messages: string[], suffix?: string]; // ❌ Error