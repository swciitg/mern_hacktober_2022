import React, { useEffect, useRef } from 'react'
import "./sidebar.css"
import admin from "../../assests/admin.svg"
import user from "../../assests/user.svg"
import cube from "../../assests/cube.svg"

const Sidebar = () => {
    let list_items = useRef('')
    useEffect(() => {
        list_items.current = Array.from(document.getElementsByClassName('list_item'))
    }, [])
    const setSelected = (e) => {

        list_items.current.forEach(ele => {
            // console.log(ele)
            ele.classList.remove('selected')
        })
        if (e.target.localName !== 'img')
            e.target.classList.add('selected')
    }

    return (
        <div className='sidebar'>
            <div className="content">
                <h3 className='sidebar_title'>Sports board</h3>
                <div className='list' >
                    <p className='list_item selected' onClick={setSelected} ><img src={admin} className='list_img' alt='' />Admin </p>
                    <p className='list_item' onClick={setSelected} ><img src={cube} className='list_img' alt='' /> Store</p>
                    <p className='list_item' onClick={setSelected} ><img src={user} className='list_img' alt='' /> Users</p>

                </div>
            </div>

        </div>
    )
}

export default Sidebar