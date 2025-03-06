import { CatAPI } from "./QuizService";

export const FetchCatAPI = async() => {
    try {
      const reponse = await CatAPI.get('/fact');
      console.log(reponse)
      return reponse.data;
    } catch (error) {
        throw error;
    }
}