// ✅ Discriminated Union – 2 Key Benefits

// type Success = {
//   status: "success";
//   data: string;
// };

// type Failure = {
//   status: "error";
//   error: string;
// };

// type response =  Success | Failure

// function handle(res: response) {

  // 1️⃣ Safe Type Narrowing: TypeScript knows res is of type { status: "success", data: string }

//   if (res.status === "success") {
//     console.log(res.data);  // ✅ Safe
//   } else if (res.status === "error") {
//     console.log(res.error); // ✅ Safe
//   }

  // 2️⃣ Prevents Wrong Access: TypeScript doesn't allow access to properties that don't belong to the narrowed type
  
  // ❌ console.log(res.error);
  // ❌ console.log(res.data);
}


// type APIResponse =
//   | { status: "ok"; data: string[] }
//   | { status: "error"; error: string };

// function render(res: APIResponse) {
//   if (res.status === "ok") {
//     console.log(res.data); // ✅
//   } else {
//     console.log(res.error); // ✅
//   }
// }


// type State =
//   | { type: "loading" }
//   | { type: "success"; payload: string }
//   | { type: "failure"; error: string };

// function reducer(state: State) {
//   switch (state.type) {
//     case "loading":
//       return "Loading...";
//     case "success":
//       return state.payload;
//     case "failure":
//       return state.error;
//   }
// }

type response =
  | { status: "success"; data: string }
  | { status: "error"; error: string }
  | { status: "pending"; pendingStatus: string };

function handleResponse(res: response) {
  switch (res.status) {
    case "success":
      return res.data;
    case "error":
      return res.error;
    case "pending":
      return res.pendingStatus; 
    default:
      const _check: never = res; 
      return _check;
  }
}






