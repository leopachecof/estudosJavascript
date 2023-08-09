//Percorre coleção inteira, podendo:
//trabalhar//Trabalhar e retornar//Trabalhar ou retornar
//sem interrupção
//cursos.map(elemento, indice) recebe esses valores

// const cursos=['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
// cursos.map((el, i)=>{
//     console.log("Curso:" + el + " - Posição:" + i)
// })

// console.log("---OUTRO EXEMPLO---")

// const materia=['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
//     let m=materia.map((el2, i2)=>{
//         return el2
//     })
//     console.log(m)

// console.log("---OUTRO EXEMPLO---")
// let el=document.getElementsByTagName("div")
// el=[...el]
// console.log(el)
// el.map((e,i)=>{
//     e.innerHTML = "Curso"

// })]

// console.log("---OUTRO EXEMPLO---")
// const el=document.getElementsByTagName("div")
// console.log(el)
// const val=Array.prototype.map.call(el,({innerHTML})=>innerHTML)
// console.log(val)

// console.log("---OUTRO EXEMPLO---")
const converterInt=(e)=>parseInt(e)
const dobrar=(e)=>e*2
let num=['1', '2', '3', '4', '5'].map(dobrar)
console.log(num)


