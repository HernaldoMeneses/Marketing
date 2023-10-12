// Criar uma nova composição (nome, altura, largura, ver, ver, ver);
var comp = app.project.items.addComp("Minha Composição", 1920, 1080, 30, 10, 30);

//Criar um objeto windows (ver , titulo, ver )
var mainWindow = new Window("palette","Add Title an Cut" ,undefined);
mainWindow.show();


// Salvar o projeto
app.project.save();