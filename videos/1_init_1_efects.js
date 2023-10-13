// Criar uma nova composição (nome, largura, altura, ver, ver, ver);
var comp = app.project.items.addComp("Minha Composição", 1080, 1920, 30, 10, 30);

// Adicionar uma camada de texto à composição
var textLayer = comp.layers.addText("Olá, Mundo!");

// Definir algumas propriedades do texto
textLayer.position.setValue([comp.width / 2, comp.height / 2]);
textLayer.scale.setValue([200, 200]);
textLayer.opacity.setValue(100);


var textLayer = app.project.activeItem.layer("Seu Texto Layer");
var textDocument = textLayer.property("Source Text").value;

var novaCor = [1, 0, 0]; // Vermelho (R, G, B)
textDocument.fillColor.setValue(novaCor);

// Definir a opacidade da cor
textDocument.fillColor.alpha = 1; // 1 para opaco, 0 para transparente

textLayer.property("Source Text").setValue(textDocument);

//Open window.
//mainWindow.show();

// Salvar o projeto
app.project.save();



