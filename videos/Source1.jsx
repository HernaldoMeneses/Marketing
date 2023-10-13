// Criar uma nova composição
var comp = app.project.items.addComp("Minha Composição", 1920, 1080, 30, 10, 30);

// Adicionar uma camada de texto à composição
var textLayer = comp.layers.addText("Olá, Mundo!");

// Definir algumas propriedades do texto
textLayer.position.setValue([comp.width / 2, comp.height / 2]);
textLayer.scale.setValue([200, 200]);
textLayer.opacity.setValue(50);

// Definir o texto para ser em negrito
var textDocument = textLayer.property("Source Text").value;
textDocument.fontStyle = "Bold";
textLayer.property("Source Text").setValue(textDocument);

// Definir a cor do texto para vermelho
var textFillColor = textLayer.property("Source Text").value.fillColor;
textFillColor.setValue([1, 0, 0, 1]); // (R, G, B, Opacidade)
textLayer.property("Source Text").setValue("Olá, Mundo!", textFillColor);

// Salvar o projeto
app.project.save();
