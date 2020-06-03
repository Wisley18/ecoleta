import knex from 'knex'; //Interface para fazer as consultas no BD
import path from 'path'; //Padroniza o acesso a arquivos no projeto, modificando automaticamente de acordo com o SO

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
});

export default connection;