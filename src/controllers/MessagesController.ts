import { Request, Response } from "express";
import { MessageService } from "../services/MessagesService";


class MessageController {

    async create(req: Request, res: Response) {
        const { admin_id, text, user_id } = req.body;
        const messagesService = new MessageService();

        const message = await messagesService.create({
            admin_id,
            text,
            user_id
        });

        return res.json(message);
    }

    //localhost:3333/messages/idDoUsuario
    async showByUser(req: Request, res: Response) {
        const {id} = req.params;

        const messagesService = new MessageService();

        const list = await messagesService.listByUser(id);

        return res.json(list);
    }
}

export { MessageController };