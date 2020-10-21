import React from 'react'
import Card from './Card'
import './homepageinfo.css'

export default function Homepageinfo() {
    return (
        <div className="container">
                  <div className="row card__margin">
            <div className="col-6">
            <Card title="Collaborative Space for students" subtitle="Much more efficient" text="Students can be updated with new tasks and works daily!" img="https://www.ellucian.com/sites/default/files/styles/max_width_1920/public/uploads/images/2018/09/insights-article-meeting-students-expectations-for-a-digital-campus.jpg?itok=objiC9GM"/>
            </div>
            <div className="col-6">
            <Card title="Discusssion forums on topics" subtitle="For announcements and doubt clarifications" text="Students,Reps and Teachers can use the open discussion forum to post doubts and clarifications and gain points" img="https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2017/03/20160606_Su_Intern_KellerCnt_DJA_032-3840_0.jpeg?itok=dxmunbP9"/>
            </div>
        </div>
        </div>
    )
}
