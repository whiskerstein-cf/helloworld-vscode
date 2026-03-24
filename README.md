# VSCode HelloWorld

Generate Hello World starter code automatically when specific filenames are created.

Project source lives in `vscode-helloworld/`.

## Features

- Auto-populates `helloworld.py` with Python Hello World code.
- Auto-populates `helloworld.java` with Java Hello World code.
- Writes only if the new file is empty.

Generated templates:

```python
print("Hello, World!")
```

```java
public class helloworld {
	public static void main(String[] args) {
		System.out.println("Hello, World!");
	}
}
```

## How It Works

When the extension is active, creating these files in your workspace triggers template generation:

- `helloworld.py`
- `helloworld.java`

Filename match is exact (`helloworld.<ext>`).

## Requirements

No additional runtime requirements.

## Install (Local)

1. Package the extension:

```bash
cd vscode-helloworld
npx @vscode/vsce package
```

2. Install the generated `.vsix` file:

```bash
code --install-extension vscode-helloworld-<version>.vsix
```

## Updating the Extension

1. Bump `version` in `vscode-helloworld/package.json`.
2. Add release notes in `vscode-helloworld/CHANGELOG.md`.
3. Package a new VSIX:

```bash
cd vscode-helloworld
npx @vscode/vsce package
```

4. Update local installation:

```bash
code --install-extension vscode-helloworld-<new-version>.vsix --force
```
