const mysql = require('mysql');
const environment = "development";
const config = require("./config.js")[environment];

const con = mysql.createConnection({
    host: config.database.host, // O host do banco. Ex: localhost
    user: config.database.user, // Um usuário do banco. Ex: user 
    password: config.database.password, // A senha do usuário. Ex: user123
    database: config.database.database // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

// verificando se houve erro
con.connect((err) => {
    if (err) {
        console.log('Erro ao conectar...', err)
        return
    }
    console.log('Connection Realizada!')
})

con.query('DELETE FROM agendamento where ID = ? ', ['1'], (err,rows) => {
    if(err) throw err
    console.log("Registro Excluido com sucesso");
})

/*
con.query('UPDATE agendamento SET nome = ? where ID = ? ', ['Tiago','3'], (err,rows) => {
    if(err) throw err
    console.log("Registro salvo com sucesso");
})
*/

/*
insert
const agendamento = {nome:'Novo Nome', email: 'fujimail@uol.com.br', ativo:0 }
con.query('INSERT INTO agendamento SET ? ', agendamento, (err,rows) => {
    if(err) throw err
    console.log("Registro salvo com sucesso");
})
*/
// consultando com forEach
/*
con.query('select * from agendamento', (err,rows) => {
    if(err) throw err

    rows.forEach(row => {
        console.log(`${row.nome}`+ " - " +`${row.email}`);
    })
})*/

/*
con.query('select * from agendamento', (err,rows) => {
	if(err) throw err
	console.log('agendamentos', rows, '\n\n')
})
*/

//encerrando conexão

con.end((err) => {
    if(err) {
        console.log('Erro ao finalizar conexão...', err)
        return 
    }
    console.log('Conexão encerrada...')
})

