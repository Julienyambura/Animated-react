import { useState } from "react";

function signup() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="card p-4 bg-light">
        <h2 className="text-center mb-4">Sign Up</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="form-control rounded-0"
              name="email"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="form-control rounded-0"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              autoComplete="off"
            />
          </div>
          <button types="submit" className="btn--success w-100 rounded-0">
            Register
          </button>
          <p>Already have an account</p>
          <button className="btn-default border w-100 bg light rounded-0 text-decoration-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
