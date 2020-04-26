import React from 'react'
import './homepage.styles.scss'
import Directory from '../../compoments/directory/directory.compoment'


 const HomePage = ({history}) => (
   
        <div className='homepage'>
       <Directory history={history}/>
        </div>
    
);
export default HomePage;