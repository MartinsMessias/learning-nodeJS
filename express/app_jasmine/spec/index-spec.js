describe("Elevador", () => {
  var Elevador = require("../../app_gulp/index.js");

  it("Deve estar no andar 0", function () {
    expect(Elevador.andar).toBe(0);
  });

  it("Deve ir ao andar 1", function () {
    Elevador.subir();
    expect(Elevador.andar).toBe(1);
  });

  it("Deve ir ao andar 0", function () {
    Elevador.descer();
    expect(Elevador.andar).toBe(0);
  });
});
