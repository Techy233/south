import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-sky-400">STAR SOLUTIONS</h1>
          <p className="text-xl text-sky-300/80 mt-2">Welcome Back!</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
