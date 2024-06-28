import axios from "axios";

const API_URL = "http://cors-anywhere.herokuapp.com/localhost:8080/api"

// const API_URL = "http://localhost:8080/api"

export const uploadImage = (file) => {
    let formData = new FormData();
    formData.append('file', file);
    return axios.post(`${API_URL}/images/upload`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            credentials: "Include"
        }
    });

}

export const viewImage = (imageName) => {
    return `${API_URL}/images/view/${imageName}`;
}

export const createItem = (item) => {
    return axios.post(`${API_URL}/inventory/items/`, item, {
        credentials: 'include',
    });
}

export const updateItem = (id, item) => {
    return axios.put(`${API_URL}/inventory/items/${id}`, item, {
        credentials: 'include',
    });
}
export const getAllItems = () => {
    return axios.get(`${API_URL}//inventory/items`,
        {
            credentials: 'include',
        }
    );
}
export const deleteItem = (id) => {
    return axios.delete(`${API_URL}/inventory/items/${id}`, {
        credentials: 'include',
    })

}

export const getIteam = (id) => {
    return axios.get(`${API_URL}/inventory/items/${id}`, {
        credentials: 'include',
    });

}
export const getInventoryStock = () => {
    return axios.get(`${API_URL}/inventory/stock`, {
        credentials: 'include',
    });

};