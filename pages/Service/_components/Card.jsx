import { useTheme } from 'next-themes'
import React from 'react'

const Card = () => {
  const { setTheme,resolvedTheme } = useTheme()

  return (
    <div>
          <div class="card-section">

<div>
    <h1 class="card-title"></h1>
 </div>

<div class="flipping-cards">

    <div class="profile-card first-profile-card">

      <div>
      <div className="profile-card-front profile-card-face flex flex-col items-end ">      
        <div>
        <img src="/user.png" alt="profile-picture" class="profile-picture"/>  
          </div>      
        <div className='bg-slate-200 rounded-lg h-[70px] mt-2 w-full flex justify-between'>
          <div>
          <h1 className={`' mx-2  text-black  font-Montserrat font-mono '`} style={{fontSize:"23px"}} >Habibov Murod</h1>
          <p className=' mx-2 font-mono text-black ' style={{fontSize:"20px"}}>
           Asoschi
          </p>
          </div>
         <footer className='footer'>

          </footer>
        </div>
        </div>
      </div>
              
        <div class="profile-card-back profile-card-face rounded-lg ">
            <div class="about-section ">
                <h2 class="about-title ">
                  <img src="/user.png" alt=""   style={{borderRadius:"50%"}}/>
                </h2>
                <p class="about-text">
                </p>
            </div>

            <div class="interests-section">
             
            </div>

         
        </div>

    </div>

  
</div>

</div>

    </div>
  )
}

export default Card