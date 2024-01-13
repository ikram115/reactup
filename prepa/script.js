//classe

//class Etudiant {
//    constructor(nom , age){
//        this.nom = nom;
//        this.age = age;
//    }
//
//    info() {
//        return `Nom etudiant est : ${this.nom}  a pour age :  ${this.age}`
//    }
//}

//let et1 = new Etudiant('Ikram', 20 );
//console.log(et1.info());
//------------------------------------------------------------------------------------------------------------------------------------------------
//Heritage:

// class Etudiant{
//     constructor(nom , age){
//         this.nom = nom;
//         this.age = age;
//     }

//     info() {
//         return` Nom etuduant est : ${this.nom} a pour age:${this.age}`
//     }
// }
// class Stagiaire extends Etudiant{
//     constructor(nom , age , stage){
//         super(nom , age);
//         this.stage = stage;
//     }
//     infor(){
//         return`${super.info()} prend comme stage ${this.stage}`
//     }
// }
// let st1 = new Stagiaire('Ikram',20,'hp')
// console.log(st1.infor());
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//l'operateur conditionnel ternaire:

// let note=15;
// let decision = note >10 ? "admis":"non admis";
// console.log(decision);
//------------------------------------------------------------------------------------------------------------------------------------------------
//destructuring:

// const personne = {
//     nom : "Ikram",
//     age : 20 ,
//     adresse :{
//         ville : "Temara",
//         codePostale: 12000
//     }
// }
// function info({nom , age , adresse:{ville}}){
//     return`votre nom est: ${nom} votre age est : ${age} votre ville est: ${ville}`
// }
// console.log(info(personne));
//-------------------------------------------------------------------------------------------------------------------------------------------------
//map

// const personne = [
//     {
//         nom: "Ikram",
//         age: 20,
//         ville: "Temara",
//     },
//     {
//         nom: "Inass",
//         age: 18,
//         ville: "Salé",
//     },
//     {
//         nom: "Ayman",
//         age: 19,
//         ville: "Rabat",
//     }
// ]
// const info = personne.map(function(pers){
//     return pers
// })
// console.log(info);
//------------------------------------------------------------------------------------------------------------------------------------------------
//exercice:
// const nums = [2, 5 ,8 ,7 ,3];
// const NumM = nums.map(function(ele){
//     return ele*3;
// })
// console.log(NumM);
//-------------------------------------------------------------------------------------------------------------------------------------------------
//filter

// const personne = [
//     {
//         nom: "Ikram",
//         age: 20,
//         ville: "Temara",
//     },
//     {
//         nom: "Inass",
//         age: 18,
//         ville: "Salé",
//     },
//     {
//         nom: "Ayman",
//         age: 19,
//         ville: "Rabat",
//     }
// ]
// const persAge = personne.filter(function(pers){
//     return pers.age>18
// })
// const persnonAge = personne.filter(function(pers){
//     return pers.age<19
// })
// console.log(persAge);
// console.log(persnonAge);
//-------------------------------------------------------------------------------------------------------------------------------------------------
//find

// const personne = [
//         {
//             nom: "Ikram",
//             age: 20,
//             ville: "Temara",
//         },
//         {
//             nom: "Inass",
//             age: 18,
//             ville: "Salé",
//         },
//         {
//             nom: "Ayman",
//             age: 19,
//             ville: "Rabat",
//         }
//     ]
//     const persAge = personne.find(function(pers){
//         return pers.age>18
//     })
// console.log(persAge);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//destructuring d'un array

// const tab=[10 , 20 , 30 , 40 , 50];
// const [a , b , ...rest]=tab;
// console.log(a,b,rest);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let x=10;
// let y=20;
// [x,y]=[y,x]
// console.log(x);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//arrow function
// function s(a,b){
//     return a+b;
// }
// console.log(s(1,5));
// const somme = (a,b) => a+b;

// console.log(somme(3,10)) //12
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const nbs =[1,5,4,7,9];
// function sum(x,y,z,w){
//     return x+y+
// }


