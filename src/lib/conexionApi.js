const url = 'https://jairodanielmt-opticaads.hf.space'

export const obtenerGet = async (endpoint) => {
    const response = await fetch(`${url}/${endpoint}`)
    const data = await response.json()
    return data
}

export const registrarPost = async (endpoint, data) => {
    const response = await fetch(`${url}/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    })
    const res = await response.json()
    return res
}

export const obtenerEspecifico = async (endpoint, dato, funcionSet) => {
    const response = await fetch(`${url}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dato),
    })
    const data = await response.json()
    funcionSet(data)
}

export const actualizarPut = async (endpoint, data) => {
    const response = await fetch(`${url}/${endpoint}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    })
    const res = await response.json()
    return res
}