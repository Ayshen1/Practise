const baseURL = "https://northwind.vercel.app/api";

//get all Categories
export const getAllCategories = async () => {
  let globalData;
  await fetch(`${baseURL}/suppliers`)
    .then((response) => response.json())
    .then((data) => {
      globalData = data;
    });
  return globalData;
};

//get Category by ID
export const getCategoryByID = async (id) => {
  let globalData;
  await fetch(`${baseURL}/suppliers/${id}`)
    .then((response) => response.json())
    .then((data) => {
      globalData = data;
    });
  return globalData;
};

//delete Category by ID
export const deleteCategoryByID = async (id) => {
  await fetch(`${baseURL}/suppliers/${id}`, {
    method: "DELETE",
  });
};
//post Category
export const postSupplier = async (category) => {
  await fetch(`${baseURL}/suppliers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
};

//put Category by ID
export const editCategoryByID = async (id, category) => {
  await fetch(`${baseURL}/suppliers/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
};