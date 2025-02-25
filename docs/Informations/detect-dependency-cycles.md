# Detect Dependency Cycles

You can use following package and command to detect dependency cycles in code.

https://www.npmjs.com/package/madge

### text export
- npx madge --extensions js,ts --circular .

### image export (Ubuntu/Wsl)
- apt-get install graphviz
- npx madge --extensions js,ts --circular --image graph.svg .


### examples

#### as graphic
npx madge --image graph_server.svg dist/apps/server/apps/server.app.js
npx madge --circular --image graph_server_circular.svg dist/apps/server/apps/server.app.js

npx madge --exclude '^(?!.*entity).*$' --image graph_server_entities.svg dist/apps/server/apps/server.app.js
npx madge --circular --exclude '^(?!.*entity).*$' --image graph_server_circular_entities.svg dist/apps/server/apps/server.app.js

#### as text
npx madge --json dist/apps/server/apps/server.app.js >> output.json 

### more solutions

https://github.com/jmcdo29/nestjs-spelunker

https://sanyamaggarwal.medium.com/automate-circular-dependency-detection-in-your-node-js-project-394ed08f64bf

