import React from 'react'
import CreateExam from '../components/createExam/CreateExam'
import Exams from '../components/exams/Exams'

export const Home = () => {
    return (
        <div className="grid-2">
            <div>
            <CreateExam/>
            </div>
            <div>
                <Exams/>
            </div>
        </div>
    )
}
