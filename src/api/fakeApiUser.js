//example api request: replace with your API request here in folder API

import axios from "axios"

export const getUser = () => {
  try {
    return Promise.resolve({
      status: 'success',
      data: [
        { id: 1, name: 'Fira' },
        { id: 2, name: 'Nadia' },
        { id: 3, name: 'Handy' },
        { id: 4, name: 'Fakara' }
      ]
    })
  } catch (e) {
    return Promise.reject(e)
  }
}

export const getApi = async (url, data) => {
  console.log(url, data)
  try {
    let response = await axios.get(url + data)
    console.log(response, "response")
    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    return Promise.reject(e)
  }
}
export const PostApiWithOutToken = async (url, data) => {
  console.log(url, data)
  try {
    let response = await axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json"
      }
    })
console.log(response,"response");

    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    } else {
      return Promise.reject(response.data.message)
    }
  } catch (e) {
    console.log("error",e.response.data);
    return Promise.reject(Error(e.response.data.message))
  }
}
module.exports = {
  getUser,
  getApi,
  PostApiWithOutToken
}
