import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post('realizar-cadastro')
  realizarCadastro(@Body() ID_cliente: number , Nome_cliente: string , Email_cliente: string , Senha_cliente: string , Endereço_cliente: string , Telefone_cliente: number , Data_nascimento: Date , Gênero_cliente: string) {
    return this.clienteService.realizarCadastro(ID_cliente , Nome_cliente , Email_cliente , Senha_cliente , Endereço_cliente , Telefone_cliente , Data_nascimento , Gênero_cliente);
  }

  @Get('visualizar-perfil')
  visualizarPerfil(realizarCadastro) {
    return this.clienteService.visualizarPerfil(realizarCadastro);
  }

  @Get('visualizar-produtos')
  visualizarProdutos(ID_pedido: number) {
    return this.clienteService.visualizarProdutos(ID_pedido);
  }

  @Get('visualizar-produtos/:unidade')
  visualizarProdutosPorUnidade(@Param('ID_produto') ID_produto: number) {
    return this.clienteService.visualizarProdutosPorUnidade(ID_produto);
  }

  @Post('realizar-compras')
  realizarCompras(ID_carrinho: number) {
    return this.clienteService.realizarCompras(ID_carrinho);
  }

  @Get('visualizar-pedidos')
  visualizarPedidos(ID_pedido:number) {
    return this.clienteService.visualizarPedidos(ID_pedido);
  }

  @Get('gerenciar-carrinho')
  gerenciarCarrinho(ID_carrinho: number) {
    return this.clienteService.gerenciarCarrinho(ID_carrinho);
  }

  @Post('gerenciar-carrinho')
  adicionarAoCarrinho(@Body() ID_carrinho: number) {
    return this.clienteService.adicionarAoCarrinho(ID_carrinho);
  }

  @Patch('gerenciar-carrinho')
  editarCarrinho(@Body() ID_carrinho: number) {
    return this.clienteService.editarCarrinho(ID_carrinho);
  }

  @Delete('gerenciar-carrinho/:produtoId')
  removerDoCarrinho(@Param('ID_produto') ID_produto: number) {
    return this.clienteService.removerDoCarrinho(ID_produto);
  }

  @Get('visualizar-cupons')
  visualizarCupons(ID_cupom: number) {
    return this.clienteService.visualizarCupons(ID_cupom);
  }

  @Get('visualizar-categorias')
  visualizarCategorias(Descrição_categoria: string) {
    return this.clienteService.visualizarCategorias(Descrição_categoria);
  }

  @Get('visualizar-categorias/:categoria')
  visualizarProdutosPorCategoria(@Param('categoria') categoria: string) {
    return this.clienteService.visualizarProdutosPorCategoria(categoria);
  }

  @Get('visualizar-produtos-com-cupom/:cupom')
  visualizarProdutosComCupom(@Param('ID_cupom') ID_cupom: number) {
    return this.clienteService.visualizarProdutosComCupom(ID_cupom);
  }

  @Delete('excluir-conta')
  excluirConta(realizarCadastro) {
    return this.clienteService.excluirConta(realizarCadastro);
  }
}