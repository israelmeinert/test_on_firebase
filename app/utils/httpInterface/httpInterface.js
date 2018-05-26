
export default class HttpGenerator{
  constructor({root, uri }){
    this.root = root;
    this.uri = uri;
  }

  find(objectToFind){
    let params= ''
    fetch(`${this.root}/${this.uri}?${params}`)
  }

  save(dataObject){

  }
}