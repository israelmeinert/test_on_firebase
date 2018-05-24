
export default class Model {

  constructor(database){
    this._db = database;
  }

  _getKeys(objectToGetKeys){
    const object = {};
    const keys = this._getValidKeys(objectToGetKeys); 
    keys.forEach(key => object[key] = objectToGetKeys[key] ? objectToGetKeys[key].value : '' );
    return object;
  }

  _checkKeyIsNotPrivate(objectToGetKeys){
    return Object.keys(objectToGetKeys).filter(key => key.includes('_'));
  }

  toJSON(){
    const object = this._getKeys(this);    
    return JSON.stringify(object);
  }
  
  toObject(){
    const object = this._getKeys(this);
    return object;
  }

  static toParse(json){
    const object = JSON.parse(json);
    Object.keys(object).forEach(key => this[key].value = object[key] ? object[key] : '' );
    return this;
  }

  save(){
    this._db.save(this.toObject());
  }
  remove(){
    this._db.remove(this._id);
  }
  update(){
    this._db.update(this._id, this.toObject());
  }
  static changes(listener){
    this._db.on_changed(listener);
  }
  static added(listener){
    this._db.on_added(listener);
  }
  static removed(listener){
    this._db.on_removed(listener);
  }
  static updates(listener){
    this._db.on_added(listener);
    this._db.on_changed(listener);
    this._db.on_removed(listener);
  }




}