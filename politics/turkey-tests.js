describe("Turkey Tests", function() {

  it("1920s", function() {
    expect(true).toBe(true);
    console.log('Bir umut');
    console.log('Hopes are high');
  });

  it("1930s - 1950s", function() {
    expect(false).toBe(false);
    console.log('Gerçekler acıdır, tam doğru olmasa da bari yanlış olmasın');
    console.log('Reality sets in, expectations are lowered');
  });

  xit("1950s - 2000s", function() {
    expect(false).toBe(true);
    console.log('O da olmadı, ayıya dayı diyeceğiz, yapacak birşey yok');
    console.log('Idealistic spirit is gone and the will to fight false is lost');
  });

  xit("after 2000", function() {
    expect(true).toBe(false);
    console.log('Ayı dayı olunca, mecburen dayı da artık ayı oldu');
    console.log('False became so powerful, it left no space for true to exist');
  });

});