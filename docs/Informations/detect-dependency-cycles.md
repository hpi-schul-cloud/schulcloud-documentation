# Detect Dependency Cycles

You can use following package and command to detect dependency cycles in code.

https://www.npmjs.com/package/madge

### text export
npx madge --extensions js,ts --circular .

### image export
apt-get install graphviz
npx madge --extensions js,ts --circular --image graph.svg .
