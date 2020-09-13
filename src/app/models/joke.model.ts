export class JokeDto {
  id: string;
  jokeText: string;
  categories: string[];
  constructor(jokeData: any) {
    this.id = jokeData.id;
    this.jokeText = jokeData.joke;
    this.categories = jokeData.categories;
  }
}
