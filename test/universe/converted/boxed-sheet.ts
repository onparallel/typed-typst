// Converted from test/universe/corpus/boxed-sheet.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  data,
  define,
  doc,
  external,
  importPackage,
  inline,
  left,
  let_,
  link,
  m,
  pt,
  raw,
  rgb,
  set,
  show,
  smartquote,
  space,
  text,
} from '../../../src/index.ts'

export default () => {
  const boxedsheet = external('boxedsheet')
  const conceptBlock = define('concept-block').pos('arg1', T.content).returns(T.any).external()
  const inline_2 = define('inline').pos('arg1', T.any).returns(T.any).external()
  const boxedsheet_with = define('with')
    .named('authors', T.any, null)
    .named('color-box', T.any, null)
    .named('column-gutter', T.any, null)
    .named('font-size', T.any, null)
    .named('homepage', T.any, null)
    .named('line-skip', T.any, null)
    .named('num-columns', T.any, null)
    .named('numbered-units', T.any, null)
    .named('scaling-size', T.any, null)
    .named('title', T.any, null)
    .named('title-align', T.any, null)
    .named('title-delta', T.any, null)
    .named('title-number', T.any, null)
    .named('write-title', T.any, null)
    .named('x-margin', T.any, null)
    .named('y-margin', T.any, null)
    .returns(T.any)
    .external(boxedsheet)
  const [homepageDecl, homepage] = let_(
    'homepage',
    link('https://lzhms.github.io/', inline(link('https://lzhms.github.io/'))),
  )
  const [authorDecl, author] = let_('author', 'Zhihao Li')
  const [titleDecl, title_2] = let_('title', 'JavaScript Cheat Sheet')
  const [myColorsDecl, myColors] = let_(
    'my-colors',
    data([
      rgb(190, 149, 196),
      rgb('#f39f71'),
      rgb(102, 155, 188),
      rgb(229, 152, 155),
      rgb('6a4c93'),
      rgb('E0A500'),
      rgb('#934c84'),
      rgb('#934c5a'),
    ]),
  )
  return doc(
    importPackage('@preview/boxed-sheet:0.1.2', [boxedsheet, conceptBlock, inline_2]),
    set(text, { font: ['Times New Roman', 'SimSun'] }),
    m.lines(homepageDecl, authorDecl, titleDecl),
    myColorsDecl,
    show(
      boxedsheet_with({
        title: title_2,
        homepage: homepage,
        authors: author,
        writeTitle: true,
        titleAlign: left,
        titleNumber: true,
        titleDelta: pt(2),
        scalingSize: false,
        fontSize: pt(5.5),
        lineSkip: pt(5.5),
        xMargin: pt(10),
        yMargin: pt(30),
        numColumns: 4,
        columnGutter: pt(2),
        numberedUnits: false,
        colorBox: myColors,
      }),
    ),
    m.lines(
      m.heading(1, 'Basics'),
      inline(
        conceptBlock(
          blocks(
            inline`${inline_2('On page script')} Embeding the ${raw('JavaScript')} code in the ${raw('html')} file
just as follows. That ensures the browser can load the program script and run it. ${raw({ block: true, lang: 'js' }, '<script type="text/javascript">  ...\n</script>')}`,
            inline`${inline_2('Include external JS file')} If more codes cann't be directly placed in the ${raw('<script></script>')},
we can import the external JS file. ${raw({ block: true, lang: 'js' }, '<script src="filename.js"></script>')}`,
            inline`${inline_2('Delay - 1 second timeout')} This is a delayed function. When the time ends (1000
ms), it will execute the function which is empty in the example. ${raw({ block: true, lang: 'js' }, 'setTimeout(function () {\n  // something to do \n}, 1000);')}
${inline_2('Functions')}`,
            inline`${raw({ block: true, lang: 'js' }, 'function addNumbers(a, b) {\n  return a + b; ;\n}\nx = addNumbers(1, 2);')}
${inline_2('Edit DOM element')} Code for modifying the DOM (Document Object Model). ${raw('JavaScript')}
code will be execute to dynamically change the HTML elements. ${raw({ block: true, lang: 'js' }, 'document.getElementById("elementID").innerHTML = "Hello World!";')}`,
            inline(
              inline_2('Output'),
              space,
              raw(
                { block: true, lang: 'js' },
                'console.log(a);             // write to the browser console\ndocument.write(a);          // write to the HTML\nalert(a);                   // output in an alert box\nconfirm("Really?");         // yes/no dialog, returns true/false depending on user click\nprompt("Your age?","0");    // input dialog. Second argument is the initial value',
              ),
            ),
            inline(
              inline_2('Comments'),
              space,
              raw({ block: true, lang: 'js' }, '/* Multi line\ncomment */\n// One line'),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(1, 'Loops'),
      inline(
        conceptBlock(
          blocks(
            inline(
              inline_2('For Loop'),
              space,
              raw(
                { block: true, lang: 'js' },
                'for (var i = 0; i < 10; i++) {\n  document.write(i + ": " + i*3 + "<br />");\n}\nvar sum = 0;\nfor (var i = 0; i < a.length; i++) {\n  sum + = a[i];\n}               // parsing an array\nhtml = "";\nfor (var i of custOrder) {\n  html += "<li>" + i + "</li>";\n}',
              ),
            ),
            inline(
              inline_2('While Loop'),
              space,
              raw(
                { block: true, lang: 'js' },
                'var i = 1;           // initialize\nwhile (i < 100) {    // enters the cycle if statement is true\n  i *= 2;            // increment to avoid infinite loop\n  document.write(i + ", ");   // output\n}',
              ),
              space,
              inline_2('Do While Loop'),
              space,
              raw(
                { block: true, lang: 'js' },
                'var i = 1;           // initialize\ndo {                 // enters cycle at least once\n  i *= 2;                     // increment to avoid infinite loop\n  document.write(i + ", ");   // output\n} while (i < 100)       // repeats cycle if statement is true at the end',
              ),
            ),
            inline(
              inline_2('Break'),
              space,
              raw(
                { block: true, lang: 'js' },
                'for (var i = 0; i < 10; i++) {\n  if (i == 5) { break; }          // stops and exits the cycle\n  document.write(i + ", ");       // last output number is 4\n}',
              ),
            ),
            inline(
              inline_2('Continue'),
              space,
              raw(
                { block: true, lang: 'js' },
                'for (var i = 0; i < 10; i++) {\n  if (i == 5) { continue; }       // skips the rest of the cycle\n  document.write(i + ", ");       // skips 5\n}',
              ),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(1, 'Branch'),
      inline(
        conceptBlock(
          inline(
            space,
            inline_2('If - Else'),
            space,
            raw(
              { block: true, lang: 'js' },
              'if ((age >= 14) && (age < 19)) {        // logical condition\n  status = "Eligible.";               // executed if condition is true\n} else {                                // else block is optional\n  status = "Not eligible.";           // executed if condition is false\n}',
            ),
            space,
            inline_2('Switch Statement'),
            space,
            raw(
              { block: true, lang: 'js' },
              'switch (new Date().getDay()) {      // input is current day\n  case 6:                         // if (day == 6)\n    text = "Saturday";          \n    break;\n  case 0:                         // if (day == 0)\n    text = "Sunday";\n    break;\n  default:                        // else...\n    text = "Whatever";\n}',
            ),
            space,
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(1, 'Variables'),
      inline(
        conceptBlock(
          blocks(
            m.lines(
              inline(inline_2('Definition')),
              m.enum(
                m.item([
                  raw('var'),
                  space,
                  'defines the variable in the function scope and become global variable if it',
                  smartquote({ double: false }),
                  's defined in the outside of function. It can be used with the value of',
                  space,
                  raw('undefined'),
                  space,
                  'before definition and be alse defined repeatly.',
                ]),
                m.item([
                  raw('let'),
                  space,
                  'defines the variable in the block scope, such as',
                  space,
                  raw('for'),
                  ',',
                  space,
                  raw('if'),
                  space,
                  raw('while'),
                  space,
                  'or',
                  space,
                  raw('{}'),
                  '. It cann',
                  smartquote({ double: false }),
                  't be used before definition and not be defined repreatly.',
                ]),
                m.item([
                  raw('var g = /()/;'),
                  space,
                  'defines a regular expression using the pair symbols of',
                  space,
                  raw('/ /'),
                  space,
                  'and',
                  space,
                  raw('()'),
                  space,
                  'means a capturing group.',
                ]),
              ),
              inline(
                raw(
                  { block: true, lang: 'js' },
                  'var a;                          // variable\nvar b = "init";                 // string\nvar c = "Hi" + " " + "Joe";     // = "Hi Joe"\nvar d = 1 + 2 + "3";            // = "33"\nvar e = [2,3,5,8];              // array\nvar f = false;                  // boolean\nvar g = /()/;                   // RegEx\nvar h = function(){};           // function object\nconst PI = 3.14;                // constant\nvar a = 1, b = 2, c = a + b;    // one line\nlet z = \'zzz\';                  // block scope local variable',
                ),
              ),
            ),
            inline`${inline_2('Strict mode')} Directly writing the code of ${raw('"use strict";')} in the first
line of ${raw('JavaScript')}. ${raw({ block: true, lang: 'js' }, '"use strict";   // Use strict mode to write secure code\nx = 1;          // Throws an error because variable is not declared')}`,
            inline(
              inline_2('Values'),
              space,
              raw(
                { block: true, lang: 'js' },
                'false, true                     // boolean\n18, 3.14, 0b10011, 0xF6, NaN    // number\n"flower", \'John\'                // string\nundefined, null , Infinity      // special',
              ),
            ),
            inline(
              inline_2('Operators'),
              space,
              raw(
                { block: true, lang: 'js' },
                'a = b + c - d;      // addition, substraction\na = b * (c / d);    // multiplication, division\nx = 100 % 48;       // modulo. 100 / 48 remainder = 4\na++; b--;           // postfix increment and decrement',
              ),
            ),
            inline(
              inline_2('Bitwise operators'),
              space,
              raw(
                { block: true, lang: 'js' },
                '&\tAND \t 5 & 1 (0101 & 0001)\t1 (1)\n|\tOR \t 5 | 1 (0101 | 0001)\t5 (101)\n~\tNOT \t ~ 5 (~0101)\t10 (1010)\n^\tXOR \t 5 ^ 1 (0101 ^ 0001)\t4 (100)\n<<\tleft shift \t 5 << 1 (0101 << 1)\t10 (1010)\n>>\tright shift \t 5 >> 1 (0101 >> 1)\t2 (10)\n>>>\tzero fill right shift \t 5 >>> 1 (0101 >>> 1)\t2 (10)',
              ),
            ),
            inline(
              inline_2('Arithmetic'),
              space,
              raw(
                { block: true, lang: 'js' },
                'a * (b + c)         // grouping\nperson.age          // member\nperson[age]         // member\n!(a == b)           // logical not\na != b              // not equal\ntypeof a            // type (number, object, function...)\nx << 2  x >> 3      // binary shifting\na = b               // assignment\na == b              // equals\na != b              // unequal\na === b             // strict equal\na !== b             // strict unequal\na < b   a > b       // less and greater than\na <= b  a >= b      // less or equal, greater or eq\na += b              // a = a + b (works with - * %...)\na && b              // logical and\na || b              // logical or',
              ),
            ),
          ),
        ),
      ),
    ),
    m.heading(1, 'Data Types'),
    inline(
      conceptBlock(
        blocks(
          inline(
            inline_2('Basics'),
            space,
            raw(
              { block: true, lang: 'js' },
              'var age = 18;                           // number \nvar name = "Jane";                      // string\nvar name = {first:"Jane", last:"Doe"};  // object\nvar truth = false;                      // boolean\nvar sheets = ["HTML","CSS","JS"];       // array\nvar a; typeof a;                        // undefined\nvar a = null;                           // value null',
            ),
          ),
          inline(
            inline_2('Objects'),
            space,
            raw(
              { block: true, lang: 'js' },
              'var student = {                // object name\n  firstName:"Jane",           // list of properties and values\n  lastName:"Doe",\n  age:18,\n  height:170,\n  fullName : function() {     // object function\n    return this.firstName + " " + this.lastName;\n  }\n}; \nstudent.age = 19;           // setting value\nstudent[age]++;             // incrementing\nname = student.fullName();  // call object function',
            ),
          ),
        ),
      ),
    ),
    m.heading(1, 'Strings'),
    inline(
      conceptBlock(
        inline(
          space,
          raw(
            { block: true, lang: 'js' },
            'var abc = "abcdefghijklmnopqrstuvwxyz";\nvar esc = \'I don\\\'t \\n know\';   // \\n new line\nvar len = abc.length;           // string length\nabc.indexOf("lmno");            // find substring, -1 if doesn\'t contain \nabc.lastIndexOf("lmno");        // last occurrence\nabc.slice(3, 6);                // cuts out "def", negative values count from behind\nabc.replace("abc","123"); // find and replace, takes regular expressions\nabc.toUpperCase();              // convert to upper case\nabc.toLowerCase();              // convert to lower case\nabc.concat(" ", str2);          // abc + " " + str2\nabc.charAt(2);                  // character at index: "c"\nabc[2];                         // unsafe, abc[2] = "C" doesn\'t work\nabc.charCodeAt(2);              // character code at index: "c" -> 99\nabc.split(",");         // splitting a string on commas gives an array\nabc.split("");                  // splitting on characters\n128.toString(16);      // number to hex(16), octal (8) or binary (2)',
          ),
          space,
        ),
      ),
    ),
    m.heading(1, 'Dates'),
    inline(
      conceptBlock(
        blocks(
          inline(
            inline_2('Objects'),
            space,
            raw(
              { block: true, lang: 'js' },
              'Wed Jun 11 2025 18:31:19 GMT+0800 (中国标准时间)\nvar d = new Date();\n1749637879070 milliseconds passed since 1970\nNumber(d) \nDate("2017-06-23");                 // date declaration\nDate("2017");                       // is set to Jan 01\nDate("2017-06-23T12:00:00-09:45");  // date - time YYYY-MM-DDTHH:MM:SSZ\nDate("June 23 2017");               // long date format\nDate("Jun 23 2017 07:45:00 GMT+0100 (Tokyo Time)"); // time zone',
            ),
          ),
          inline(
            inline_2('Get Times'),
            space,
            raw(
              { block: true, lang: 'js' },
              'var d = new Date();\na = d.getDay();     // getting the weekday\n\ngetDate();          // day as a number (1-31)\ngetDay();           // weekday as a number (0-6)\ngetFullYear();      // four digit year (yyyy)\ngetHours();         // hour (0-23)\ngetMilliseconds();  // milliseconds (0-999)\ngetMinutes();       // minutes (0-59)\ngetMonth();         // month (0-11)\ngetSeconds();       // seconds (0-59)\ngetTime();          // milliseconds since 1970',
            ),
          ),
          inline(
            inline_2('Setting part of a date'),
            space,
            raw(
              { block: true, lang: 'js' },
              'var d = new Date();\nd.setDate(d.getDate() + 7); // adds a week to a date\n\nsetDate();          // day as a number (1-31)\nsetFullYear();      // year (optionally month and day)\nsetHours();         // hour (0-23)\nsetMilliseconds();  // milliseconds (0-999)\nsetMinutes();       // minutes (0-59)\nsetMonth();         // month (0-11)\nsetSeconds();       // seconds (0-59)\nsetTime();          // milliseconds since 1970)',
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(1, 'Arrays'),
      inline(
        conceptBlock(
          inline(
            space,
            raw(
              { block: true, lang: 'js' },
              'var dogs = ["Bulldog", "Beagle", "Labrador"]; \nvar dogs = new Array("Bulldog", "Beagle", "Labrador");  // declaration\n\nalert(dogs[1]);          // access value at index, first item being [0]\ndogs[0] = "Bull Terier";    // change the first item\n\nfor (var i = 0; i < dogs.length; i++) {     // parsing with array.length\n  console.log(dogs[i]);\n}',
            ),
            space,
            inline_2('Methods'),
            space,
            raw(
              { block: true, lang: 'js' },
              'dogs.toString();                    // convert to string: results "Bulldog,Beagle,Labrador"\ndogs.join(" * ");        // join: "Bulldog * Beagle * Labrador"\ndogs.pop();                             // remove last element\ndogs.push("Chihuahua");             // add new element to the end\ndogs[dogs.length] = "Chihuahua";        // the same as push\ndogs.shift();                           // remove first element\ndogs.unshift("Chihuahua");           // add new element to the beginning\ndelete dogs[0];      // change element to undefined (not recommended)\ndogs.splice(2, 0, "Pug", "Boxer");      // add elements (where, how many to remove, element list)\nvar animals = dogs.concat(cats,birds);  // join two arrays (dogs followed by cats and birds)\ndogs.slice(1,4);                        // elements from [1] to [4-1]\ndogs.sort();                            // sort string alphabetically\ndogs.reverse();          // sort string in descending order\nx.sort(function(a, b){return a - b});   // numeric sort\nx.sort(function(a, b){return b - a});   // numeric descending sort\nhighest = x[0];      // first item in sorted array is the lowest (or highest) value\nx.sort(function(a, b){return 0.5 - Math.random()}); // random order sort',
            ),
            space,
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(1, 'References'),
      m.enum(
        m.item([
          link('https://htmlboxedsheet.com/js/', inline`JS Cheat Sheet: ${link('https://htmlboxedsheet.com/js/')}`),
        ]),
        m.item([link('https://htmlboxedsheet.com/', inline`HTML Cheat Sheet: ${link('https://htmlboxedsheet.com/')}`)]),
      ),
    ),
  )
}
