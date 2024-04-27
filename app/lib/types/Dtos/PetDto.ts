export interface Pet{
    Name: string | null;
    Specie: string | null;
    Breed: string | null;
    Gender: 0 | 1;
    Description?: string;
    Birthday?: Date;
    PetInterests: string[] | null;
    Traits: string[] | null;
}