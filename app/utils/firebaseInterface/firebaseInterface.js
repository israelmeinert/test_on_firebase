// Initialize Firebase
var config = {
  
};
const app = firebase.initializeApp(config);

export default class GeneratorFirebase{

  constructor(ref){
    this.ref = ref;
    this.referenceTable = firebase.database().ref(ref);
  }

  save(dataObject){
    this.referenceTable.push().set(dataObject);
  }
  remove(dataId){
    this.referenceTable.ref(dataId).remove();
  }
  update(dataId, dataObject){
    this.referenceTable.ref(dataId).set(dataObject);
  }
  on_changed(listener){
    this.referenceTable.on('child_changed', (data)=>listener(this._makeObject(data)))
  }
  on_added(listener){
    this.referenceTable.on('child_added', (data)=>listener(this._makeObject(data)));
  }
  on_removed(listener){
    this.referenceTable.on('child_removed', (data)=>listener(this._makeObject(data)));
  }

  _makeObject(data){
    const object = data.toJSON();
    if ( object.hasOwnProperty('_id') || object.hasOwnProperty('id')  ){
      return object;
    }
    object['_id'] = data.key;
    return object;
  }

}
 