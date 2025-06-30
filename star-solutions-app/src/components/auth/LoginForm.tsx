import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    // TODO: Implement actual login logic (API call)
    console.log('Logging in with:', { email, password });
    alert(`Simulating login for: ${email}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800/70 backdrop-blur-md shadow-2xl rounded-xl px-8 pt-10 pb-8 mb-4"
    >
      {error && (
        <div className="bg-red-500/20 border border-red-700 text-red-300 px-4 py-3 rounded-lg relative mb-6" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-sky-300 text-sm font-bold mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="shadow-inner appearance-none border border-slate-700 rounded-lg w-full py-3 px-4 bg-slate-700/50 text-slate-200 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent placeholder-slate-500"
          required
        />
      </div>
      <div className="mb-8">
        <label
          htmlFor="password"
          className="block text-sky-300 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="shadow-inner appearance-none border border-slate-700 rounded-lg w-full py-3 px-4 bg-slate-700/50 text-slate-200 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent placeholder-slate-500"
          required
        />
        <div className="text-right mt-2">
            <a href="#" className="text-sm text-sky-400 hover:text-sky-300 hover:underline">
                Forgot Password?
            </a>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-150"
        >
          Sign In
        </button>
      </div>
      <div className="mt-8 text-center">
        <p className="text-slate-400 text-sm">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-sky-400 hover:text-sky-300 hover:underline">
                Sign Up
            </a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
