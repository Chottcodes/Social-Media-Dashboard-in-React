const getData = async () => {
  try {
    const response = await fetch(
      "https://socialmeadiainformation-c2cdd8fzeqe4g8cz.westus-01.azurewebsites.net/Social/SocialMediaInfo"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export { getData };
