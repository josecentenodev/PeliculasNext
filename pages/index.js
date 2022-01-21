import Head from "next/head"
import React from "react"
import Base from "../layouts/base"
import axios from "axios"

export default class extends React.Component {
    static async getInitialProps({ query }) {
        const pagina = query.pagina ? Number(query.pagina) : 1;
        const respuesta = await axios.get(`http://www.omdbapi.com/?apikey=2a3cf2a8&s=batman&page=${pagina}`)
        const peliculas = respuesta.data.Search

        return { peliculas, pagina }
    }

render() {
    return (
        <Base>
        <Head>
            <title>DevCitoMovies</title>
        </Head>
            <div>
                { this.props.peliculas.map((p)=> <h1>{p.Title}</h1>) }
            </div>
        </Base>

    )
}
}