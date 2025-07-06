// LoginSignup.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSignup: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Login Data:", loginData);
  
  // Simulate successful login
  localStorage.setItem("isLoggedIn", "true"); // Set login flag
  navigate("/home");
};

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!signupData.termsAccepted) {
      alert("Please accept Terms and Conditions");
      return;
    }
    alert("Signup successful!");
    setIsLogin(true); // Switch to login after signup
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8">
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 font-medium rounded-l-lg ${
              isLogin
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border border-blue-500"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-6 py-2 font-medium rounded-r-lg ${
              !isLogin
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border border-blue-500"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {isLogin ? (
          <form className="space-y-6" onSubmit={handleLoginSubmit}>
            <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={loginData.rememberMe}
                  onChange={handleLoginChange}
                  className="mr-2"
                />
                Remember me
              </label>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
              Sign In
            </button>
          </form>
        ) : (
          <form className="space-y-6" onSubmit={handleSignupSubmit}>
            <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>
            <input
              type="text"
              name="name"
              value={signupData.name}
              onChange={handleSignupChange}
              required
              placeholder="Full Name"
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="email"
              name="email"
              value={signupData.email}
              onChange={handleSignupChange}
              required
              placeholder="Email"
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="password"
              name="password"
              value={signupData.password}
              onChange={handleSignupChange}
              required
              placeholder="Password"
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="password"
              name="confirmPassword"
              value={signupData.confirmPassword}
              onChange={handleSignupChange}
              required
              placeholder="Confirm Password"
              className="w-full px-3 py-2 border rounded"
            />
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={signupData.termsAccepted}
                onChange={handleSignupChange}
                className="mr-2"
              />
              I agree to the Terms and Conditions
            </label>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
