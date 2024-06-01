/*
let rectangle = {
 width: 10,
 heigth: 50,
 get area(){
  return this.width * this.heigth
 }
}
console.log(rectangle.area) */

let person = {
 name:"Cheikh",
 age:26,
 get fullName(){
  return `${this.name} ${this.age}`
 },
 set fullName(name){
   let part = name.split(' ');
   this.name = part[1]
   this.age = part[0]
 }
}
console.log(person.fullName)
person.fullName = "cheikh Nouha"
console.log(person.name)
console.log(person.age)
