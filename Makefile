install:
	npm install
start:
	node src/bin/brain-calc.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
