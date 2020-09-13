import {JokeDto} from "../models/joke.model";

export interface JokeSingleResponseDto {
  type: string;
  value: JokeDto
}
