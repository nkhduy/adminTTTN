import React from "react";

function Login() {
  const handleLogin = () => {
    window.location.href = "http://42store.duynguyen23.io.vn:5000/admin/auth/openid";
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow-sm p-4 text-center login-container">
        {/* Logo */}
        <img src="/logonb.png" alt="Logo" className="mb-3 mx-auto" style={{ width: "80px" }} />

        {/* Title */}
        <h1 className="h5 fw-bold text-dark mb-2">Admin Dashboard</h1>
        <p className="text-muted mb-3" style={{ fontSize: "0.9rem" }}>Đăng nhập để tiếp tục</p>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="btn btn-warning text-white fw-bold shadow-sm d-flex align-items-center justify-content-center w-100 py-2 login-button"
          style={{ borderRadius: "8px", transition: "all 0.3s ease-in-out" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft logo"
            className="me-2"
          />
          <span>Đăng nhập với Microsoft</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
