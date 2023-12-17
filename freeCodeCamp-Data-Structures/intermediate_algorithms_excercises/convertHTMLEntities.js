const entities = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
};
function convertHTML(str) {
  const entitiesKeys = Object.keys(entities);
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (entitiesKeys.includes(str[i])) {
      newStr += entities[str[i]];
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

convertHTML('Dolce & Gabbana'); // should return the string Dolce &amp; Gabbana.
convertHTML('Hamburgers < Pizza < Tacos'); // should return the string Hamburgers &lt; Pizza &lt; Tacos.
convertHTML('Sixty > twelve'); // should return the string Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"'); // should return the string Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List"); // should return the string Schindler&apos;s List.
convertHTML('<>'); // should return the string &lt;&gt;.
convertHTML('abc'); // should return the string abc.
