import {useState,React} from 'react';
import NumberScale from './components/NumberScale'
import { ScaleProvider } from './components/ScaleContext';
import Sidebar from './components/setting/Sidebar';
import './components/templatestyle.scss'

const App = ({setAttributes}) => {
    const [isCustomize, setIsCustomized] = useState(false);
    const [scaleContent, setScaleContent] = useState(null);
    const [setting,setSetting]=useState({useScale:true,bar:true,pie:true});
    return (
        <ScaleProvider>
        <div className='scalereport_container'>
             
            {!isCustomize && (
            <>
            {setting.bar &&  <NumberScale bar={true} pie={false} btnbg={'yellow'} btncolr={'red'} customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} setting={setting} setSetting={setSetting} setAttributes={setAttributes} key={1}/> }
             {/* {console.log(setting.numberScale )} */}
            {/* <NumberScale row={true} btnbg={'orange'} btncolr={'white'} customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={2}/> */}
            {/* <NumberScale row={false} btnbg={'green'} btncolr={'white'} customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={3}/>   */}
            
             {/* <NumberScale row={false} btnbg={'blue'} btncolr={'white'}  customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={4}/> */}
        
            {setting.pie && <NumberScale  pie={true} bar={false} btnbg={'#42DCC9'} customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} setting={setting} setSetting={setSetting} setAttributes={setAttributes} key={5}/>}
            {/* <NumberScale emoji={true}  customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={6}/>  */}
         </>
         )}
           
            {isCustomize && <Sidebar setAttributes={setAttributes} {...scaleContent}/>  }
     </div>
     </ScaleProvider>
     );
}

export default App;