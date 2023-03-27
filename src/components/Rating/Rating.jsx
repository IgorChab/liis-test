import React from 'react'

import { Star } from '../Star/Star'

export const Rating = ({ rating }) => {



    // let list = new Array(rating).fill(<Star active/>).concat(new Array(5 - rating).fill(<Star/>))

    let list = []

    for (let i = 0; i < 5; i++) {
        if(i < rating) {
            list[i] = <Star active key={i}/>
        } else {
            list[i] = <Star key={i}/>
        }
    }

    return (
        <div>
            {list}
        </div>
    )
}
