import { FastifyRequest, FastifyReply } from "fastify";
import { successResponse } from "../../pkg/request/response.handler";
import dreamService from "./dream.service";
import { ErrorBadRequest } from "../../pkg/errors/errors";

class DreamController {

async dream(req: FastifyRequest<{ Body: { dream: string } }>, reply: FastifyReply) {
    const { dream } = req.body
    if(!dream) throw new ErrorBadRequest("Введите сон")
    const response = await dreamService.dream(dream)
    
    return successResponse("success", { dream: response }, reply)
}
}

export default new DreamController()
