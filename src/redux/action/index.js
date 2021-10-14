import { ADD_ARTICLE } from "../contants/action-type"

export function addArticle(payload){
    return { type:ADD_ARTICLE, payload }
};