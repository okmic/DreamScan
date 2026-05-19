import { FastifyInstance } from 'fastify';
import dreamController from './dream.controller';

export default class DreamModule {
    constructor(server: FastifyInstance) {
        this.getRoutes(server)
    }

    private getRoutes(server: FastifyInstance){
        server.post('/api/dream', {
            handler: dreamController.dream,
        })
    }
};