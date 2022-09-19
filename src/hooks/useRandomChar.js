import { useState } from "react";

export function useRandomChar(requstToServer) {
  const [char, setChar] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const updateState = (char) => {
    setLoading(false);
    setChar(char);
  };
  const upError = (error) => {
    setLoading(false);
    setError(true);
  };
  const randomChar = () => {
    const char = new requstToServer();
    const id = Math.floor(Math.random() * 140);
    char
      .getCharacter(id)
      .then(updateState)
      .catch(upError);
  };
  return { char, loading, error, randomChar };
}
