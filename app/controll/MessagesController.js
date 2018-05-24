import Dom from '../utils/dom/dom.js';
import { createMessage } from '../view/Messages.js';
import Message from '../model/Message.js';


const printMessages = (message)=>{
  const element = Dom.get('#main');
  console.log(message);
  const messageView = createMessage(message);
  element.innerHTML = messageView ;
}

const sendMessage = event =>{
  event.preventDefault();
  
  let text = Dom.get('#messagem').value;
  const message = new Message({name: 'israel', text});
  console.log(message.toJSON())
  message.save();
}

Message.updates(printMessages);

export { sendMessage }