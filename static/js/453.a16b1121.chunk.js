"use strict";(self.webpackChunktest_task=self.webpackChunktest_task||[]).push([[453],{512:(e,a,r)=>{r.d(a,{Z:()=>A});var t=r(791);const s="AdvertsList_advertsList__AuKQZ";var i=r(984);const n={advertsItem:"AdvertsItem_advertsItem__t20Mk",imgAdvertWrapp:"AdvertsItem_imgAdvertWrapp__lhj+6",imgAdvert:"AdvertsItem_imgAdvert__Qoprk",iconIsFavorite:"AdvertsItem_iconIsFavorite__VNAHr",iconFavorite:"AdvertsItem_iconFavorite__fquWz",advertCarTitleDescription:"AdvertsItem_advertCarTitleDescription__pkpp1",advertCarModel:"AdvertsItem_advertCarModel__R-9HX",advertCarDescription:"AdvertsItem_advertCarDescription__0HvB1",advertCarDescriptionItem:"AdvertsItem_advertCarDescriptionItem__TJwFn",btnAdvert:"AdvertsItem_btnAdvert__Yyzfx"};var l=r(689);const c=()=>{const{favorites:e}=(0,l.Z)();return{getCityFromAdress:e=>e.split(",")[1].trim(),getCountryFromAdress:e=>e.split(",")[2].trim(),getRandomAccessory:e=>e[Math.floor(Math.random()*e.length)].split(" ").slice(0,3).join(" "),isFavorite:a=>e.some((e=>e.id===a.id)),convertingSringOnArray:e=>e.split("\n")}};var d=r(164);const o="ModalWindow_backdrop__Tr-1X",m="ModalWindow_modalContent__9PrUR",v="ModalWindow_iconClose__AASV1";var p=r(71),h=r(184);const _=document.getElementById("modal-root"),C=e=>{let{handleModalToggle:a,children:r}=e;(0,t.useEffect)((()=>{const e=e=>{"Escape"===e.code&&a()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[a]);return(0,d.createPortal)((0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:o,onClick:e=>{e.currentTarget===e.target&&a()},children:(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)(p.IOM,{className:v,onClick:a}),r]})})}),_)},u={imgAdvertWrap:"ModalDetailedDescriptionCar_imgAdvertWrap__8eaLO",imgAdvert:"ModalDetailedDescriptionCar_imgAdvert__1HMH0",advertCarTitleWrap:"ModalDetailedDescriptionCar_advertCarTitleWrap__J16E+",advertCarModel:"ModalDetailedDescriptionCar_advertCarModel__U1kDY",advertCarDescriptionList:"ModalDetailedDescriptionCar_advertCarDescriptionList__SRhtj",advertCarDescriptionItem:"ModalDetailedDescriptionCar_advertCarDescriptionItem__0fXhk",advertCarDescription:"ModalDetailedDescriptionCar_advertCarDescription__FtJiB",advertCarAccessories:"ModalDetailedDescriptionCar_advertCarAccessories__aUxwq",advertCarAccessoriesList:"ModalDetailedDescriptionCar_advertCarAccessoriesList__BYQ+i",advertCarAccessoriesItem:"ModalDetailedDescriptionCar_advertCarAccessoriesItem__nCH9B",rentalConditionsList:"ModalDetailedDescriptionCar_rentalConditionsList__G-bpN",rentalConditionsItem:"ModalDetailedDescriptionCar_rentalConditionsItem__uGeG1",accentRentalCondition:"ModalDetailedDescriptionCar_accentRentalCondition__qKMLe",rentalCarLink:"ModalDetailedDescriptionCar_rentalCarLink__n8ed5"},x=e=>{let{advert:a}=e;const{id:r,img:t,make:s,model:i,year:n,rentalPrice:l,address:d,type:o,mileage:m,accessories:v,fuelConsumption:p,engineSize:_,description:C,functionalities:x,rentalConditions:j}=a,{getCityFromAdress:g,getCountryFromAdress:N,convertingSringOnArray:M}=c(),A=M(j);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:u.imgAdvertWrap,children:(0,h.jsx)("img",{src:t,alt:"car",className:u.imgAdvert})}),(0,h.jsx)("div",{className:u.advertCarTitleWrap,children:(0,h.jsxs)("p",{className:u.advertCarTitle,children:["".concat(s," "),(0,h.jsx)("span",{className:u.advertCarModel,children:i}),", ".concat(n)]})}),(0,h.jsxs)("ul",{className:u.advertCarDescriptionList,children:[(0,h.jsx)("li",{className:u.advertCarDescriptionItem,children:g(d)}),(0,h.jsx)("li",{className:u.advertCarDescriptionItem,children:N(d)}),(0,h.jsx)("li",{className:u.advertCarDescriptionItem,children:"Id: ".concat(r)}),(0,h.jsx)("li",{className:u.advertCarDescriptionItem,children:"Year: ".concat(n)}),(0,h.jsx)("li",{className:u.advertCarDescriptionItem,children:"Type: ".concat(o)}),(0,h.jsx)("li",{className:u.advertCarDescriptionItem,children:"Fuel Consumption: ".concat(p)}),(0,h.jsx)("li",{className:u.advertCarDescriptionItem,children:"Engine Size: ".concat(_)})]}),(0,h.jsx)("p",{className:u.advertCarDescription,children:C}),(0,h.jsx)("p",{className:u.advertCarAccessories,children:"Accessories and functionalities:"}),(0,h.jsxs)("ul",{className:u.advertCarAccessoriesList,children:[v.map((e=>(0,h.jsx)("li",{className:u.advertCarAccessoriesItem,children:e},e))),x.map((e=>(0,h.jsx)("li",{className:u.advertCarAccessoriesItem,children:e},e)))]}),(0,h.jsx)("p",{className:u.advertCarAccessories,children:"Rental Conditions: "}),(0,h.jsxs)("ul",{className:u.rentalConditionsList,children:[A.map(((e,a)=>{const[r,t]=e.split(": ");return"Minimum age"===r?(0,h.jsxs)("li",{className:u.rentalConditionsItem,children:[r,":\xa0",(0,h.jsx)("span",{className:u.accentRentalCondition,children:t})]},a):(0,h.jsx)("li",{className:u.rentalConditionsItem,children:e},a)})),(0,h.jsxs)("li",{className:u.rentalConditionsItem,children:["Mileage:\xa0",(0,h.jsx)("span",{className:u.accentRentalCondition,children:m.toLocaleString("en-US")})]}),(0,h.jsxs)("li",{className:u.rentalConditionsItem,children:["Price",":","\xa0",(0,h.jsx)("span",{className:u.accentRentalCondition,children:l})]})]}),(0,h.jsx)("a",{href:"tel:+380730000000",className:u.rentalCarLink,children:"Rental car"})]})};var j=r(373),g=r(434),N=r(201);const M=e=>{let{advert:a}=e;const{img:r,make:s,model:i,year:l,rentalPrice:d,address:o,rentalCompany:m,type:v,mileage:p,accessories:_}=a,[u,M]=(0,t.useState)(!1),A=(0,g.I0)(),{getCityFromAdress:D,getRandomAccessory:I,getCountryFromAdress:b,isFavorite:B}=c(),L=()=>{M((e=>!e))},F=e=>{A((0,N._p)(e))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("li",{className:n.advertsItem,children:[(0,h.jsxs)("div",{className:n.imgAdvertWrapp,children:[(0,h.jsx)("img",{src:r,alt:"car",className:n.imgAdvert}),B(a)?(0,h.jsx)(j.$g3,{className:"".concat(n.iconIsFavorite," ").concat(n.iconFavorite),onClick:()=>{F(a)}}):(0,h.jsx)(j.AWH,{className:n.iconIsFavorite,onClick:()=>{F(a)}})]}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:n.advertCarTitleDescription,children:[(0,h.jsxs)("p",{className:n.advertCarTitle,children:["".concat(s," "),(0,h.jsx)("span",{className:n.advertCarModel,children:i}),", ".concat(l)]}),(0,h.jsx)("p",{className:n.advertCarPrice,children:d})]}),(0,h.jsxs)("ul",{className:n.advertCarDescription,children:[(0,h.jsx)("li",{className:n.advertCarDescriptionItem,children:D(o)}),(0,h.jsx)("li",{className:n.advertCarDescriptionItem,children:b(o)}),(0,h.jsx)("li",{className:n.advertCarDescriptionItem,children:m}),(0,h.jsx)("li",{className:n.advertCarDescriptionItem,children:v}),(0,h.jsx)("li",{className:n.advertCarDescriptionItem,children:s}),(0,h.jsx)("li",{className:n.advertCarDescriptionItem,children:p}),(0,h.jsx)("li",{className:n.advertCarDescriptionItem,children:I(_)})]}),(0,h.jsx)("button",{className:n.btnAdvert,onClick:L,children:"Learn more"})]})]}),u&&(0,h.jsx)(C,{handleModalToggle:L,children:(0,h.jsx)(x,{advert:a})})]})},A=e=>{let{adverts:a}=e;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("ul",{className:s,children:a.map((e=>(0,h.jsx)(M,{advert:e},(0,i.x0)())))})})}},689:(e,a,r)=>{r.d(a,{Z:()=>d});var t=r(434);const s=e=>e.adverts.adverts,i=e=>e.adverts.isLoading,n=e=>e.adverts.error,l=e=>e.adverts.lengthAdverts,c=e=>e.favorites.favorites,d=()=>{const e=(0,t.v9)(s),a=(0,t.v9)(i),r=(0,t.v9)(n),d=(0,t.v9)(l);return{adverts:e,isLoading:a,error:r,favorites:(0,t.v9)(c),lengthAdverts:d}}},453:(e,a,r)=>{r.r(a),r.d(a,{default:()=>x});var t=r(791),s=r(512),i=r(434),n=r(677),l=r(689),c=r(705);const d={form:"SearchBar_form__gW7Gj",label:"SearchBar_label__4uG7W",input:"SearchBar_input__bIy50",inputBrandWpap:"SearchBar_inputBrandWpap__OvUOQ",inputPriceWpap:"SearchBar_inputPriceWpap__Lk64P",mileageWrap:"SearchBar_mileageWrap__YF+ZA",inputMileage:"SearchBar_inputMileage__Hj8Hb",inputMinMileage:"SearchBar_inputMinMileage__8pGth",searchBtn:"SearchBar_searchBtn__cdWGi"},o=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"]');var m=r(184);const v=e=>{let{onFilter:a}=e;const r=(0,c.TA)({initialValues:{brand:"",price:"",minMileage:"",maxMileage:""},onSubmit:e=>{a(e)}}),t=Array.from({length:20},((e,a)=>30+10*a));return(0,m.jsxs)("form",{onSubmit:r.handleSubmit,className:d.form,children:[(0,m.jsxs)("div",{className:d.inputBrandWpap,children:[(0,m.jsx)("label",{htmlFor:"brand",className:d.label,children:"Car brand"}),(0,m.jsxs)("select",{id:"brand",name:"brand",onChange:r.handleChange,value:r.values.carBrand,className:"".concat(d.input," ").concat(d.inputBrand),children:[(0,m.jsx)("option",{value:"",children:"Enter the text"}),o.map((e=>(0,m.jsx)("option",{value:e,children:e},e)))]})]}),(0,m.jsxs)("div",{className:d.inputPriceWpap,children:[(0,m.jsx)("label",{htmlFor:"price",className:d.label,children:"Price / 1 hour"}),(0,m.jsxs)("select",{id:"price",name:"price",onChange:r.handleChange,value:r.values.carBrand,className:"".concat(d.input),children:[(0,m.jsx)("option",{value:"",children:"To $"}),t.map((e=>(0,m.jsx)("option",{value:e,children:e},e)))]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("label",{htmlFor:"mileage",className:"".concat(d.label),children:"\u0421ar mileage / km"}),(0,m.jsxs)("div",{className:" ".concat(d.mileageWrap),children:[(0,m.jsx)("input",{id:"mileage",name:"minMileage",type:"number",placeholder:"From",onChange:r.handleChange,value:r.values.minMileage,className:"".concat(d.inputMileage," ").concat(d.inputMinMileage)}),(0,m.jsx)("input",{name:"maxMileage",type:"number",placeholder:"To",onChange:r.handleChange,value:r.values.maxMileage,className:"".concat(d.inputMileage)})]})]}),(0,m.jsx)("button",{type:"submit",className:d.searchBtn,children:"Search"})]})},p="LoadMoreBtn_loadMoreBtnWrap__WxX1E",h="LoadMoreBtn_loadMoreBtn__EJd7v",_=e=>{let{handleLoadMore:a}=e;return(0,m.jsx)("div",{className:p,children:(0,m.jsx)("button",{type:"button",onClick:a,className:h,children:"Load more"})})};var C=r(85),u=r(344);const x=()=>{const[e,a]=(0,t.useState)(1),{adverts:r,lengthAdverts:c}=(0,l.Z)(),d=(0,i.I0)();(0,t.useEffect)((()=>{d((0,n.B)(e)).then((()=>{o(c)}))}),[d,e,c]);const o=e=>{e>=12||null!==e&&C.Am.info("No more adverts available.",u.Z)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{onFilter:e=>{console.log(e)}}),(0,m.jsx)(s.Z,{adverts:r}),12===c&&(0,m.jsx)(_,{handleLoadMore:()=>{a((e=>e+1))}})]})}}}]);
//# sourceMappingURL=453.a16b1121.chunk.js.map