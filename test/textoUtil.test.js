const textoUtils = require("../src/textoUtils");

describe ("textoUtils", () => {
    test ("Teste de textos", () => {
        //arrange
        const textoUtil = new textoUtils();

        //Act
        const capitalizar = textoUtil.capitalizar ('nathan');
        const paraSlug = textoUtil.paraSlug ('Banana Caramelizada');
        const ehPalindromo = textoUtil.ehPalindromo ('natan');
        const removerEspacosExtras = textoUtil.removerEspacosExtras('Banana      azul');
        const truncar = textoUtil.truncar('oi eu', 3);
        const contarPalavras = textoUtil.contarPalavras('oi eu sou');
        const contarOcorrencias = textoUtil.contarOcorrencias('oi sou eu ou', 'o')
        const somenteLetras = textoUtil.somenteLetras ('ola4')



        //Assert
        expect (capitalizar).toBe ('Nathan');
        expect (paraSlug).toBe ('banana-caramelizada');
        expect (ehPalindromo).toBe (true);
        expect (removerEspacosExtras).toBe('Banana azul');
        expect (truncar).toBe('oi ...');
        expect (contarPalavras).toBe(3)
        expect (contarOcorrencias).toBe(3)
        expect (somenteLetras).toBe(false)

    })

    test ("teste inverter", () => {
        const textoUtil = new textoUtils();
        const inverter = textoUtil.inverter ('abc');
        expect (inverter).toBe ('cba');
    })

})


