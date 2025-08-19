import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [notice, setNotice] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotice({ type: "", text: "" });

    if (!isLoginMode && password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    const apiUrl = isLoginMode
      ? "http://localhost:8080/api/login"
      : "http://localhost:8080/api/users";

    const payload = isLoginMode
      ? { email, password }
      : { name, email, password };

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        data = { message: await res.text() };
      }

      if (!res.ok) {
        setNotice({ type: "error", text: data.message || "Login failed. Please check your credentials." });
        return;
      }

      // Save user info
      const userData = data.user || { name: name || email };
      localStorage.setItem("user", JSON.stringify(userData));

      setNotice({ type: "success", text: data.message || "Login successful!" });

      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPasswordError("");

      // Redirect after 1 second
      setTimeout(() => navigate("/"), 1000);

    } catch (err) {
      setNotice({ type: "error", text: "Request failed: " + err.message });
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!isLoginMode && confirmPassword && e.target.value !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-4 text-[#FF6F61]">
          {isLoginMode ? "Login" : "Sign Up"}
        </h2>

        {/* Tab Toggle */}
        <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
          <button
            type="button"
            className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}
            onClick={() => setIsLoginMode(true)}
          >
            Login
          </button>
          <button
            type="button"
            className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white" : "text-black"}`}
            onClick={() => setIsLoginMode(false)}
          >
            Signup
          </button>
          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-[#009688] via-[#009688] to-[#009688] transition-all ${
              isLoginMode ? "left-0" : "left-1/2"
            }`}
          ></div>
        </div>

        {/* Notice */}
        {notice.text && (
          <div className={`rounded-xl p-3 text-sm mb-4 ${
            notice.type === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}>
            {notice.text}
          </div>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLoginMode && (
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-[#FF6F61] placeholder-gray-400"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-[#FF6F61] placeholder-gray-400"
          />

          <input
            type="password"
            placeholder="Password"
            required={isLoginMode}
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-[#FF6F61] placeholder-gray-400"
          />
          {!isLoginMode && (
            <>
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-[#FF6F61] placeholder-gray-400"
              />
              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}
            </>
          )}

          {isLoginMode && (
            <div className="text-right">
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-[#FF6F61] hover:underline"
              >
                Forgot password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-[#009688] via-[#009688] to-[#009688] text-white rounded-full text-lg font-medium hover:opacity-90 transition"
          >
            {isLoginMode ? "Login" : "Signup"}
          </button>

          <p className="text-center text-gray-600">
            {isLoginMode
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLoginMode(!isLoginMode);
                setPassword("");
                setConfirmPassword("");
                setPasswordError("");
                setNotice({ type: "", text: "" });
              }}
              className="text-[#FF6F61] hover:underline"
            >
              {isLoginMode ? "Signup now" : "Login"}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
