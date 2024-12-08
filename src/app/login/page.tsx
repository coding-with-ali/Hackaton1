import Link from "next/link";
import Brand from '../homepage/brand'

export default function login () {
  
  return (
    <div>
      {/* Header Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF]">
        <div className='absolute top-48 left-10 md:top-60 md:left-60'>
          <h2 className='text-[#101750] font-[Josefin Sans] text-[26px] md:text-[36px] font-[700]'>Login</h2>
          <Link href="" className='px-2 '>Home.</Link>
          <Link href="">Page.</Link>
          <Link href="" className='text-[#FB2E86] text-[16px] font-[500] px-2'>Login</Link>
        </div>
      </div>
      <div>
      <div className="py-20 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-black mb-4">Login</h2>
        <p className="text-gray-500 text-center mb-6">
          Please login using account detail below.
        </p>
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          {/* Forgot Password Link */}
          <div className="mb-6 text-right">
            <a
              href="#"
              className="text-sm text-pink-500 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Sign In
          </button>
        </form>
        {/* Bottom Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Dont have an Account?{" "}
            <a href="#" className="text-pink-500 hover:underline">
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
      </div>
      <Brand/>
    </div>
  );
};
