export class pessoa{
protected login: string
protected autenticar: number
protected deslogar: number

constructor(login:string, autentic:number, deslogar:number){
    this.login = login
    this.autenticar = autentic
    this.deslogar = deslogar
}

public logar(): void { 
    if (this.login == 'teste')
        console.log("logado com sucesso")

    else {
        console.log("digite o login corretamente")
    }
}

}