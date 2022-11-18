import axios from "axios"
const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const instance = axios.create({
    baseURL: 'https://res.cloudinary.com'
})

export const fetchCloudinaryImages = async (isMobile) => {
    let tag = ""
    if (isMobile)
        tag = "mobile"
    else
        tag = "banner"
    console.log(tag)
    const epoch = Date.now()
    return await instance({
        url: `/${cloudName}/image/list/v${epoch}/${tag}.json`,
        method: 'GET'
    })
}