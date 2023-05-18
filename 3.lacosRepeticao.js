//[] 1. Crie funcao que recebe como argumentos o nome de um aluno - checked
//2. Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
//3. Caso o aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.

listaChamada = ['Kaline', 'Neto', 'Dodoi', 'Gabriel', 'William', 'Rafael', 'Ed']
mediaFinal = [10, 0, 0, 0, 0, 0, 9]

function searchList(studentName) 
{
    console.log(listaChamada)
    console.log(studentName)
    listaChamada.forEach(element => {
        console.log(listaChamada[element])
        console.log(element)


        if(element==studentName){
            console.log('Nome do estudante está presente na lista')
            return studentName;
        }else if(studentName!=element){
            console.log('Não existe')
            return;

        }
        else{
            return;
            console.log('Nome do estudante não está presente na lista')
        }
    });
   
 

}
searchList('nat')
