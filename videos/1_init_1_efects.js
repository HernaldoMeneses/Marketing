// Criar uma nova composição (nome, largura, altura, ver, ver, ver);
var comp = app.project.items.addComp("Minha Composição", 1080, 1920, 30, 10, 30);

//Criar um objeto windows (ver , titulo, ver )
//var mainWindow = new Window("palette","Add Title an Cut" ,undefined);

//var groupOne = mainWindow.add("group", undefined, "groupOne");
//groupOnde.add("statictext", undefined,"This script allows you to add a title and cut you video");


// Adicionar uma camada de texto à composição
var textLayer = comp.layers.addText("Olá, Mundo!");

// Definir algumas propriedades do texto
textLayer.position.setValue([comp.width / 2, comp.height / 2]);
textLayer.scale.setValue([2000, 2000]);
textLayer.opacity.setValue(100);


// Definir o texto para ser em negrito
var textDocument = textLayer.property("Source Text").value;
textDocument.fontStyle == "Bold";
textLayer.property("Source Text").setValue(textDocument);


//Open window.
//mainWindow.show();

// Salvar o projeto
app.project.save();



