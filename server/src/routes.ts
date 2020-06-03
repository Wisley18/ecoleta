import express from 'express';

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController';

/*
    Padrão para o nome dos métodos dos controllers:
        index = listagem
        show = exibir um unico registro
        create = criar
        update = atualizar
        delete = 
*/
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

// #region CONCEITOS BÁSICO
const users = [
    'José',
    'João',
    'Pedro'
];

//ROTA USANDO QUERY STRING
routes.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

//ROTA USANDO PARAMETRO OBRIGATÓRIO
routes.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

//ROTA USANDO REQUEST BODY
routes.post('/users', (request, response) => {
    const data = request.body;
    
    const user = {
        name: data.name,
        email: data.email  
    };

    return response.json(user);
});
//#endregion

export default routes;

