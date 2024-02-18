class Person{
    constructor(name, lastname){
        this._name = name;
        this._lastname = lastname;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get lastname(){
        return this._lastname;
    }
    set lastname(lastname){
        this._lastname = lastname;
    }
}