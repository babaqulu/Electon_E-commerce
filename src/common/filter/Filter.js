import React from 'react'
import './Filter.css'
import CheckBox from '../checkBox/CheckBox'
import Radio from '../radio/Radio'

export default function Filter() {
  return (
    <div className='filterWrapper'>

      <div className='categoriesWrapper filterDiv'>

<div className='filterText'>

  <p className='categoriesHeader'>Categories</p>
  <p className='reset'>Reset</p>

</div>

<div className='categories filterSectionsDiv'>

<CheckBox  id='allCategories' name='all-categories' labelFor='allCategories'
label='All categories'
num='10' 
value=""
/>

<CheckBox id='tablet' 
name='tablet' 
labelFor='tablet' 
label='Tablet' 
num='5' 
value=""
/>

<CheckBox id='laptop' 
name='laptop' 
labelFor='laptop' 
label='Laptop'  
num='5' 
value='laptop'
/>

<CheckBox id='lheadphones'
name='headphones'
labelFor='headphones'
label='Headphones' 
num='5' 
value='Headphones'
/>

<CheckBox id='console' 
name='console' 
labelFor='console' 
label='Console'
num='5'
value='console'
/>

<CheckBox id='other' 
name='other' 
labelFor='other' 
label='Other' 
num='5'
value='other'
/>

</div>

<div className='filterLine'></div>

</div>

<div className='avaliabilityWrapper filterDiv'>

<h1 className='filterHeader'>Avaliability</h1>

<div className='filterText'>

  <p className='filterSubHeader'>0 selected</p>
  <p className='reset'>Reset</p>

</div>

<div className='avaliability filterSectionsDiv'>

<CheckBox id='in-stock' name='in-stock' 
labelFor='in-stock' 
label='In stock' 
num='5' 
value='in-stock'
/>

<CheckBox id='out-of-stock' name='out-of-stock' labelFor='out-of-stock' 
label='Out of stock' 
num='0' 
value='out-of-stock'
/>

</div>

<div className='filterLine'></div>


</div>

<div className='productTypeWrapper filterDiv'>

<h1 className='filterHeader'>Product type</h1>

<div className='filterText'>

  <p className='filterSubHeader'>0 selected</p>
  <p className='reset'>Reset</p>

</div>

<div className='productType filterSectionsDiv'>

<CheckBox id='smart-watch' name='smart-watch' labelFor='smart-watch' 
label='Smart watch' 
num='5' 
value='smart-watch'
/>

</div>

<div className='filterLine'></div>


</div>

<div className='brandWrapper filterDiv'>

<h1 className='filterHeader'>Brand</h1>

<div className='filterText'>

  <p className='filterSubHeader'>0 selected</p>
  <p className='reset'>Reset</p>

</div>

<div className='brand filterSectionsDiv'>

<CheckBox id='smart-watch' name='smart-watch' labelFor='smart-watch' 
label='Smart watch' 
num='5' 
value='smart-watch'
/>

</div>

<div className='filterLine'></div>


</div>

<div className='colorWrapper filterDiv'>

<h1 className='filterHeader'>Color</h1>

<div className='filterText'>

  <p className='filterSubHeader'>0 selected</p>
  <p className='reset'>Reset</p>

</div>

<div className='color filterSectionsDiv'>

<Radio className='orange colorsdiv'/>
<Radio className='red colorsdiv'/>
<Radio className='blue colorsdiv'/>
<Radio className='gray colorsdiv'/>
<Radio className='darkgreen colorsdiv'/>
<Radio className='lightblue colorsdiv'/>
<Radio className='purple colorsdiv'/>
<Radio className='darkred colorsdiv'/>
<Radio className='lightgreen colorsdiv'/>

</div>

<div className='filterLine'></div>


</div>

<div className='sizeWrapper filterDiv'>

<h1 className='filterHeader'>Size</h1>

<div className='filterText'>

  <p className='filterSubHeader'>0 selected</p>
  <p className='reset'>Reset</p>

</div>

<div className='size filterSectionsDiv'>

<CheckBox id='mSize' 
name='mSize' 
labelFor='mSize' 
label='M' 
num='5' 
value='M'
/>

<CheckBox id='sSize' 
name='sSize' 
labelFor='sSize' 
label='S' 
num='5'
/>

<CheckBox id='xSize' 
name='xSize' 
labelFor='xSize' 
label='X' 
num='5'
/>

<CheckBox id='xxSize'
name='xxSize' 
labelFor='xxSize' 
label='XX' 
num='5' 
/>

</div>

<div className='filterLine'></div>


</div>
      
    </div>
  )
}
