import axios from "axios";

export const fetchData = async (token) => {
    const res = await axios.get('http://dev.arinnovations.io/api/product/index.php?token=' + token);
    return res.data;
}