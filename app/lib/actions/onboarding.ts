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

export async function savePetData(data: any) {
  if (!data) {
    throw new Error("Invalid saving data");
  }

  let response: Response;
  try {
    response = await fetch("http://129.213.181.186/api/Pet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to save data");
    }
  } catch (error: any) {
    throw new Error("Failed to save data: " + error.message);
  }
}
