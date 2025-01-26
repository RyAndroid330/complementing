import React, { useState } from 'react';

const Welcome: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [welcomeMessage, setWelcomeMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWelcomeMessage(`Welcome ${name}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
      {welcomeMessage && <p>{welcomeMessage}</p>}
    </div>
  );
};

export default Welcome;
