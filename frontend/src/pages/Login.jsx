import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';
import COLORS from '../styles/colors';

export default function Login() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: COLORS.background }}
    >
      <form
        onSubmit={handleSubmit}
        className="rounded-lg shadow-lg p-10 w-96"
        style={{ backgroundColor: COLORS.cardBackground }}
      >
        <h2
          className="text-center text-3xl font-bold mb-8"
          style={{ color: COLORS.textDark }}
        >
          Se connecter
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-6 p-3 rounded border focus:outline-none"
          style={{
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.border,
            color: COLORS.textPrimary,
          }}
          placeholderTextColor={COLORS.placeholderText}
        />

        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full mb-8 p-3 rounded border focus:outline-none"
          style={{
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.border,
            color: COLORS.textPrimary,
          }}
          placeholderTextColor={COLORS.placeholderText}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded text-white font-semibold hover:opacity-90 transition-opacity duration-300"
          style={{ backgroundColor: COLORS.primary }}
        >
          {loading ? 'Chargement...' : 'Se connecter'}
        </button>

        {error && (
          <p
            className="text-center mt-4 font-medium"
            style={{ color: '#FF4D4F' }}
          >
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
