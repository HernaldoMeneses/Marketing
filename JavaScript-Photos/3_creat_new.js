//Direciona a ação
#target photoshop

// Cria um novo documento com largura de 800 pixels, altura de 600 pixels e resolução de 72 pixels por polegada
var novoDocumento = app.documents.add(800, 600, 72, "Novo Documento");

// Opcional: define o modo de cor do novo documento para RGB
novoDocumento.mode = DocumentMode.RGB;

// Opcional: define o fundo do novo documento para branco
var corBranca = new SolidColor();
corBranca.rgb.red = 255;
corBranca.rgb.green = 255;
corBranca.rgb.blue = 255;
novoDocumento.backgroundColor = corBranca;

// Opcional: salva o novo documento em um local específico
var caminhoParaSalvar = "~/Desktop/NovoDocumento.psd";
var opcoesSalvar = new PhotoshopSaveOptions();
opcoesSalvar.layers = true;
opcoesSalvar.embedColorProfile = true;
opcoesSalvar.alphaChannels = true;
opcoesSalvar.annotations = true;
opcoesSalvar.spotColors = true;
novoDocumento.saveAs(File(caminhoParaSalvar), opcoesSalvar, true);

// Opcional: Inserir um grupo de Laers
// Verifique se há um documento aberto
if (app.documents.length > 0) {
    // Acesse o documento ativo
    var doc = app.activeDocument;
    
    // Crie uma nova pasta (grupo de camadas)
    var folder = doc.layerSets.add();
    
    // Defina o nome da nova pasta
    folder.name = "Minha Pasta";
  } else {
    alert("Nenhum documento aberto no Photoshop.");
  }
  

// Verifique se há um documento aberto
if (app.documents.length > 0) {
  // Acesse o documento ativo
  var doc = app.activeDocument;
  
  // Acesse a pasta (grupo de camadas) existente ou crie uma nova
  var folder = doc.layerSets.getByName("Minha Pasta");
  if (!folder) {
    folder = doc.layerSets.add();
    folder.name = "Minha Pasta";
  }
  
  // Crie uma nova camada dentro da pasta
  var newLayer = doc.artLayers.add();
  
  // Defina o nome da nova camada
  newLayer.name = "Minha Camada";
} else {
  alert("Nenhum documento aberto no Photoshop.");
}





// Opcional: fecha o novo documento sem salvar alterações
novoDocumento.close(SaveOptions.DONOTSAVECHANGES);