import { getCustomRepository } from "typeorm"
import { ComplimentsRespositories } from "../repositories/ComplimentsRespositories"


class ListUserSendComplimentsService {

    async execute(user_id: string) {

        const complimentsRepositories = getCustomRepository(ComplimentsRespositories);

        const compliments = await ComplimentsRespositories.find({
            where: {
                user_sender: user_id
            }
        })

        return compliments;
    }

}

export { ListUserSendComplimentsService {
}