const Animal = require('./Animal');

class Reptil extends Animal {
    constructor(nome, controlaTemperaturaCorpo) {
        super(nome);
        this.controlaTemperaturaCorpo = controlaTemperaturaCorpo|| false;  //ja definimos valor padrao, pra garantir q estará sempre preenchida
    }

}
module.exports = Reptil;
