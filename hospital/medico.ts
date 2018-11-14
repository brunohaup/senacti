import {pessoa} from './pessoa' 
export class medico extends pessoa{
    protected agendarconsulta: string
    protected agenda: string

    public logar(): void { 
        if (this.login == 'teste')
            console.log("Medico logado com sucesso")
    
        else {
            console.log("digite o login corretamente")
        }
    }

    public autent(): void { 
        if (this.autenticar == 123)
            console.log("autenticado com sucesso")
    
        else {
            console.log("não autenticado")
        }
    }
        
    }
   

