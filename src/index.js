import App from "./App"
import "./index.scss"

wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "Brads Boilerplate Block",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    state: { unlikelyRate: '#FF0000', bar:true,
    veryLikelyRate:'#00FF00', neutralRate:'#0000FF', showLabel:true
  } 
  },
  edit: EditComponent,
  save: function () {
    return null;
  }
})

function EditComponent({setAttributes}) {

  return <App setAttributes={setAttributes}/>
}
