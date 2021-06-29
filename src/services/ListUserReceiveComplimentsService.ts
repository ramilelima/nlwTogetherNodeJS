import { getCustomRepository } from "typeorm"
import { ComplimentsRespositories } from "../repositories/ComplimentsRespositories"


class ListUserReceiveComplimentsService {

    async execute(user_id: string) {

        const complimentsRepositories = getCustomRepository(ComplimentsRespositories);

        const compliments = await ComplimentsRespositories.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceive", "tag"],
        })

        return compliments;
    }

}

export { ListUserReceiveComplimentsService }