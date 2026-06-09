export default class Weapon{
    public strength:number = 0; 
    public durability:number = 0; 

    public toJSON():string{

        let output:string = "{";
        for( var prop in this){
            output += `\r\n"${prop}": ${this[prop]},`+"\r\n";
        }

        output += "}"; 
        return output;
    }
}