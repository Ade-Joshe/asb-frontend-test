import React from 'react'
import { Link } from 'react-router-dom'
import { divisionSummary, email, fingerprint, info, journal, location, moduleHistory, phone } from '../../assets'

export const AnalyticsCard = ({ count, label }) => {
    return (
        <div className='card analytics'>
            <div className='flex'>
                <h2>{count}</h2>
                <img src={info} alt={"info icon"} />
            </div>
            <p>{label}</p>
        </div>
    )
}

export const DivisionSummarySection = () => {
    return (
        <div className='card summary mb-3'>
            <div className='flex mb-3'>
                <img src={divisionSummary} alt={""} />
                <p className='ml-2'>Division Summary</p>
            </div>

            <div className='flex mb-1'>
                <img src={phone} alt={""} />
                <p className='ml-2 small'>0801 234 5678</p>
            </div>
            <div className='flex mb-1'>
                <img src={email} alt={""} />
                <p className='ml-2 small'>asbfefr@gmail.com</p>
            </div>
            <div className='flex mb-1'>
                <img src={location} alt={""} />
                <p className='ml-2 small'>Mojidi, Lagos</p>
            </div>
            <div className='flex mb-1'>
                <img src={journal} alt={""} />
                <Link to={"#"} className='ml-2 small underline'>2 Journal entries</Link>
            </div>
            <div className='flex mb-1'>
                <img src={fingerprint} alt={""} />
                <p className='ml-2 small'>24 fingerprints enrolled</p>
            </div>
        </div>
    )
}