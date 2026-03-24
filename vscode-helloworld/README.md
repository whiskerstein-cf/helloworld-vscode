# VSCode HelloWorld

Generate Hello World starter code automatically when you create specific filenames.

## Features

- Auto-populates `helloworld.py` with Python Hello World code.
- Auto-populates `helloworld.java` with Java Hello World code.
- Runs on file creation and only writes if the new file is empty.

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

When the extension is active, creating either of these files in your workspace triggers template generation:

- `helloworld.py`
- `helloworld.java`

The filename match is exact (`helloworld.<ext>`).

## Requirements

No additional runtime requirements.

## Install (Local)

1. Package the extension:

```bash
npx @vscode/vsce package
```

2. Install the generated `.vsix` file:

```bash
code --install-extension vscode-helloworld-<version>.vsix
```

## Updating the Extension

When you make changes and want users to receive an update:

1. Bump `version` in `package.json` (for example `0.1.0` -> `0.1.1`).
2. Add release notes in `CHANGELOG.md`.
3. Package a new VSIX:

```bash
npx @vscode/vsce package
```

4. Update local installation:

```bash
code --install-extension vscode-helloworld-<new-version>.vsix --force
```

## Release Notes

See `CHANGELOG.md`.
