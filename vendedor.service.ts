import { Injectable } from '@nestjs/common';
import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { UpdateVendedorDto } from './dto/update-vendedor.dto';

@Injectable()
export class VendedorService {
  inserirProduto(ID_produto: number) {
    // Lógica para inserir um produto no banco de dados
  }

  editarProduto(ID_produto: number , Nome_produto: string) {
    // Lógica para editar um produto no banco de dados
  }

  visualizarProdutos(ID_produto: number) {
    // Lógica para visualizar todos os produtos
  }

  visualizarProduto(ID_produto: number) {
    // Lógica para visualizar detalhes de um produto
  }

  excluirProduto(ID_produto: number) {
    // Lógica para excluir um produto do banco de dados
  }

  visualizarClientes(ID_cliente: number) {
    // Lógica para visualizar todos os clientes
  }

  visualizarPedidos(ID_pedidos: number) {
    // Lógica para visualizar os pedidos
  }

  inserirCupom(ID_cupom: number) {
    // Lógica para inserir um cupom no banco de dados
  }

  editarCupom(ID_cupom: number , Código_cupom: number , Porcentagem_cupom: number) {
    // Lógica para editar um cupom no banco de dados
  }

  visualizarCupons(ID_cupom:number) {
    // Lógica para visualizar todos os cupons
  }

  excluirCupom(ID_cupom: number) {
    // Lógica para excluir um cupom do banco de dados
  }

  inserirCategoria(ID_categoria: number) {
    // Lógica para inserir uma categoria no banco de dados
  }

  editarCategoria(ID_categoria: number , Nome_categoria: string , Produtos_categoria: string) {
    // Lógica para editar uma categoria no banco de dados
  }

  visualizarCategorias(ID_categoria: number) {
    // Lógica para visualizar todas as categorias
  }

  excluirCategoria(ID_categoria: number) {
    // Lógica para excluir uma categoria do banco de dados
  }

  gerenciarEstoque(ID_produto: number) {
    // Lógica para gerenciar o estoque de um produto
  }
}