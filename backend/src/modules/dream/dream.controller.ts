import { FastifyRequest, FastifyReply } from "fastify";
import { successResponse } from "../../pkg/request/response.handler";
import dreamService from "./dream.service";

class DreamController {

async dream(req: FastifyRequest<{ Body: { dream: string } }>, reply: FastifyReply) {
    const { dream } = req.body

    const response = await dreamService.dream(dream)
    
    return successResponse("success", { dream: response }, reply)
}
}

export default new DreamController()
