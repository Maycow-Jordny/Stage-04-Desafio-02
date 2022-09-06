
const classRoom = [
    {
        name: "Letícia",
        noteOne: 8,
        noteTwo: 7,
    },
    {
        name: "Fábio",
        noteOne: 6,
        noteTwo: 4,
    },
    {
        name: "Mateus",
        noteOne: 9,
        noteTwo: 10,
    },
    {
        name: "Maria",
        noteOne: 6,
        noteTwo: 10,
    }

]

function calcMedia(noteOne, noteTwo) {
    return (noteOne + noteTwo) / 2

}


function printCalcMedia(student) {
    let media = calcMedia(student.noteOne, student.noteTwo)
    if (media >= 7) {
        return ` A média do(a) aluno(a) ${student.name} é: ${media}\n Parabéns ${student.name}! Você foi aprovado(a) no concurso!`
    } else {
        return ` A média do(a) aluno(a) ${student.name} é: ${media}\n Não foi dessa vez, ${student.name}! Tente novamente!`
    }
}


for (student of classRoom) {
    let message = printCalcMedia(student)
    alert(message)
}