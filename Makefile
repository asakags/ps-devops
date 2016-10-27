.PHONY: test

build:
	ansible-playbook cm/site.yml -i 'localhost, ' -c local -vv
install:
	npm install
test:
	npm test
start:
	node app/server.js
