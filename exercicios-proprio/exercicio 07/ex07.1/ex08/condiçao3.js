var agora = new Date()
var hora = agora.getHours()

switch(hora) {
    case(hora = 23 ):
    console.log('boa noite')
        break
            case(hora = 18):
                console.log('boa tarde')
            break 
                case(hora = 11): 
                    console.log('bom dia')
                        break
                            case(hora = 4):
                                console.log('boa madrugada')
                                    break
        default:
            console.log('[ERRO] horário inválido')
            break

}