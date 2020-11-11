import React from 'react'

export default function Page(props) {
    return (
        <div>
            <h1>You are looking at post no {props.id}</h1>
        </div>
    )
}
Page.getInitialProps=async({query})=>{
    return query;

}