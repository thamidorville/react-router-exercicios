
export const goToHomePage = (navigate) => {
navigate("/")
}

export const goToProfilePage = (navigate, name) => {
    navigate(`profile/${name}`)
}

export const goToErrorPage = (navigate) => {
navigate("/*")
}

export const ProductPage = (navigate, id) => {
    navigate(`/product/:${id}`)
}