document.getElementById('messageForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const message = document.getElementById('messageInput').value;
  
    try {
      const response = await fetch('http://localhost:5000/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
      });
  
      const data = await response.json();
      document.getElementById('response').textContent = `Server says: ${data.reply}`;
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('response').textContent = 'An error occurred.';
    }
  });
  