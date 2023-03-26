const { default: axios } = require('axios');

module.exports = async () => {
  try {
    const res = await axios.get('http://localhost:1337/api/locations?pagination[start]=0&pagination[limit]=-1&sort[0]=Name&populate=*');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};