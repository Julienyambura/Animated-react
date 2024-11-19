import React, { useState } from "react";
import axios from "axios";
// ... (import react-spring components)

function AuthenticationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // ... (useSpring animation setup)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });

      setSuccess(true);
      setError(null);
    } catch (error) {
      setError(error.response.data.error);
      setSuccess(false);
    }
  };

  // ... (rest of the component)
}
