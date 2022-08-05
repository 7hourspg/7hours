import React, { useEffect, useState } from 'react'
import Card  from './Card'

import axios from 'axios'

function Userdata() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://api.github.com/users').then(
            (response) => {
                setData(response.data)
                console.log(response.data)
            }
        )
    }, [])

    return (
        <>
            <div className="Card_container" >

                {
                    data.map((data) => {
                        return (
                            <div className="crd_bx" key={data.id}>
                                <Card img={data.avatar_url} login={data.login} id={data.id}  url={data.html_url}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Userdata