# XMA Skeleton

Simple Node application framework.

## Install

Import node packages
> npm install

Import bower packages
> bower install

Start Node server
> forever strart server.js

Compile & watch assets
> gulp

## Vhost

> vi /var/www/vhosts/mydomain.com/conf/vhost.conf

	ServerName mydomain.com
	ServerAlias mydomain.com
	ProxyRequests off
	<Proxy *>
		Order allow,deny
		Allow from all
	</Proxy>
	ProxyPass / http://localhost:3000/
	ProxyPassReverse / http://localhost: 3000/
	ProxyPreserveHost on

## Required

- Node
- Forever
- Bower
- Gulp