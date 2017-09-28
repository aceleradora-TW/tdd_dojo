const expect = require('chai').expect
const transferencia = require('../transferencia')



describe('transferencia',() => {

  it('#fazertransferencia() deve retornar validação e transferencia', () => {


      expect(transferencia.fazertransferencia()).to.equal('transferencia valida')

  })

  // it('#historico() deve retornar valor antigo e valor atual da conta', () => {
  //   expect(transferencia.historico(conta1).to.equal( Conta1.toString()))
  // })
})
