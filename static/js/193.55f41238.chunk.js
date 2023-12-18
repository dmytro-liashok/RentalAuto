"use strict";(self.webpackChunktest_task=self.webpackChunktest_task||[]).push([[193],{7512:(e,r,a)=>{a.d(r,{Z:()=>M});var t=a(2791);const s="AdvertsList_advertsList__AuKQZ";var i=a(5984);const n={advertsItem:"AdvertsItem_advertsItem__t20Mk",imgAdvertWrapp:"AdvertsItem_imgAdvertWrapp__lhj+6",imgAdvert:"AdvertsItem_imgAdvert__Qoprk",iconIsFavorite:"AdvertsItem_iconIsFavorite__VNAHr",iconFavorite:"AdvertsItem_iconFavorite__fquWz",advertCarTitleDescription:"AdvertsItem_advertCarTitleDescription__pkpp1",advertCarModel:"AdvertsItem_advertCarModel__R-9HX",advertCarDescription:"AdvertsItem_advertCarDescription__0HvB1",advertCarDescriptionItem:"AdvertsItem_advertCarDescriptionItem__TJwFn",btnAdvert:"AdvertsItem_btnAdvert__Yyzfx"};var c=a(6689);const d=()=>{const{favorites:e}=(0,c.Z)();return{getCityFromAdress:e=>e.split(",")[1].trim(),getCountryFromAdress:e=>e.split(",")[2].trim(),getRandomAccessory:e=>e[Math.floor(Math.random()*e.length)].split(" ").slice(0,3).join(" "),isFavorite:r=>e.some((e=>e.id===r.id)),convertingSringOnArray:e=>e.split("\n")}};var l=a(4164);const o="ModalWindow_backdrop__Tr-1X",m="ModalWindow_modalContent__9PrUR",v="ModalWindow_iconClose__AASV1";var C=a(71),p=a(3889),_=a(184);const h=document.getElementById("modal-root"),x=e=>{let{handleModalToggle:r,children:a}=e;(0,t.useEffect)((()=>{const e=e=>{"Escape"===e.code&&r()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[r]);return(0,l.createPortal)((0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:o,onClick:e=>{e.currentTarget===e.target&&r()},children:(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)(C.IOM,{className:v,onClick:r}),(0,_.jsx)(p.$B,{style:{width:500,height:650},children:a})]})})}),h)},j={imgAdvertWrap:"ModalDetailedDescriptionCar_imgAdvertWrap__8eaLO",imgAdvert:"ModalDetailedDescriptionCar_imgAdvert__1HMH0",advertCarTitleWrap:"ModalDetailedDescriptionCar_advertCarTitleWrap__J16E+",advertCarModel:"ModalDetailedDescriptionCar_advertCarModel__U1kDY",advertCarDescriptionList:"ModalDetailedDescriptionCar_advertCarDescriptionList__SRhtj",advertCarDescriptionItem:"ModalDetailedDescriptionCar_advertCarDescriptionItem__0fXhk",advertCarDescription:"ModalDetailedDescriptionCar_advertCarDescription__FtJiB",advertCarAccessories:"ModalDetailedDescriptionCar_advertCarAccessories__aUxwq",advertCarAccessoriesList:"ModalDetailedDescriptionCar_advertCarAccessoriesList__BYQ+i",advertCarAccessoriesItem:"ModalDetailedDescriptionCar_advertCarAccessoriesItem__nCH9B",rentalConditionsList:"ModalDetailedDescriptionCar_rentalConditionsList__G-bpN",rentalConditionsItem:"ModalDetailedDescriptionCar_rentalConditionsItem__uGeG1",accentRentalCondition:"ModalDetailedDescriptionCar_accentRentalCondition__qKMLe",rentalCarLink:"ModalDetailedDescriptionCar_rentalCarLink__n8ed5"},D=e=>{let{advert:r}=e;const{id:a,img:t,make:s,model:i,year:n,rentalPrice:c,address:l,type:o,mileage:m,accessories:v,fuelConsumption:C,engineSize:p,description:h,functionalities:x,rentalConditions:D}=r,{getCityFromAdress:g,getCountryFromAdress:A,convertingSringOnArray:N}=d(),I=N(D);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:j.imgAdvertWrap,children:(0,_.jsx)("img",{src:t,alt:"car",className:j.imgAdvert})}),(0,_.jsx)("div",{className:j.advertCarTitleWrap,children:(0,_.jsxs)("p",{className:j.advertCarTitle,children:["".concat(s," "),(0,_.jsx)("span",{className:j.advertCarModel,children:i}),", ".concat(n)]})}),(0,_.jsxs)("ul",{className:j.advertCarDescriptionList,children:[(0,_.jsx)("li",{className:j.advertCarDescriptionItem,children:g(l)}),(0,_.jsx)("li",{className:j.advertCarDescriptionItem,children:A(l)}),(0,_.jsx)("li",{className:j.advertCarDescriptionItem,children:"Id: ".concat(a)}),(0,_.jsx)("li",{className:j.advertCarDescriptionItem,children:"Year: ".concat(n)}),(0,_.jsx)("li",{className:j.advertCarDescriptionItem,children:"Type: ".concat(o)}),(0,_.jsx)("li",{className:j.advertCarDescriptionItem,children:"Fuel Consumption: ".concat(C)}),(0,_.jsx)("li",{className:j.advertCarDescriptionItem,children:"Engine Size: ".concat(p)})]}),(0,_.jsx)("p",{className:j.advertCarDescription,children:h}),(0,_.jsx)("p",{className:j.advertCarAccessories,children:"Accessories and functionalities:"}),(0,_.jsxs)("ul",{className:j.advertCarAccessoriesList,children:[v.map((e=>(0,_.jsx)("li",{className:j.advertCarAccessoriesItem,children:e},e))),x.map((e=>(0,_.jsx)("li",{className:j.advertCarAccessoriesItem,children:e},e)))]}),(0,_.jsx)("p",{className:j.advertCarAccessories,children:"Rental Conditions: "}),(0,_.jsxs)("ul",{className:j.rentalConditionsList,children:[I.map(((e,r)=>{const[a,t]=e.split(": ");return"Minimum age"===a?(0,_.jsxs)("li",{className:j.rentalConditionsItem,children:[a,":\xa0",(0,_.jsx)("span",{className:j.accentRentalCondition,children:t})]},r):(0,_.jsx)("li",{className:j.rentalConditionsItem,children:e},r)})),(0,_.jsxs)("li",{className:j.rentalConditionsItem,children:["Mileage:\xa0",(0,_.jsx)("span",{className:j.accentRentalCondition,children:m.toLocaleString("en-US")})]}),(0,_.jsxs)("li",{className:j.rentalConditionsItem,children:["Price",":","\xa0",(0,_.jsx)("span",{className:j.accentRentalCondition,children:c})]})]}),(0,_.jsx)("a",{href:"tel:+380730000000",className:j.rentalCarLink,children:"Rental car"})]})};var g=a(4373),A=a(9434),N=a(6201);const I=e=>{let{advert:r}=e;const{img:a,make:s,model:i,year:c,rentalPrice:l,address:o,rentalCompany:m,type:v,mileage:C,accessories:p}=r,[h,j]=(0,t.useState)(!1),I=(0,A.I0)(),{getCityFromAdress:u,getCountryFromAdress:M,isFavorite:y}=d(),L=()=>{j((e=>!e))},k=e=>{I((0,N._p)(e))};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("li",{className:n.advertsItem,children:[(0,_.jsxs)("div",{className:n.imgAdvertWrapp,children:[(0,_.jsx)("img",{src:a,alt:"car",className:n.imgAdvert}),y(r)?(0,_.jsx)(g.$g3,{className:"".concat(n.iconIsFavorite," ").concat(n.iconFavorite),onClick:()=>{k(r)}}):(0,_.jsx)(g.AWH,{className:n.iconIsFavorite,onClick:()=>{k(r)}})]}),(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:n.advertCarTitleDescription,children:[(0,_.jsxs)("p",{className:n.advertCarTitle,children:["".concat(s," "),(0,_.jsx)("span",{className:n.advertCarModel,children:i}),", ".concat(c)]}),(0,_.jsx)("p",{className:n.advertCarPrice,children:l})]}),(0,_.jsxs)("ul",{className:n.advertCarDescription,children:[(0,_.jsx)("li",{className:n.advertCarDescriptionItem,children:u(o)}),(0,_.jsx)("li",{className:n.advertCarDescriptionItem,children:M(o)}),(0,_.jsx)("li",{className:n.advertCarDescriptionItem,children:m}),(0,_.jsx)("li",{className:n.advertCarDescriptionItem,children:v}),(0,_.jsx)("li",{className:n.advertCarDescriptionItem,children:s}),(0,_.jsx)("li",{className:n.advertCarDescriptionItem,children:C}),(0,_.jsx)("li",{className:n.advertCarDescriptionItem,children:p[0]})]}),(0,_.jsx)("button",{className:n.btnAdvert,onClick:L,children:"Learn more"})]})]}),h&&(0,_.jsx)(x,{handleModalToggle:L,children:(0,_.jsx)(D,{advert:r})})]})},u=t.memo(I),M=e=>{let{adverts:r}=e;return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("ul",{className:s,children:null===r||void 0===r?void 0:r.map((e=>(0,_.jsx)(u,{advert:e},(0,i.x0)())))})})}},7237:(e,r,a)=>{a.d(r,{Z:()=>n});a(2791);const t="EmptyList_emptyFavorite__nL4Uz",s="EmptyList_emptyContainer__usicC";var i=a(184);const n=e=>{let{textEmpty:r}=e;return(0,i.jsx)("div",{className:s,children:(0,i.jsx)("div",{className:t,children:r})})}},6689:(e,r,a)=>{a.d(r,{Z:()=>l});var t=a(9434);const s=e=>e.adverts.adverts,i=e=>e.adverts.isLoading,n=e=>e.adverts.error,c=e=>e.adverts.lengthAdverts,d=e=>e.favorites.favorites,l=()=>{const e=(0,t.v9)(s),r=(0,t.v9)(i),a=(0,t.v9)(n),l=(0,t.v9)(c);return{adverts:e,isLoading:r,error:a,favorites:(0,t.v9)(d),lengthAdverts:l}}},9193:(e,r,a)=>{a.r(r),a.d(r,{default:()=>c});a(2791);var t=a(6689),s=a(7512),i=a(7237),n=a(184);const c=()=>{const{favorites:e}=(0,t.Z)();return(0,n.jsx)(n.Fragment,{children:0===e.length?(0,n.jsx)(i.Z,{textEmpty:"Your favorite ads will be displayed here"}):(0,n.jsx)(s.Z,{adverts:e})})}}}]);
//# sourceMappingURL=193.55f41238.chunk.js.map