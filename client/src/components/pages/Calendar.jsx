import { Card, Calendar as Schedule, Badge } from 'antd'
import React from 'react'
import MainLayout from '../layout/MainLayout'


const appts = [
    { title: "Lab 2" }
];


const dateCellRender = (val) => {
    return <ul>
        <il>
            {appts.map((item) => {
                return <Badge text={item.title} />
            })}
        </il>
    </ul>
}

export default function Calendar() {
    return (
        <MainLayout title="Calendar" >
            <Card><Schedule dateCellRender={dateCellRender} /></Card>
        </MainLayout>
    )
}
