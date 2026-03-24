// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const path = require('path');

const HELLO_WORLD_TEMPLATES = {
	py: 'print("Hello, World!")\n',
	java: [
		'public class helloworld {',
		'\tpublic static void main(String[] args) {',
		'\t\tSystem.out.println("Hello, World!");',
		'\t}',
		'}',
		''
	].join('\n')
};

/**
 * Populate new `helloworld.<extension>` files with starter code.
 * Writes only when the file is currently empty.
 *
 * @param {vscode.Uri} uri
 */
async function populateHelloWorldFile(uri) {
	const fileName = path.basename(uri.fsPath).toLowerCase();
	const match = /^helloworld\.(py|java)$/.exec(fileName);
	if (!match) {
		return;
	}

	const languageExtension = match[1];
	const template = HELLO_WORLD_TEMPLATES[languageExtension];
	if (!template) {
		return;
	}

	try {
		const currentContents = await vscode.workspace.fs.readFile(uri);
		if (currentContents.length > 0) {
			return;
		}

		await vscode.workspace.fs.writeFile(uri, Buffer.from(template, 'utf8'));
	} catch (error) {
		console.error('Failed to populate Hello World template:', error);
	}
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('vscode-helloworld is active.');

	const createFilesListener = vscode.workspace.onDidCreateFiles((event) => {
		for (const uri of event.files) {
			void populateHelloWorldFile(uri);
		}
	});

	const pythonWatcher = vscode.workspace.createFileSystemWatcher('**/helloworld.py');
	const javaWatcher = vscode.workspace.createFileSystemWatcher('**/helloworld.java');
	const pythonCreateListener = pythonWatcher.onDidCreate((uri) => {
		void populateHelloWorldFile(uri);
	});
	const javaCreateListener = javaWatcher.onDidCreate((uri) => {
		void populateHelloWorldFile(uri);
	});

	context.subscriptions.push(
		createFilesListener,
		pythonWatcher,
		javaWatcher,
		pythonCreateListener,
		javaCreateListener
	);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
