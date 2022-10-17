import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PokeapiResponse } from './interfaces/pokeapi-response.interface';
import { Pokemon } from './../pokemon/entities/pokemon.entity';
import { AxiosAdapter } from './../common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany(); //? delete * from pokemons;

    const { results } = await this.http.get<PokeapiResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemons = results.map(({ name, url }) => {
      const segmets = url.split('/');
      const no: number = +segmets[segmets.length - 2];

      return {
        name,
        no,
      };
    });

    await this.pokemonModel.insertMany(pokemons);

    return {
      msg: 'Seed executed successfully',
    };
  }
}
