const fs = require('fs');
const babel = require('@babel/core');
const html = fs.readFileSync('index.html', 'utf8');
const babelCode = html.split('<script type="text/babel">')[1].split('</script>')[0];
try {
  babel.transformSync(babelCode, { presets: ['@babel/preset-react'] });
  console.log('Syntax OK');
} catch (e) {
  console.error('Babel Error:', e.message);
}
