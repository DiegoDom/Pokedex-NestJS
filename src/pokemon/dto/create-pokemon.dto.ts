import { IsInt, IsNotEmpty, IsPositive, IsString, Min } from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  readonly no: number;

  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
