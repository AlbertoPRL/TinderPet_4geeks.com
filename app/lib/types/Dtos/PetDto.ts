export interface Pet {
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