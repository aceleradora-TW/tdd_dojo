conta = 'conta1';
 let Conta1 = {
   nome : "Renan",
   saldo : 1000.00
 }
 let Conta2 = {
   nome : "Desi",
   saldo : 500.00
 }
 let valor = 300.00

const fazertransferencia = () => {
      if(Conta1.saldo >= valor){
        Conta1.saldo = Conta1.saldo - valor;
        Conta2.saldo += valor;

      }else{
        return 'trasação invalida!'
      }

  return 'transferencia valida'
}

const historico = (conta) => {
  if (conta.to.equal('conta1')){
    return Conta1.toString();
  }else{
    return 1;
  }

}

module.exports = { fazertransferencia}
