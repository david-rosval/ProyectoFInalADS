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
    if (data.error || data.length === 0 || Object.keys(data).length === 0) {
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

export const procesarBoleta = async (precioTotal, carrito, adelanto, idprescripcion, descripcion, precioLunas) => {
    const responseRegistrarBoleta = await fetch(`${url}/boletas`, {
        method: 'POST',
        body: JSON.stringify({
            "precio_total": precioTotal,
            "estado_recojo": "pendiente"
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
    const resRegistrarBoleta = await responseRegistrarBoleta.json()
    console.log(resRegistrarBoleta)
    

    const boleta = await fetch(`${url}/boleta/ultima`)
    const responseBoleta = await boleta.json()
    console.log(responseBoleta)


    carrito.forEach(async item => {
        console.log(item);
        const responseMonturasPedidos = await fetch(`${url}/monturas_pedidos`, {
            method: 'POST',
            body: JSON.stringify({ 
                "id_montura_inventario": item["monturaInventario"]["id_montura_inventario"],
                "cantidad": item["cantidad"],
                "precio": item["monturaInventario"]["precio_unit"]*item["cantidad"],
                "id_boleta": responseBoleta["id_boleta"] 
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const resMonturasPedidos = await responseMonturasPedidos.json()
        console.log(resMonturasPedidos)
    })

    const lunasPedido = await fetch(`${url}/lunas_pedido`, {
        method: 'POST',
        body: JSON.stringify({ 
            "id_prescripcion": idprescripcion,
            "precio": parseFloat(precioLunas),
            "id_boleta": responseBoleta["id_boleta"] ,
            "descripcion": descripcion,
            "cantidad": 1
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
    const resLunasPedido = await lunasPedido.json()
    console.log(resLunasPedido);

    const responsePDF = await fetch(`${url}/boleta/descargarPDF/${responseBoleta["id_boleta"]}/${adelanto}`)

    window.open(responsePDF.url, "_blank");
}

export const prescripcionPdff = async (idPrescripcion) => {
    const responsePDF = await fetch(`${url}/prescripcion/pdf/${idPrescripcion}`)
    window.open(responsePDF.url, "_blank");
}