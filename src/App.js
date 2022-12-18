import logo from './logo.svg';
import './App.css';
import SampleSite from './Components/sampleSite'
import 'antd/dist/reset.css';


function App() {
  let radioButtonvalues = ["S","M","L","XL"] 

  const eComm=[
    { 
      "ID":1,
      "Name": "Uptown Girl Blouse",
      "ProductURL": "https://docksbeers.com/wp-content/uploads/2019/05/merch-TSHIRT-W-2.jpg",
      "ProductPrice":[
        {"Size":"S","Price":25},
        {"Size":"M","Price":35},
        {"Size":"L","Price":45},
        {"Size":"XL","Price":55}
      ],
      "linkToProduct":"https://www.amazon.com/Acoustic-Moonrise-Guitarist-Musician-T-Shirt/dp/B07N13SPQS/ref=sxin_19_ac_d_rm?ac_md=0-0-dC1zaGlydHMgZm9yIG1lbg%3D%3D-ac_d_rm_rm_rm&content-id=amzn1.sym.ea2988fd-eb01-4865-b164-a09daab74e08%3Aamzn1.sym.ea2988fd-eb01-4865-b164-a09daab74e08&cv_ct_cx=t-shirts+for+men&keywords=t-shirts+for+men&pd_rd_i=B07N13SPQS&pd_rd_r=737e57af-8d37-469e-aa25-dd33a5b270a0&pd_rd_w=ldiFV&pd_rd_wg=bFvS7&pf_rd_p=ea2988fd-eb01-4865-b164-a09daab74e08&pf_rd_r=REWE73D5T4Y32J9C826F&qid=1670923559&sprefix=t-shirt%2Caps%2C280&sr=1-1-7d9bfb42-6e38-4445-b604-42cab39e191b"
    },
    {  "ID":2,
      "Name": "Solid Basic T-Shirt",
      "ProductURL": "https://docksbeers.com/wp-content/uploads/2019/05/merch-TSHIRT-W-2.jpg",
      "ProductPrice":[
        {"Size":"S","Price":25},
        {"Size":"M","Price":35},
        {"Size":"L","Price":45},
        {"Size":"XL","Price":55}
      ],
      "linkToProduct":"https://www.amazon.com/Acoustic-Moonrise-Guitarist-Musician-T-Shirt/dp/B07N13SPQS/ref=sxin_19_ac_d_rm?ac_md=0-0-dC1zaGlydHMgZm9yIG1lbg%3D%3D-ac_d_rm_rm_rm&content-id=amzn1.sym.ea2988fd-eb01-4865-b164-a09daab74e08%3Aamzn1.sym.ea2988fd-eb01-4865-b164-a09daab74e08&cv_ct_cx=t-shirts+for+men&keywords=t-shirts+for+men&pd_rd_i=B07N13SPQS&pd_rd_r=737e57af-8d37-469e-aa25-dd33a5b270a0&pd_rd_w=ldiFV&pd_rd_wg=bFvS7&pf_rd_p=ea2988fd-eb01-4865-b164-a09daab74e08&pf_rd_r=REWE73D5T4Y32J9C826F&qid=1670923559&sprefix=t-shirt%2Caps%2C280&sr=1-1-7d9bfb42-6e38-4445-b604-42cab39e191b"
    },
    {
      "ID":3,
      "Name": "Uptown Girl Blouse",
      "ProductURL": "https://docksbeers.com/wp-content/uploads/2019/05/merch-TSHIRT-W-2.jpg",
      "ProductPrice":[
        {"Size":"S","Price":25},
        {"Size":"M","Price":35},
        {"Size":"L","Price":45},
        {"Size":"XL","Price":55}
      ],
      "linkToProduct":"https://www.amazon.com/Acoustic-Moonrise-Guitarist-Musician-T-Shirt/dp/B07N13SPQS/ref=sxin_19_ac_d_rm?ac_md=0-0-dC1zaGlydHMgZm9yIG1lbg%3D%3D-ac_d_rm_rm_rm&content-id=amzn1.sym.ea2988fd-eb01-4865-b164-a09daab74e08%3Aamzn1.sym.ea2988fd-eb01-4865-b164-a09daab74e08&cv_ct_cx=t-shirts+for+men&keywords=t-shirts+for+men&pd_rd_i=B07N13SPQS&pd_rd_r=737e57af-8d37-469e-aa25-dd33a5b270a0&pd_rd_w=ldiFV&pd_rd_wg=bFvS7&pf_rd_p=ea2988fd-eb01-4865-b164-a09daab74e08&pf_rd_r=REWE73D5T4Y32J9C826F&qid=1670923559&sprefix=t-shirt%2Caps%2C280&sr=1-1-7d9bfb42-6e38-4445-b604-42cab39e191b"
    },
    {
      "ID":4,
      "Name": "Uptown Girl Blouse",
      "ProductURL": "https://docksbeers.com/wp-content/uploads/2019/05/merch-TSHIRT-W-2.jpg",
      "ProductPrice":[
        {"Size":"S","Price":25},
        {"Size":"M","Price":35},
        {"Size":"L","Price":45},
        {"Size":"XL","Price":55}
      ],
      "linkToProduct":"https://www.amazon.com/Acoustic-Moonrise-Guitarist-Musician-T-Shirt/dp/B07N13SPQS/ref=sxin_19_ac_d_rm?ac_md=0-0-dC1zaGlydHMgZm9yIG1lbg%3D%3D-ac_d_rm_rm_rm&content-id=amzn1.sym.ea2988fd-eb01-4865-b164-a09daab74e08%3Aamzn1.sym.ea2988fd-eb01-4865-b164-a09daab74e08&cv_ct_cx=t-shirts+for+men&keywords=t-shirts+for+men&pd_rd_i=B07N13SPQS&pd_rd_r=737e57af-8d37-469e-aa25-dd33a5b270a0&pd_rd_w=ldiFV&pd_rd_wg=bFvS7&pf_rd_p=ea2988fd-eb01-4865-b164-a09daab74e08&pf_rd_r=REWE73D5T4Y32J9C826F&qid=1670923559&sprefix=t-shirt%2Caps%2C280&sr=1-1-7d9bfb42-6e38-4445-b604-42cab39e191b"
    },
    {
      "ID":5,
      "Name": "Uptown Girl Blouse",
      "ProductURL": "https://docksbeers.com/wp-content/uploads/2019/05/merch-TSHIRT-W-2.jpg",
      "ProductPrice":[
        {"Size":"S","Price":25},
        {"Size":"M","Price":35},
        {"Size":"L","Price":45},
        {"Size":"XL","Price":55}
      ],
      "linkToProduct":"https://www.amazon.com/Acoustic-Moonrise-Guitarist-Musician-T-Shirt/dp/B07N13SPQS/ref=sxin_19_ac_d_rm?ac_md=0-0-dC1zaGlydHMgZm9yIG1lbg%3D%3D-ac_d_rm_rm_rm&content-id=amzn1.sym.ea2988fd-eb01-4865-b164-a09daab74e08%3Aamzn1.sym.ea2988fd-eb01-4865-b164-a09daab74e08&cv_ct_cx=t-shirts+for+men&keywords=t-shirts+for+men&pd_rd_i=B07N13SPQS&pd_rd_r=737e57af-8d37-469e-aa25-dd33a5b270a0&pd_rd_w=ldiFV&pd_rd_wg=bFvS7&pf_rd_p=ea2988fd-eb01-4865-b164-a09daab74e08&pf_rd_r=REWE73D5T4Y32J9C826F&qid=1670923559&sprefix=t-shirt%2Caps%2C280&sr=1-1-7d9bfb42-6e38-4445-b604-42cab39e191b"
    },
    {
      "ID":6,
      "Name": "Uptown Girl Blouse",
      "ProductURL": "https://docksbeers.com/wp-content/uploads/2019/05/merch-TSHIRT-W-2.jpg",
      "ProductPrice":[
        {"Size":"S","Price":25},
        {"Size":"M","Price":35},
        {"Size":"L","Price":45},
        {"Size":"XL","Price":55}
      ],
      "linkToProduct":"https://www.amazon.com/Acoustic-Moonrise-Guitarist-Musician-T-Shirt/dp/B07N13SPQS/ref=sxin_19_ac_d_rm?ac_md=0-0-dC1zaGlydHMgZm9yIG1lbg%3D%3D-ac_d_rm_rm_rm&content-id=amzn1.sym.ea2988fd-eb01-4865-b164-a09daab74e08%3Aamzn1.sym.ea2988fd-eb01-4865-b164-a09daab74e08&cv_ct_cx=t-shirts+for+men&keywords=t-shirts+for+men&pd_rd_i=B07N13SPQS&pd_rd_r=737e57af-8d37-469e-aa25-dd33a5b270a0&pd_rd_w=ldiFV&pd_rd_wg=bFvS7&pf_rd_p=ea2988fd-eb01-4865-b164-a09daab74e08&pf_rd_r=REWE73D5T4Y32J9C826F&qid=1670923559&sprefix=t-shirt%2Caps%2C280&sr=1-1-7d9bfb42-6e38-4445-b604-42cab39e191b"
    },
    {
      "ID":7,
      "Name": "Uptown Girl Blouse",
      "ProductURL": "https://docksbeers.com/wp-content/uploads/2019/05/merch-TSHIRT-W-2.jpg",
      "ProductPrice":[
        {"Size":"S","Price":25},
        {"Size":"M","Price":35},
        {"Size":"L","Price":45},
        {"Size":"XL","Price":55}
      ],
      "linkToProduct":"https://www.amazon.com/Acoustic-Moonrise-Guitarist-Musician-T-Shirt/dp/B07N13SPQS/ref=sxin_19_ac_d_rm?ac_md=0-0-dC1zaGlydHMgZm9yIG1lbg%3D%3D-ac_d_rm_rm_rm&content-id=amzn1.sym.ea2988fd-eb01-4865-b164-a09daab74e08%3Aamzn1.sym.ea2988fd-eb01-4865-b164-a09daab74e08&cv_ct_cx=t-shirts+for+men&keywords=t-shirts+for+men&pd_rd_i=B07N13SPQS&pd_rd_r=737e57af-8d37-469e-aa25-dd33a5b270a0&pd_rd_w=ldiFV&pd_rd_wg=bFvS7&pf_rd_p=ea2988fd-eb01-4865-b164-a09daab74e08&pf_rd_r=REWE73D5T4Y32J9C826F&qid=1670923559&sprefix=t-shirt%2Caps%2C280&sr=1-1-7d9bfb42-6e38-4445-b604-42cab39e191b"
    },
    {
      "ID":8,
      "Name": "Uptown Girl Blouse",
      "ProductURL": "https://docksbeers.com/wp-content/uploads/2019/05/merch-TSHIRT-W-2.jpg",
      "ProductPrice":[
        {"Size":"S","Price":25},
        {"Size":"M","Price":35},
        {"Size":"L","Price":45},
        {"Size":"XL","Price":55}
      ],
      "linkToProduct":"https://www.amazon.com/Acoustic-Moonrise-Guitarist-Musician-T-Shirt/dp/B07N13SPQS/ref=sxin_19_ac_d_rm?ac_md=0-0-dC1zaGlydHMgZm9yIG1lbg%3D%3D-ac_d_rm_rm_rm&content-id=amzn1.sym.ea2988fd-eb01-4865-b164-a09daab74e08%3Aamzn1.sym.ea2988fd-eb01-4865-b164-a09daab74e08&cv_ct_cx=t-shirts+for+men&keywords=t-shirts+for+men&pd_rd_i=B07N13SPQS&pd_rd_r=737e57af-8d37-469e-aa25-dd33a5b270a0&pd_rd_w=ldiFV&pd_rd_wg=bFvS7&pf_rd_p=ea2988fd-eb01-4865-b164-a09daab74e08&pf_rd_r=REWE73D5T4Y32J9C826F&qid=1670923559&sprefix=t-shirt%2Caps%2C280&sr=1-1-7d9bfb42-6e38-4445-b604-42cab39e191b"
    },
  
  ]
  
  return (
    <div className="App">
      <SampleSite radioButtonvalues={radioButtonvalues} eComm={eComm}/>
    </div>
  );
}

export default App;


