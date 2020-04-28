install:
	npm install
start:
	node src/bin/brain-progression.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
