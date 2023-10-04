#target photoshop
/*Isso permite que o ambiente de execução 
do script saiba qual aplicativo deve ser o alvo.
*/

$.localize = true; //habilita usar arquivos de localização para exibir mensagens em diferentes idiomas com base nas configurações do Photoshop.
app.playbackDisplayDialogs = DialogModes.ALL;// DialogModes.ALL permite que os diálogos sejam exibidos durante a execução do script.


var ScriptFilePath = Folder($.fileName).parent.fsName;
//$.fileName - contém o caminho completo do arquivo do script em execução, incluindo o nome do próprio script.
//Folder() - Funcao para criar folders
//.parent - metodo que retorna o direitorio pai da pasta atual (Raiz)
//.fsName - retorna a string do caminha da pasta.
//resumindo cria e atribui à variavel ScriptFilePath o mesmo diretorio onde está o scriptatual;