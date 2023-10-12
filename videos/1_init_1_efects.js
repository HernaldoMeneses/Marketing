// Criar uma nova composição (nome, altura, largura, ver, ver, ver);
var comp = app.project.items.addComp("Minha Composição", 1920, 1080, 30, 10, 30);

//Criar um objeto windows (ver , titulo, ver )
var mainWindow = new Window("palette","Add Title an Cut" ,undefined);

var groupOne = mainWindow.add("group", undefined, "groupOne");
//groupOnde.add("statictext", undefined,"This script allows you to add a title and cut you video");
//var titleName = groupOnde.add("edittext", undefined, "Title of Video");

// Adicionar uma camada de texto à composição
var textLayer = comp.layers.addText("Olá, Mundo!");




//Open window.
mainWindow.show();

// Salvar o projeto
app.project.save();



