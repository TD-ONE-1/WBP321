import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  CircularProgress
} from '@mui/material';
import { useAuth } from '../Contexts/AuthContext';

export default function Login() {
  const { login } = useAuth();

  const [values, setValues] = useState({
    username: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      await login(values);
    } catch (err) {
      setErrorMsg(
        err.response?.data?.message ||
        'Invalid username or password'
      );
    }

    setLoading(false);
  };

  return (
    <div></div>
  );
}
