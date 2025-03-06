import { CatAPI } from "./QuizService";

export const FetchCatAPI = async() => {
    try {
      const reponse = await CatAPI.get('/fact');
      return reponse.data;
    } catch (error) {
        throw error;
    }
}