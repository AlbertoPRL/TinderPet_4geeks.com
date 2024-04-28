"use server";

import { PetForm } from "../types/Dtos/PetDto";

export async function fetchTraits() {
  let response: Response;
  try {
    response = await fetch("http://129.213.181.186/api/Resource");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();

  return data;
}

export async function fetchInterests() {
  let response: Response;
  try {
    response = await fetch(
      "http://129.213.181.186/api/Resource/api/Resource/GetInterests"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();

  return data;
}

export async function fetchBreeds() {
  let response: Response;
  try {
    response = await fetch(
      "http://129.213.181.186/api/Resource/api/Resource/GetBreeds"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();

  return data;
}

export async function savePetData(
  data: PetForm,
  token: string | null | undefined
) {
  if (!data) {
    throw new Error("Invalid saving data");
  }

  let response: Response;
  try {
    response = await fetch("http://129.213.181.186/api/Pet", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: data.userId,
        name: data.name,
        specieId: data.specieId,
        breedId: data.breedId,
        gender: data.gender,
        description: data.description,
        birthday: data.birthday,
        traits: data.traits,
        interests: data.interests,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to save data");
    }
  } catch (error: any) {
    throw new Error("Failed to save data: " + error.message);
  }
  const petId = await response.json();
  return petId;
}
