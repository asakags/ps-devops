.PHONY: test

build:
	ansible-playbook cm/site.yml -i 'localhost, ' -c local -vv
install:
	npm install
test:
	nodejs ./node_modules/.bin/mocha app/test
start:
	nodejs app/server.js
