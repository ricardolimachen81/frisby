const frisby = require('frisby');
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false
});
//Execução de Requisições GET
describe('Teste de método Get - API', function(){
  var url = "https://postman-echo.com/get?foo1=bar1&foo2=bar2";
  it('Deve retornar sucesso', function(){
    console.log(url)
    return frisby.get(url, {agent})
    //.inspectBody()
    .expect('status', 200)
  })
})