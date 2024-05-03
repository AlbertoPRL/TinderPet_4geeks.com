export interface Pet {
  id : string | null;
  name: string | null;
  specie: string | null;
  specieId: string | null;
  breed: string | null;
  gender: 0 | 1;
  description?: string;
  birthday?: Date;
  petInterests: string[] | null;
  traits: string[] | null;
}

export interface PetForm {
  userId: string | undefined;
  name: string;
  specieId: string;
  breedId: string;
  gender: number;
  description?: string;
  birthday?: Date;
  interests: string[];
  traits: string[];
}
