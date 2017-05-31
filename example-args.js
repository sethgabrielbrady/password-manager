

let argv = require('yargs')
  .command('hello', 'Greets the user', function(yargs){
    yargs.options({
      name: {
        demand: true,
        alias: 'n',
        description: 'A first name goes here',
        type: 'string'
      },
      lastName: {
        demand: true,
        alias: 'l',
        description: 'A last name goes here',
        tyoe: 'string'
      }
    }).help('help');
  })
  .command('get', 'some description', function(yargs){

  })
  .help('help')
  .argv;

let command = argv._[0];

console.log(argv);

if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastName !== 'undefined'){
  console.log('Hello ' + argv.name + ' ' +  argv.lastName + '!');
}else if (command === 'hello' && typeof argv.name !== 'undefined'){
  console.log('Hello ' + argv.name + ' !');
}else if (command === 'hello'){
  console.log("Hello You!");
}
