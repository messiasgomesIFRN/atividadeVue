var app = new Vue({
    el: '#calc',

    data: {
        message: "Calcular IMC",
        altura: '',
        peso: '',
        imc: ''
    },
    methods: {

        calcImc: function() {
            let alturaM = this.altura / 100;
            this.imc = (this.peso / parseFloat(alturaM * alturaM).toFixed(2));
        },
    }
});