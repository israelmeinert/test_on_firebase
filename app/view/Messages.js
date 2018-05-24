const createMessage = (message)=>{
  return `
    <div> 
      <div> 
        <span>nome: ${message.name}  
      </div>
      <div>
        message: ${message.text}</span>
      </div>
    </div>  
  `;
} 

export { createMessage }; 