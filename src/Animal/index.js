class Animal {
    constructor(name){
        this.name = name
        this.skill = new Set()
    }
    laugh(){
        console.log(this.name +'is laugh');

    }
    getSkill(){
        return this.skill
    }
}
export {
    Animal
}