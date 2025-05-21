document.getElementById('messageForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const message = document.getElementById('messageInput').value;
  
    try {
      const response = await fetch('https://amplifytest-env.eba-en32aymp.us-east-1.elasticbeanstalk.com/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      const data = await response.json();
      document.getElementById('response').textContent = `Server says: ${data.reply}`;
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('response').textContent = 'An error occurred.';
    }
  });
  