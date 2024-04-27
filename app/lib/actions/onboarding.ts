import { FormDataType } from "../types/schema";

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

// export async function savePetData(userId: string, data: FormDataType) {
//   if (!data) {
//     throw new Error("Invalid saving data");
//   }
//   let response: Response;
//   try {
//     response = await fetch("http://129.213.181.186/api/Pet", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         userId: userId,
//         name: data.petName,
//         specieId: data.petType,
//         birthday: data.petAge,
//         gender: data.petGender,
//         traits: data.petTraits,
//         interests: data.petInterests,
//         preferencePetType: data.preferencePetType,
//         preferencePetGender: data.preferencePetGender,
//         preferencePetTraits: data.preferencePetTraits,
//         breedId: data.petBreed,
//         description: "",
//       }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//   } catch (error) {
//     throw new Error("Failed to fetch data");
//   }
// }
