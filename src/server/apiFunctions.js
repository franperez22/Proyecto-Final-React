import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log('data', data)
      setData(data)
    })
    .catch(error => {
      console.error('Error al obtener productos:', error)
      throw error
    })
  }, [url])

  return { data }
}