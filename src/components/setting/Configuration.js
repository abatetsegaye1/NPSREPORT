import {useContext,React} from 'react'
import { ScaleContext } from '../ScaleContext';

export default function Configuration({setAttributes}) {

  const { state, dispatch } = useContext(ScaleContext);

  const handleFontColorChange = (e) => {
    const newColor = e.target.value;
    dispatch({
      type: 'SET_CONFGR_FONT_COLOR',
      payload: newColor,
    });
    setAttributes({state:{ ...state,
      color: {
        ...state.color,
          confgrFontColor: action.payload,
        
      }}});
  };

  const handleLabelChange = (position, value) => {
    dispatch({
      type: 'SET_CONFIGURE_TITLE_QUESTION',
      payload: {
        title: position === 'title' ? value : state.scale.title,
        question: position === 'question' ? value : state.scale.question,
       
      },
    });
    setAttributes({state:{ ...state,
      scale: {
        ...state.scale,
        title: position === 'title' ? value : state.scale.title,
        question: position === 'question' ? value : state.scale.question,
      }}});
  };
  return (
    <div className='configure_element'>
        
        <div className='configure_element--one'>
        <div className='configure--title'>
                <label className="label--rate">Very Unlikely Score</label>
                <label className="label--value" name="label--title"
                
                //value={state.scale.lblLeft}
                //onChange={(e) => handleLabelChange('left', e.target.value)}
                >30%</label>
                
           </div>
            <div className='configure--question'>
                <label className="label--rate">Neutral Score</label>
                <label className="label--value" name="scale_question"
               // value={state.scale.lblCenter}
               // onChange={(e) => handleLabelChange('center', e.target.value)}
              
               >40%</label>
            </div>


            <div className='configure--question'>
                <label className="label--rate">Very Likely Score</label>
                <label className="label--value" name="scale_question"
               // value={state.scale.lblCenter}
               // onChange={(e) => handleLabelChange('center', e.target.value)}
               >20%</label>
              
            </div>
            </div>
            
          </div>
  )
}




