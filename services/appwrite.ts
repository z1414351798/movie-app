import { Client, Databases, ID, Query } from "react-native-appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const ENDPOINT = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!;

const client = new Client()
  .setEndpoint(ENDPOINT)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
  try {
    const result = await database.listDocuments(DATABASE_ID, "metrics", [
      Query.equal("searchTerm", query),
    ]);

    if (result.documents.length > 0) {
      const existingMovie = result.documents[0];
      await database.updateDocument(
        DATABASE_ID,
        "metrics",
        existingMovie.$id,
        {
          count: existingMovie.count + 1,
        }
      );
    } else {
      await database.createDocument(DATABASE_ID, "metrics", ID.unique(), {
        searchTerm: query,
        movie_id: movie.id,
        title: movie.title,
        searched: true,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.error("Error updating search count:", error);
    throw error;
  }
};

export const getTrendingMovies = async (): Promise<
  TrendingMovie[] | undefined
> => {
  try {
    const result = await database.listDocuments(DATABASE_ID, "metrics", [
      Query.equal("searched",true),
      Query.limit(5),
      Query.orderDesc("count"),
    ]);

    return result.documents as unknown as TrendingMovie[];
  } catch (error) {
    console.error(error);
    return undefined;
  }


};

export const updateSavedMovie = async (id: string, movie: MovieDetails, saved: boolean, user_id: string) => {
  try {
    const result = await database.listDocuments(DATABASE_ID, "saved-movie", [
      Query.equal("movie_id", id),
      Query.equal("user_id",user_id)
    ]);

    if (result.documents.length > 0) {
      // update only saved field
      await database.updateDocument(
        DATABASE_ID,
        "saved-movie",
        result.documents[0].$id,
        {
          saved: saved,
        }
      );
    } else {
      // create a new record
      await database.createDocument(DATABASE_ID, "saved-movie", ID.unique(), {
        movie_id: id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
        saved: saved,
        user_id: user_id
      });
    }
  } catch (error) {
    console.error("updateSavedMovie error:", error);
    throw error;
  }
};


export const getSavedMovies = async (user_id:string): Promise<
  any[] | undefined
> => {
  try {
    const result = await database.listDocuments(DATABASE_ID, "saved-movie", [
      Query.equal("saved",true),
      Query.equal("user_id",user_id)
    ]);

    return result.documents as unknown as [];
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const getSavedMovieById = async (id: string, user_id: string): Promise<
  any[] | undefined
> => {
  try {
    const result = await database.listDocuments(DATABASE_ID, "saved-movie", [
      Query.equal("movie_id", id),
      Query.equal("user_id",user_id)
    ]);

    return result.documents as unknown as [];
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
