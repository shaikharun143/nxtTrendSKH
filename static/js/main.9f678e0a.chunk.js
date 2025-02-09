(this["webpackJsonpnxt-trendz-specific-product-details"]=this["webpackJsonpnxt-trendz-specific-product-details"]||[]).push([[0],{34:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(27),r=a.n(c),i=a(4),o=a(3),l=a(9),d=a(12),u=a(13),j=a(14),m=a(16),b=a(15),p=a(6),h=a.n(p),g=(a(34),a(0)),O=function(e){function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=Object(m.a)(this,t,[].concat(s))).state={username:"",password:"",showSubmitError:!1,errorMsg:""},e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.onChangePassword=function(t){e.setState({password:t.target.value})},e.onSubmitSuccess=function(t){var a=e.props.history;h.a.set("jwt_token",t,{expires:30,path:"/"}),a.replace("/")},e.onSubmitFailure=function(t){e.setState({showSubmitError:!0,errorMsg:t})},e.submitForm=function(){var t=Object(d.a)(Object(l.a)().mark((function t(a){var s,n,c,r,i,o,d;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),s=e.state,n=s.username,c=s.password,r={username:n,password:c},i={method:"POST",body:JSON.stringify(r)},t.next=7,fetch("https://apis.ccbp.in/login",i);case 7:return o=t.sent,t.next=10,o.json();case 10:d=t.sent,!0===o.ok?e.onSubmitSuccess(d.jwt_token):e.onSubmitFailure(d.error_msg);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.renderPasswordField=function(){var t=e.state.password;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("label",{className:"input-label",htmlFor:"password",children:"PASSWORD"}),Object(g.jsx)("input",{type:"password",id:"password",className:"password-input-field",value:t,onChange:e.onChangePassword})]})},e.renderUsernameField=function(){var t=e.state.username;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("label",{className:"input-label",htmlFor:"username",children:"USERNAME"}),Object(g.jsx)("input",{type:"text",id:"username",className:"username-input-field",value:t,onChange:e.onChangeUsername})]})},e}return Object(b.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.state,t=e.showSubmitError,a=e.errorMsg;return void 0!==h.a.get("jwt_token")?Object(g.jsx)(o.a,{to:"/"}):Object(g.jsxs)("div",{className:"login-form-container",children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",className:"login-website-logo-mobile-image",alt:"website logo"}),Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png",className:"login-image",alt:"website login"}),Object(g.jsxs)("form",{className:"form-container",onSubmit:this.submitForm,children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",className:"login-website-logo-desktop-image",alt:"website logo"}),Object(g.jsx)("div",{className:"input-container",children:this.renderUsernameField()}),Object(g.jsx)("div",{className:"input-container",children:this.renderPasswordField()}),Object(g.jsx)("button",{type:"submit",className:"login-button",children:"Login"}),t&&Object(g.jsxs)("p",{className:"error-message",children:["*",a]})]})]})}}])}(s.Component),x=O,v=(a(41),Object(o.g)((function(e){var t=function(){var t=e.history;h.a.remove("jwt_token"),t.replace("/login")};return Object(g.jsxs)("nav",{className:"nav-header",children:[Object(g.jsxs)("div",{className:"nav-content",children:[Object(g.jsxs)("div",{className:"nav-bar-mobile-logo-container",children:[Object(g.jsx)(i.b,{to:"/",children:Object(g.jsx)("img",{className:"website-logo",src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",alt:"website logo"})}),Object(g.jsx)("button",{type:"button",className:"nav-mobile-btn",children:Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png",alt:"nav logout",className:"nav-bar-image",onClick:t})})]}),Object(g.jsxs)("div",{className:"nav-bar-large-container",children:[Object(g.jsx)(i.b,{to:"/",children:Object(g.jsx)("img",{className:"website-logo",src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",alt:"website logo"})}),Object(g.jsxs)("ul",{className:"nav-menu",children:[Object(g.jsx)("li",{className:"nav-menu-item",children:Object(g.jsx)(i.b,{to:"/",className:"nav-link",children:"Home"})}),Object(g.jsx)("li",{className:"nav-menu-item",children:Object(g.jsx)(i.b,{to:"/products",className:"nav-link",children:"Products"})}),Object(g.jsx)("li",{className:"nav-menu-item",children:Object(g.jsx)(i.b,{to:"/cart",className:"nav-link",children:"Cart"})})]}),Object(g.jsx)("button",{type:"button",className:"logout-desktop-btn",onClick:t,children:"Logout"})]})]}),Object(g.jsx)("div",{className:"nav-menu-mobile",children:Object(g.jsxs)("ul",{className:"nav-menu-list-mobile",children:[Object(g.jsx)("li",{className:"nav-menu-item-mobile",children:Object(g.jsx)(i.b,{to:"/",className:"nav-link",children:Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png",alt:"nav home",className:"nav-bar-image"})})}),Object(g.jsx)("li",{className:"nav-menu-item-mobile",children:Object(g.jsx)(i.b,{to:"/products",className:"nav-link",children:Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png",alt:"nav products",className:"nav-bar-image"})})}),Object(g.jsx)("li",{className:"nav-menu-item-mobile",children:Object(g.jsx)(i.b,{to:"/cart",className:"nav-link",children:Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png",alt:"nav cart",className:"nav-bar-image"})})})]})})]})}))),f=(a(42),function(){return void 0===h.a.get("jwt_token")?Object(g.jsx)(o.a,{to:"/login"}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(v,{}),Object(g.jsxs)("div",{className:"home-container",children:[Object(g.jsxs)("div",{className:"home-content",children:[Object(g.jsx)("h1",{className:"home-heading",children:"Clothes That Get YOU Noticed"}),Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png",alt:"clothes that get you noticed",className:"home-mobile-img"}),Object(g.jsx)("p",{className:"home-description",children:"Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way."}),Object(g.jsx)(i.b,{to:"/products",children:Object(g.jsx)("button",{type:"button",className:"shop-now-button",children:"Shop Now"})})," "]}),Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png",alt:"clothes that get you noticed",className:"home-desktop-img"})]})]})}),N=a(19),y=a.n(N),w=a(17),S=(a(61),function(e){var t=function(t){var a=e.enterSearchInput;"Enter"===t.key&&a()},a=function(t){(0,e.changeSearchInput)(t.target.value)},s=e.clearFilters;return Object(g.jsxs)("div",{className:"filters-group-container",children:[function(){var s=e.searchInput;return Object(g.jsxs)("div",{className:"search-input-container",children:[Object(g.jsx)("input",{value:s,type:"search",className:"search-input",placeholder:"Search",onChange:a,onKeyDown:t}),Object(g.jsx)(w.d,{className:"search-icon"})]})}(),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{className:"category-heading",children:"Category"}),Object(g.jsx)("ul",{className:"categories-list",children:e.categoryOptions.map((function(t){var a=e.changeCategory,s=e.activeCategoryId,n=t.categoryId===s?"category-name active-category-name":"category-name";return Object(g.jsx)("li",{className:"category-item",onClick:function(){return a(t.categoryId)},children:Object(g.jsx)("p",{className:n,children:t.name})},t.categoryId)}))})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"rating-heading",children:"Rating"}),Object(g.jsx)("ul",{className:"ratings-list",children:e.ratingsList.map((function(t){var a=e.changeRating,s=e.activeRatingId===t.ratingId?"and-up active-rating":"and-up";return Object(g.jsxs)("li",{className:"rating-item",onClick:function(){return a(t.ratingId)},children:[Object(g.jsx)("img",{src:t.imageUrl,alt:"rating ".concat(t.ratingId),className:"rating-image"}),Object(g.jsx)("p",{className:s,children:"& up"})]},t.ratingId)}))})]}),Object(g.jsx)("button",{type:"button",className:"clear-filters-btn",onClick:s,children:"Clear Filters"})]})}),I=(a(62),function(e){var t=e.productData,a=t.id,s=t.title,n=t.brand,c=t.imageUrl,r=t.rating,o=t.price;return Object(g.jsx)("li",{className:"product-item",children:Object(g.jsxs)(i.b,{className:"product-item-link",to:"/products/".concat(a),children:[Object(g.jsx)("img",{src:c,alt:"product",className:"thumbnail"}),Object(g.jsx)("h1",{className:"title",children:s}),Object(g.jsxs)("p",{className:"brand",children:["by ",n]}),Object(g.jsxs)("div",{className:"product-details",children:[Object(g.jsxs)("p",{className:"price",children:["Rs ",o,"/-"]}),Object(g.jsxs)("div",{className:"rating-container",children:[Object(g.jsx)("p",{className:"rating",children:r}),Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/star-img.png",alt:"star",className:"star"})]})]})]})})}),k=(a(63),function(e){var t=e.sortbyOptions,a=e.activeOptionId;return Object(g.jsxs)("div",{className:"products-header",children:[Object(g.jsx)("h1",{className:"products-list-heading",children:"All Products"}),Object(g.jsxs)("div",{className:"sort-by-container",children:[Object(g.jsx)(w.b,{className:"sort-by-icon"}),Object(g.jsx)("p",{className:"sort-by",children:"Sort by"}),Object(g.jsx)("select",{className:"sort-by-select",value:a,onChange:function(t){(0,e.changeSortby)(t.target.value)},children:t.map((function(e){return Object(g.jsx)("option",{value:e.optionId,className:"select-option",children:e.displayText},e.optionId)}))})]})]})}),C=(a(64),[{name:"Clothing",categoryId:"1"},{name:"Electronics",categoryId:"2"},{name:"Appliances",categoryId:"3"},{name:"Grocery",categoryId:"4"},{name:"Toys",categoryId:"5"}]),P=[{optionId:"PRICE_HIGH",displayText:"Price (High-Low)"},{optionId:"PRICE_LOW",displayText:"Price (Low-High)"}],D=[{ratingId:"4",imageUrl:"https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png"},{ratingId:"3",imageUrl:"https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png"},{ratingId:"2",imageUrl:"https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png"},{ratingId:"1",imageUrl:"https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png"}],F="INITIAL",R="SUCCESS",_="FAILURE",L="IN_PROGRESS",A=function(e){function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=Object(m.a)(this,t,[].concat(s))).state={productsList:[],apiStatus:F,activeOptionId:P[0].optionId,activeCategoryId:"",searchInput:"",activeRatingId:""},e.getProducts=Object(d.a)(Object(l.a)().mark((function t(){var a,s,n,c,r,i,o,d,u,j,m;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:L}),a=e.state,s=a.activeOptionId,n=a.activeCategoryId,c=a.searchInput,r=a.activeRatingId,i=h.a.get("jwt_token"),o="https://apis.ccbp.in/products?sort_by=".concat(s,"&category=").concat(n,"&title_search=").concat(c,"&rating=").concat(r),d={headers:{Authorization:"Bearer ".concat(i)},method:"GET"},t.next=7,fetch(o,d);case 7:if(!(u=t.sent).ok){t.next=16;break}return t.next=11,u.json();case 11:j=t.sent,m=j.products.map((function(e){return{title:e.title,brand:e.brand,price:e.price,id:e.id,imageUrl:e.image_url,rating:e.rating}})),e.setState({productsList:m,apiStatus:R}),t.next=17;break;case 16:e.setState({apiStatus:_});case 17:case"end":return t.stop()}}),t)}))),e.changeSortby=function(t){e.setState({activeOptionId:t},e.getProducts)},e.clearFilters=function(){e.setState({searchInput:"",activeCategoryId:"",activeRatingId:""},e.getProducts)},e.changeRating=function(t){e.setState({activeRatingId:t},e.getProducts)},e.changeCategory=function(t){e.setState({activeCategoryId:t},e.getProducts)},e.enterSearchInput=function(){e.getProducts()},e.changeSearchInput=function(t){e.setState({searchInput:t})},e.renderFailureView=function(){return Object(g.jsxs)("div",{className:"products-error-view-container",children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png",alt:"products failure",className:"products-failure-img"}),Object(g.jsx)("h1",{className:"product-failure-heading-text",children:"Oops! Something Went Wrong"}),Object(g.jsx)("p",{className:"products-failure-description",children:"We are having some trouble processing your request. Please try again."})]})},e.renderProductsListView=function(){var t=e.state,a=t.productsList,s=t.activeOptionId;return a.length>0?Object(g.jsxs)("div",{className:"all-products-container",children:[Object(g.jsx)(k,{activeOptionId:s,sortbyOptions:P,changeSortby:e.changeSortby}),Object(g.jsx)("ul",{className:"products-list",children:a.map((function(e){return Object(g.jsx)(I,{productData:e},e.id)}))})]}):Object(g.jsxs)("div",{className:"no-products-view",children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png",className:"no-products-img",alt:"no products"}),Object(g.jsx)("h1",{className:"no-products-heading",children:"No Products Found"}),Object(g.jsx)("p",{className:"no-products-description",children:"We could not find any products. Try other filters."})]})},e.renderLoadingView=function(){return Object(g.jsx)("div",{className:"products-loader-container",children:Object(g.jsx)(y.a,{type:"ThreeDots",color:"#0b69ff",height:"50",width:"50"})})},e.renderAllProducts=function(){switch(e.state.apiStatus){case R:return e.renderProductsListView();case _:return e.renderFailureView();case L:return e.renderLoadingView();default:return null}},e}return Object(b.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"render",value:function(){var e=this.state,t=e.activeCategoryId,a=e.searchInput,s=e.activeRatingId;return Object(g.jsxs)("div",{className:"all-products-section",children:[Object(g.jsx)(S,{searchInput:a,categoryOptions:C,ratingsList:D,changeSearchInput:this.changeSearchInput,enterSearchInput:this.enterSearchInput,activeCategoryId:t,activeRatingId:s,changeCategory:this.changeCategory,changeRating:this.changeRating,clearFilters:this.clearFilters}),this.renderAllProducts()]})}}])}(s.Component),z=A,E=(a(65),"INITIAL"),U="SUCCESS",T="FAILURE",V="IN_PROGRESS",q=function(e){function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=Object(m.a)(this,t,[].concat(s))).state={primeDeals:[],apiStatus:E},e.getPrimeDeals=Object(d.a)(Object(l.a)().mark((function t(){var a,s,n,c,r;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:V}),a=h.a.get("jwt_token"),s={headers:{Authorization:"Bearer ".concat(a)},method:"GET"},t.next=6,fetch("https://apis.ccbp.in/prime-deals",s);case 6:if(!0!==(n=t.sent).ok){t.next=13;break}return t.next=10,n.json();case 10:c=t.sent,r=c.prime_deals.map((function(e){return{title:e.title,brand:e.brand,price:e.price,id:e.id,imageUrl:e.image_url,rating:e.rating}})),e.setState({primeDeals:r,apiStatus:U});case 13:401===n.status&&e.setState({apiStatus:T});case 14:case"end":return t.stop()}}),t)}))),e.renderPrimeDealsList=function(){var t=e.state.primeDeals;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"primedeals-list-heading",children:"Exclusive Prime Deals"}),Object(g.jsx)("ul",{className:"products-list",children:t.map((function(e){return Object(g.jsx)(I,{productData:e},e.id)}))})]})},e.renderPrimeDealsFailureView=function(){return Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png",alt:"Register Prime",className:"register-prime-image"})},e.renderLoadingView=function(){return Object(g.jsx)("div",{className:"primedeals-loader-container",children:Object(g.jsx)(y.a,{type:"ThreeDots",color:"#0b69ff",height:"50",width:"50"})})},e}return Object(b.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.getPrimeDeals()}},{key:"render",value:function(){switch(this.state.apiStatus){case U:return this.renderPrimeDealsList();case T:return this.renderPrimeDealsFailureView();case V:return this.renderLoadingView();default:return null}}}])}(s.Component),G=q,M=(a(66),function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(v,{}),Object(g.jsxs)("div",{className:"product-sections",children:[Object(g.jsx)(G,{}),Object(g.jsx)(z,{})]})]})}),W=(a(67),function(e){var t=e.similarProductDetails,a=(t.id,t.brand),s=t.imageUrl,n=t.price,c=t.rating,r=t.title;return Object(g.jsxs)("li",{className:"list-item-similar",children:[Object(g.jsx)("img",{src:s,className:"item-image",alt:"similar product ".concat(r)}),Object(g.jsx)("p",{className:"title-para-item",children:r}),Object(g.jsxs)("p",{className:"brand-para-item",children:["by ",a]}),Object(g.jsxs)("div",{className:"price-rating-container-list",children:[Object(g.jsxs)("p",{className:"price-para-list",children:["Rs ",n,"/-"]}),Object(g.jsxs)("div",{className:"rating-star-container-list",children:[Object(g.jsx)("p",{className:"rating-para-list",children:c}),Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/star-img.png",alt:"star",className:"star-img-list"})]})]})]})}),B=(a(68),"INITIAL"),H="SUCCESS",Q="FAILURE",J="IN_PROGRESS",Y=function(e){function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=Object(m.a)(this,t,[].concat(s))).state={productItemData:{},similarProductData:[],apiStatus:B,quality:1},e.getForrmattedData=function(e){return{id:e.id,imageUrl:e.image_url,title:e.title,brand:e.brand,totalReviews:e.total_reviews,rating:e.rating,availability:e.availability,description:e.description,price:e.price}},e.getProductResponse=Object(d.a)(Object(l.a)().mark((function t(){var a,s,n,c,r,i,o,d,u,j;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match,s=a.params,n=s.id,e.setState({apiStatus:J}),c=h.a.get("jwt_token"),r="https://apis.ccbp.in/products/".concat(n),i={headers:{Authorization:"Bearer ".concat(c)},method:"GET"},t.next=9,fetch(r,i);case 9:if(!(o=t.sent).ok){t.next=17;break}return t.next=13,o.json();case 13:d=t.sent,u=e.getForrmattedData(d),j=d.similar_products.map((function(t){return e.getForrmattedData(t)})),e.setState({productItemData:u,apiStatus:H,similarProductData:j});case 17:404===o.status&&e.setState({apiStatus:Q});case 18:case"end":return t.stop()}}),t)}))),e.renderLoadingView=function(){return Object(g.jsx)("div",{className:"primedeals-loader-container","data-testid":"loader",children:Object(g.jsx)(y.a,{type:"ThreeDots",color:"#0b69ff",height:"50",width:"50"})})},e.renderProduceDetailsFailureView=function(){return Object(g.jsxs)("div",{className:"failure-container",children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png",className:"error-view-image",alt:"failure view"}),Object(g.jsx)("h1",{className:"error-view-heading",children:"Product Not Found"}),Object(g.jsx)(i.b,{to:"/products",children:Object(g.jsx)("button",{type:"button",className:"error-view-button",children:"Continue Shopping"})})]})},e.onClickIncreaseQuality=function(){e.setState((function(e){return{quality:e.quality+1}}))},e.onClickDecreaseQuality=function(){e.state.quality>1&&e.setState((function(e){return{quality:e.quality-1}}))},e.renderProduceDetailsSuccessView=function(){var t=e.state,a=t.productItemData,s=t.quality,n=t.similarProductData,c=(a.id,a.imageUrl),r=a.title,i=a.brand,o=a.totalReviews,l=a.rating,d=a.availability,u=a.description,j=a.price;return Object(g.jsxs)("div",{className:"succes-container-details-information",children:[Object(g.jsxs)("div",{className:"succes-container-details-information-row",children:[Object(g.jsx)("img",{src:c,className:"image-product",alt:"product"}),Object(g.jsxs)("div",{className:"right-succes-container-details-row",children:[Object(g.jsx)("h1",{className:"title-heading",children:r}),Object(g.jsxs)("p",{className:"price-para",children:["Rs ",j,"/-"]}),Object(g.jsxs)("div",{className:"rating-review-container",children:[Object(g.jsxs)("div",{className:"star-rating-container",children:[Object(g.jsx)("p",{className:"rating-para",children:l}),Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/star-img.png",alt:"star",className:"star-image"})]}),Object(g.jsxs)("p",{className:"total_reviews-para",children:[o," Reviews"]})]}),Object(g.jsx)("p",{className:"para-description",children:u}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{className:"para-avara-brand",children:[Object(g.jsx)("span",{className:"para-avara-brand-span",children:"Available:"})," ",d]}),Object(g.jsxs)("p",{className:"para-avara-brand",children:[Object(g.jsx)("span",{className:"para-avara-brand-span",children:"Brand:"})," ",i]})]}),Object(g.jsx)("hr",{className:"horizontal-line"}),Object(g.jsxs)("div",{className:"quality-container",children:[Object(g.jsx)("button",{"data-testid":"minus",className:"button-bsSquare",onClick:e.onClickDecreaseQuality,children:Object(g.jsx)(w.a,{})}),Object(g.jsx)("p",{children:s}),Object(g.jsx)("button",{"data-testid":"plus",className:"button-bsSquare",onClick:e.onClickIncreaseQuality,children:Object(g.jsx)(w.c,{})})]}),Object(g.jsx)("button",{className:"add-to-cart-button",children:"ADD TO CART"})]})]}),Object(g.jsxs)("div",{className:"similar_products-container",children:[Object(g.jsx)("h1",{className:"similar_products-headers",children:"Similar Products"}),Object(g.jsx)("ul",{className:"similar_products-list-container",children:n.map((function(e){return Object(g.jsx)(W,{similarProductDetails:e},e.id)}))})]})]})},e.renderAllCondtionSwtchView=function(){switch(e.state.apiStatus){case H:return e.renderProduceDetailsSuccessView();case Q:return e.renderProduceDetailsFailureView();case J:return e.renderLoadingView();default:return null}},e}return Object(b.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.getProductResponse()}},{key:"render",value:function(){var e=this.state,t=e.productItemData,a=e.similarProductData;return console.log(t),console.log(a),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(v,{}),Object(g.jsx)("div",{className:"ProductItemDetails-container",children:this.renderAllCondtionSwtchView()})]})}}])}(s.Component),K=Y,X=(a(69),function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(v,{}),Object(g.jsx)("div",{className:"cart-container",children:Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png",alt:"cart",className:"cart-img"})})]})}),Z=(a(70),function(){return Object(g.jsx)("div",{className:"not-found-container",children:Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png",alt:"not found",className:"not-found-img"})})}),$=a(29),ee=function(e){return void 0===h.a.get("jwt_token")?Object(g.jsx)(o.a,{to:"/login"}):Object(g.jsx)(o.b,Object($.a)({},e))},te=(a(71),function(){return Object(g.jsxs)(o.d,{children:[Object(g.jsx)(o.b,{exact:!0,path:"/login",component:x}),Object(g.jsx)(ee,{exact:!0,path:"/",component:f}),Object(g.jsx)(ee,{exact:!0,path:"/products",component:M}),Object(g.jsx)(ee,{exact:!0,path:"/products/:id",component:K}),Object(g.jsx)(ee,{exact:!0,path:"/cart",component:X}),Object(g.jsx)(o.b,{path:"/not-found",component:Z}),Object(g.jsx)(o.a,{to:"not-found"})]})});r.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(i.a,{children:Object(g.jsx)(te,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.9f678e0a.chunk.js.map