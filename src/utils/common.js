export const storeData = (data) => {
  localStorage.setItem("data", data);
};

export const getData = () => {
  try {
    const storageData = localStorage.getItem("data");
    const data = JSON.parse(storageData);
    return data ||  [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

