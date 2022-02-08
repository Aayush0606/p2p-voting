import { useRef } from "react";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const data = {
      email,
      password,
    };

    console.log(data);
  };

  return (
    <div className="flex justify-center  w-full ">
      <div className="w-full md:w-1/2 bg-[#293548] rounded shadow-2xl p-8 m-4">
        <h1 className="block w-full text-center text-2xl font-bold mb-6 text-[#155774]">
          Admin Login
        </h1>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg " htmlFor="email">
              Email
            </label>
            <input
              ref={emailRef}
              required
              className="border focus:border-pink-500 text-[#f87171] border-pink-300 focus:outline-none focus:ring focus:ring-pink-500 py-2 px-3 bg-transparent rounded-lg"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg " htmlFor="password">
              Password
            </label>
            <input
              ref={passwordRef}
              required
              className="border focus:border-pink-500 text-[#f87171] border-pink-300 focus:outline-none focus:ring focus:ring-pink-500 py-2 px-3 bg-transparent rounded-lg"
              type="password"
              name="password"
              id="password"
            />
          </div>

          <button
            className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
