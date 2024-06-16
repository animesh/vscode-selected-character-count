import * as vsc from 'vscode';
export function activate(context: vsc.ExtensionContext) {
	console.log('xtension "character" is now active');
	const disposable = vsc.commands.registerCommand('character.popup', () => {
		vsc.window.showInformationMessage('popup from character-count');
	});
		let wordCountDisposable = vsc.commands.registerCommand('character.count', () => {
        let editor = vsc.window.activeTextEditor;
        if (editor) {
            let document = editor.document;
            let text = document.getText();
            let wordCount = text.split(/\s+/).length;
			let fastaCount = text.split(">").length-1;
            vsc.window.showInformationMessage(`Word count: ${wordCount}`);
            vsc.window.showInformationMessage(`Fasta count: ${fastaCount}`);
        }
    });
    context.subscriptions.push(disposable, wordCountDisposable);
}
export function deactivate() {}
