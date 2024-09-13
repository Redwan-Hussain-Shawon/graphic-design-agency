
async function VerifyToken() {
  const token = JSON.parse(localStorage.getItem("user"));
  try{
    const response = await fetch('/api/verifyToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }), 
    });

    const data = await response.json();
    if(data){
      return data;
    }else{
      alert('Some Thing Rong')
    }
  
    
  } catch (error) {
    console.error('Error decoding token:', error); 
  }
}

export default VerifyToken