import { sendMessage } from './controll/MessagesController.js'
import Dom from './utils/dom/dom.js';

window.onload = ()=>{
  Dom.get('form').onsubmit = sendMessage;
}
