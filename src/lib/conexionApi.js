const url = import.meta.env.VITE_API_URL

export const cargarApi = async () => {
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json()
        console.log(data);
    }
}

export const obtenerGet = async (endpoint, funcionSet, funcionSetError) => {
    const response = await fetch(`${url}/${endpoint}`)
    const data = await response.json()
    if (data.error || data.length === 0) {
        funcionSetError(true)
    }
    funcionSet(data)
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

export const obtenerEspecifico = async (endpoint, dato, funcionSet, funcionSetError) => {
    const response = await fetch(`${url}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dato),
    })
    const data = await response.json()
    funcionSet(data)
    if (data.error || data.length === 0) {
        funcionSetError(true)
    }
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

export const getEspecifico = async (endpoint, dato) => {
    const response = await fetch(`${url}/${endpoint}`)
    const data = await response.json()
    return data
} 

export const emitirPdfPrescripcion = (idPrescripcion) => {
    const urlPdf = `${url}/prescripcion/pdf/${idPrescripcion}` 
    return urlPdf
}