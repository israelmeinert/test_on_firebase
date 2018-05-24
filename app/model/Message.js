import Model from './Model.js';
import GeneratorFirebase from '../utils/firebaseInterface/firebaseInterface.js'

export default class Message extends Model{

  constructor({ name, text }){
    super(new GeneratorFirebase('messages'));
    this._id =  {value: ''}
    this.name = { rules:'', value: name};
    this.text = { rules:'', value: text};
  }
  get id(){
    return this._id.value;
  }
  
  
}