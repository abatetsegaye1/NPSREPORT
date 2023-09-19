import {React,useContext,useState,useEffect} from 'react'

import './sidebar.scss'

import { ScaleContext } from '../ScaleContext'
import Configuration from './Configuration';
import { DragSwitch } from 'react-dragswitch'
import PieChart from '../PieChart';
import 'react-dragswitch/dist/index.css'
import BarChart from '../BarChart';
export default function Sidebar({row,bar, unlikely,likely,veryLikely, setAttributes}) {
  //console.log(scaleContent);
  const [setting,setSetting] = useState(true);
  const { state, dispatch } = useContext(ScaleContext);
  const [sideBar,setSideBar]=useState(true);

   useEffect(()=>{

    setAttributes({state:{...state,
      bar: bar,
    }});
   },[])
 

  const handleUnLikelyRate = (e) => {
    const newColor = e.target.value;
    dispatch({
      type: 'SET_UNLIKELY_RATE',
      payload: newColor,
    });
    setAttributes({state:{...state,
      bar: bar,
      unlikelyRate: newColor,
    }});
  };

  const handleNeutralRate = (e) => {
    const newColor = e.target.value;
    dispatch({
      type: 'SET_NEUTRAL_RATE',
      payload: newColor,
    });
    setAttributes({state:{...state,
      bar: bar,
      neutralRate: newColor,
    }});
  };

 
  const handleVeryLikelyRate = (e) => {
    const newColor = e.target.value;
    dispatch({
      type: 'SET_VERY_LIKELY_RATE',
      payload: newColor,
    });
    setAttributes({state:{...state,
      bar: bar,
      veryLikelyRate: newColor,
    }});
  };


 

  const handleShowLabel = (e) => {
    const newColor = !state.showLabel;
    dispatch({
      type: 'SET_LABEL',
      payload: newColor,
    });
    setAttributes({state:{...state,
      bar: bar,
      showLabel: newColor,
    }});
  };

 const hideSetting=()=>{
         setSideBar(false);
 }

  return (
    <>
    {sideBar && <div className='sidebar'>
    <div className='setting_configure'>
    <button className='setting_button' onClick={()=>setSetting(true)} style={{borderBottom: `${setting ? '3px solid #6E62E5':''}`}}>Setting</button>
    <button className='configure_button' onClick={()=>setSetting(false)} style={{borderBottom: `${!setting ? '3px solid #6E62E5':''}`}}>Configurations</button>
    </div>
     <div className='sidebar_setting'>
        {/* <div className='sidebar_wrapper'> */}
      
        {setting ? (
            <>
      
          {/* {console.log(state.scale.format, state.emoji)} */}
          <div className='sidebar_element_eight'>
           <div className='time'>
            <label>Show Labels</label>
            <small className='toggle'>
               <DragSwitch checked={state.showLabel} onChange={handleShowLabel}/></small>
           </div>
           </div>
          
        <div className='sidebar_element_eight'>
           <div className='time'>
            <label>Set Unlikely Color</label>
            
           </div>
           <input type='color' className='time--input' value={state.unlikelyRate} onChange={handleUnLikelyRate}/>
            {console.log(state.unlikelyRate)}
        </div>
        <div className='sidebar_element_eight'>
           <div className='time'>
            <label>Set Neutral Color</label>
           </div>
           <input type='color' className='time--input' value={state.neutralRate} onChange={handleNeutralRate}/>
        </div>
        <div className='sidebar_element_eight'>
           <div className='time'>
            <label>Set likely Color</label>
           </div>
           <input type='color' className='time--input' value={state.veryLikelyRate} onChange={handleVeryLikelyRate}/>

        </div>

            </>

        ):(<Configuration setAttributes={setAttributes}/>)}
          
       
       <button onClick={hideSetting} className='use_scale'>Use Reports</button>
        </div>
        
     </div>}
     {/* <Scale row={row} emoji={emoji} btnbg={btnbg} btncolr={btncolr} /> */}
     {bar ? <PieChart/> : <BarChart/>} 
     </>
    // </div>
  )
}
