import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendedorService } from './vendedor.service';
import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { UpdateVendedorDto } from './dto/update-vendedor.dto';

@Controller('vendedor')
export class VendedorController {
  constructor(private readonly vendedorService: VendedorService) {}

  @Post('/produtos')
  inserirProduto(@Body() ID_produto: number) {
      return this.vendedorService.inserirProduto(ID_produto);
  }

  @Patch('/produtos/:ID_produto')
  editarProduto(@Param('ID_produto') ID_produto: number, Nome_produto: string) {
    return this.vendedorService.editarProduto(ID_produto , Nome_produto);
  }

  @Get('/produtos/:ID_produto')
  visualizarProduto(@Param('ID_produto') ID_produto: number) {
    return this.vendedorService.visualizarProduto(ID_produto);
  }

  @Delete('/produtos/:ID_produto')
  excluirProduto(@Param('ID_produto') ID_produto: number) {
    return this.vendedorService.excluirProduto(ID_produto);
  }

  @Get('/clientes')
  visualizarClientes(@Param('ID_cliente') ID_cliente: number) {
    return this.vendedorService.visualizarClientes(ID_cliente);
  }

  @Get('/pedidos')
  visualizarPedidos(@Param('ID_pedido') ID_pedido: number) {
    return this.vendedorService.visualizarPedidos(ID_pedido);
  }

  @Post('/cupons')
  inserirCupom(@Body() ID_cupom: number) {
    return this.vendedorService.inserirCupom(ID_cupom);
  }

  @Patch('/cupons/:ID_cupom')
  editarCupom(@Param('ID_cupom') ID_cupom: number , Código_cupom: number , Porcentagem_cupom:number) {
    return this.vendedorService.editarCupom(ID_cupom , Código_cupom , Porcentagem_cupom);
  }

  @Get('/cupons')
  visualizarCupons(@Param('ID_cupom') ID_cupom: number) {
    return this.vendedorService.visualizarCupons(ID_cupom);
  }

  @Delete('/cupons/:ID_cupom')
  excluirCupom(@Param('ID_cupom') ID_cupom: number) {
    return this.vendedorService.excluirCupom(ID_cupom);
  }

  @Post('/categorias')
  inserirCategoria(@Body() ID_categoria: number) {
    return this.vendedorService.inserirCategoria(ID_categoria);
  }

  @Patch('/categorias/:ID_categoria')
  editarCategoria(@Param('ID_categoria') ID_categoria: number , Nome_categoria: string , Produtos_categoria: string) {
    return this.vendedorService.editarCategoria(ID_categoria , Nome_categoria , Produtos_categoria);
  }

  @Get('/categorias')
  visualizarCategorias(@Param('ID_categoria') ID_categoria: number) {
    return this.vendedorService.visualizarCategorias(ID_categoria);
  }

  @Delete('/categorias/:ID_categoria')
  excluirCategoria(@Param('ID_categoria') ID_categoria: number) {
    return this.vendedorService.excluirCategoria(ID_categoria);
  }

  @Patch('/produtos/:ID_produto/estoque')
  gerenciarEstoque(@Param('ID_produto') ID_produto: number) {
    return this.vendedorService.gerenciarEstoque(ID_produto);
  }
}
