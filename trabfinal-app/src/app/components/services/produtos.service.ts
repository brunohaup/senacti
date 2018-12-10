import {produto} from '../models/produto.model'


export class ProdutosService{
    public produtos: produto[] = 
[
    {
        id:1,
        nome: 'kachorro',
        descricao: 'kachoooooooooooooooooooorro',
        valor: '1.000'
    },

    {
        id:2,
        nome: 'gato',
        descricao: 'gatooooooooooo',
        valor: 500
    }
]

    public getprodutos(): Array<produto>{
        return this.produtos
    }
    public getProdutoPorId(id: number):
    produto{
        let produtosinternos: produto[]
            produtosinternos = this.getprodutos()
                return produtosinternos[id -1]
    }
}
