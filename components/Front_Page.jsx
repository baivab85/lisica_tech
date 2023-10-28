import React from 'react';

const Front = () => {
    return (
        <>
            <div className="top-bar">
               <div className='t'>Home</div>

               <div className='Docs'>Docs</div>
               <div className='Tuto'>Tutorial</div>
               <div className='Blog'>Blog</div>
               <div className='community'>Community</div>

               <div class="search-bar">
               <input class="search-input" type="text" placeholder="Search..."/>
               </div>

               <div className='lang'>Languages</div>
               <div className='git'>Git</div>
   
   
            </div>
            <div class="body">Body</div>
            <div class="sidebar">
            <a href="#">Installation</a>
            <a href="#">Getting Started</a>
            <a href="#">CDN Links</a>
            <a href="#">Contact</a>
            <a href="#">Realease </a>
            <a href="#">Main Concepts </a>
            <a href="#">Advanced Guides</a>
            <a href="#">API REFERENCE </a>
            <a href="#">Testing</a>
            <a href="#">Contributing</a>
    </div>
    <div class="footer">Footer</div>
    <div class="chooter"></div>
        </>
    )
}

export default Front;
