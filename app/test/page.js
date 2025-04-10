'use client';

import { useState } from 'react';

export default function SendMessageForm() {
  const [phone, setPhone] = useState('');
  const [response, setResponse] = useState(null);

  const sendMessage = async () => {
    const res = await fetch('/api/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to: phone }),
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <div className='h-screen py-[20vh]'>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      />
      <button onClick={sendMessage} style={{ padding: '0.5rem', backgroundColor: 'green', color: 'white' }}>
        Send Message
      </button>

      {response && (
        <pre style={{ marginTop: '1rem', background: '#f0f0f0', padding: '1rem' }}>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}
