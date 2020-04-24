install:
	npm install
start:
	node src/bin/brain-gcd.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
