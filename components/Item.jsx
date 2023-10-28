import React from 'react';

export default function Item(){
   const item_component=[
          
            <div className='col-12 col-md-3'>
                <div className='menu-item'>


                 <div className='left-area'>
                    <img src="img/burger.jpg" alt="..." height={'120px'} width={'100%'}></img>
                 </div>
                 <div className="right-area">
                     <h3>Burger</h3>
                       <span>Fast Food</span>

                       <div className="btn d-flex">
                         <h6>Price : 150</h6>
                           <a href="#">
                              <button className="badge badge-success">Order Now</button>
                          </a>
                       </div>
                    </div>


                </div>
            </div>           
           

        ];
    const item_component2=[
      <div className='col-12 col-md-3'>
                <div className='menu-item'>


                 <div className='left-area'>
                    <img src="img/chapati.jpg" alt="..." height={'120px'} width={'100%'}></img>
                 </div>
                 <div className="right-area">
                     <h3>Chapati</h3>
                       <span>Dinner</span>

                       <div className="btn d-flex">
                         <h6>Price : 200</h6>
                           <a href="#">
                              <button className="badge badge-success">Order Now</button>
                          </a>
                       </div>
                    </div>


                </div>
            </div>    
    ];
    const item_component3=[
      <div className='col-12 col-md-3'>
                <div className='menu-item'>


                 <div className='left-area'>
                    <img src="img/capacinho.jpg" alt="..." height={'120px'} width={'100%'}></img>
                 </div>
                 <div className="right-area">
                     <h3>Cappuccino</h3>
                       <span>Coffee</span>

                       <div className="btn d-flex">
                         <h6>Price : 220</h6>
                           <a href="#">
                              <button className="badge badge-success">Order Now</button>
                          </a>
                       </div>
                    </div>


                </div>
            </div> 

    ];
       
    const item_component4=[
      <div className='col-12 col-md-3'>
                <div className='menu-item'>


                 <div className='left-area'>
                    <img src="img/chilli_chicken.jpg" alt="..." height={'120px'} width={'100%'}></img>
                 </div>
                 <div className="right-area">
                     <h3>Chicken</h3>
                       <span>Non veg</span>

                       <div className="btn d-flex">
                         <h6>Price : 750</h6>
                           <a href="#">
                              <button className="badge badge-success">Order Now</button>
                          </a>
                       </div>
                    </div>


                </div>
            </div> 

    ];

    const item_component5=[
      <div className='col-12 col-md-3'>
                <div className='menu-item'>


                 <div className='left-area'>
                    <img src="img/chowmin.jpg" alt="..." height={'120px'} width={'100%'}></img>
                 </div>
                 <div className="right-area">
                     <h3>Chowmin</h3>
                       <span>Fast Food</span>

                       <div className="btn d-flex">
                         <h6>Price : 850</h6>
                           <a href="#">
                              <button className="badge badge-success">Order Now</button>
                          </a>
                       </div>
                    </div>


                </div>
            </div> 

    ];

    const item_component6=[
      <div className='col-12 col-md-3'>
                <div className='menu-item'>


                 <div className='left-area'>
                    <img src="img/green_tea.jpg" alt="..." height={'120px'} width={'100%'}></img>
                 </div>
                 <div className="right-area">
                     <h3>Green Tea</h3>
                       <span>Tea</span>

                       <div className="btn d-flex">
                         <h6>Price : 10</h6>
                           <a href="#">
                              <button className="badge badge-success">Order Now</button>
                          </a>
                       </div>
                    </div>


                </div>
            </div> 

    ];
    const item_component7=[
      <div className='col-12 col-md-3'>
                <div className='menu-item'>


                 <div className='left-area'>
                    <img src="img/rayta.jpg" alt="..." height={'120px'} width={'100%'}></img>
                 </div>
                 <div className="right-area">
                     <h3>Raita</h3>
                       <span>Veg</span>

                       <div className="btn d-flex">
                         <h6>Price : 450</h6>
                           <a href="#">
                              <button className="badge badge-success">Order Now</button>
                          </a>
                       </div>
                    </div>


                </div>
            </div> 

    ];
        return (
          <div>
          <div className='container-fluid'>
            <h4 className='text-center pt-3'>Food Menu Item</h4>
           
           <div className='row'>
             <div className='col-12 d-flex justify-content-center menu-btn'>
                <button className='btn btn-warning'>All food</button>
                <button className='btn btn-warning'>Fast food</button>
                <button className='btn btn-warning'>Break fast</button>
                <button className='btn btn-warning'>Lunch</button>
                <button className='btn btn-warning'>Dinner</button>
                <button className='btn btn-warning'>Veg</button>
                <button className='btn btn-warning'>Non Veg</button>
                <button className='btn btn-warning'>Tea</button>
                <button className='btn btn-warning'>Coffee</button>
             </div>
           </div>

           <div className='row mt-5'>
           
              {item_component}
              {item_component2}
              {item_component3}
               {item_component4}
               
           </div>
           <div className='row mt-4'>
           {item_component5}
              {item_component6}
               {item_component7}
           </div>
           </div>
           </div>
         
        );
      }

