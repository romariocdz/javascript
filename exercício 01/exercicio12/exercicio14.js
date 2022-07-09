var agora = new Date()
var dia_sem = agora.getDay

/*
Domingo = 0
Segunda = 1
Terça = 2
Quarta = 3
Quinta = 4
Sexta = 5
Sabado = 6
*/

switch(dia_sem) {
    case(dia_sem == 0):
       console.log('Hoje é Domingo')
            break
                case(dia_sem == 1):
                    console.log('Hoje é segunda')
                        break
                case(dia_sem == 2):
            console.log('Hoje é Terça')
        break
    case(dia_sem == 3):
console.log('Hoje é Quarta feira')
        break
            case(dia_sem == 4):
                 console.log('Hoje é quinta-feira')
                    break
                        case(dia_sem == 5):
                           console.log('Hoje é Sexta-feira')
                                break
                            case(dia_sem == 6):
                        console.log('Hoje é Sábado')
                    break
                case(dia_sem == 0):
            console.log('Hoje é Domingo')
        break
    default:
console.log('[ERRO] Dia Inválido')
}