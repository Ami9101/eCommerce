import React, { useState } from 'react';
import { Card,Radio, Space} from 'antd';
import { createFromIconfontCN,HeartOutlined,ShoppingCartOutlined,HeartFilled} from '@ant-design/icons';
import { createRef } from 'react';


const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js',
    // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

export default function SampleSite(props) {
  
  const [priceChange,setPriceChange]= useState();

  const [isCart,setIsCart]=useState(false);

  const priceRef= createRef();


  const favClick = (e) => {
    console.log(e.target.style)
  
    
    e.target.style.color == ""?e.target.style.color ="red":e.target.style.color=""
  }
  
  const cartClick = () => {
    
    setIsCart(current => !current);
  }

  const selectSize=(e,id)=>{
  console.log(e)
  // switch (e.target.value) {
  //   case "S":
  //      setPriceChange(25)
  //      break;
  //   case "M":
  //      setPriceChange(35)
  //      break;
  //   case "L":
  //     setPriceChange(45)
  //     break;
  //   case "XL":
  //     setPriceChange(50)
  //     break;
  
  //   default:
  //     break;
  // }
  console.log(id);
  let tshirts = props.eComm.find(tshirt => tshirt.ID == id);

  console.log(tshirts);
  let cost= tshirts.ProductPrice.find(productcost => productcost.Size === e.target.value);
  console.log(cost);
  console.log(priceRef.current.id)
  if(priceRef.current.id == id){

    
    priceRef.current.innerHTML = cost.Price;

  }
  // setPriceChange(cost.Price)
  
  // console.log(priceChange)
  }

     return(
      <div className='sampleSiteWrapper'>

     {
      props.eComm.map((product,index)=>(
        <Card
        title={product.Name}
        bordered={true}
        cover={ 
        <img  alt="example" 
        src={product.ProductURL} 
        />
        }
    // <div className='imgBtn' 
    //  onClick = { () => imageBtnClick(props.imageBlock.title)} 
    //  style={{'backgroundColor':props.generalSettings.color.accentColor}}>
    //  <a className='imgLink' 
    //  target="_blank" 
    //  rel="noopener noreferrer" 
    //  style={{'fontFamily':props.generalSettings.font.primaryFont,'color':props.generalSettings.color.textColor}}
    //  href={props.imageBlock.btnUrl}>{props.imageBlock.btnText}</a>
    //  </div>
              
        style={{
          width: 300,
          margin: 'auto'
        }}
  
        actions={[
          <ShoppingCartOutlined key='buynow'
         
          style={{
            color: isCart ? 'green' : '',
          }}
            onClick={cartClick}
          />,


          <HeartFilled key='favourite'  
          
          // style={{
          //   color: isFav ? 'red' : '',
          // }}
            onClick={favClick} 
          />
            
        ]}
      >
       
      <div className='availableSizes'>Available Sizes</div>
  
      <Radio.Group defaultValue="S" buttonStyle='outline' onChange={(e)=>{selectSize(e,product.ID)}}>
        {
           product.ProductPrice.map((button,index)=>(
            <Radio.Button value={button.Size} >{button.Size}</Radio.Button>
          ))
        } 
      </Radio.Group>
    
      <div className='availableColours'>Available Colours</div>
      
      <div className='colorGroup' >
        <span  className='whiteTabs'></span>
        <span  className='redTabs'></span>
        <span  className='greenTabs'></span>
        <span  className='blueTabs'></span>
        <span  className='yellowTabs'></span>
      </div>
  
      <div className="priceGroup">
        <p className="price newPrice" 
        id={product.ID}
        ref={priceRef}>

        </p>
      </div>
        </Card>
  
        
      ))}
    </div>

    )

}
