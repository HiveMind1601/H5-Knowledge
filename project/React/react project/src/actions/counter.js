
export const allCheckChange = (data) => {
  return {
    type: 'ALLCHECKCHANGE',
    data
  };
};

export const getListData = data => {
  return {
    type: 'GETLISTS',
    data
  };
};

export const addToCartFunc=(data)=>{
  return {
    type:'ADDTOCART',
    data
  }
}

export function addToCart(params){
  return dispatch=>{
    dispatch(addToCartFunc(params))
  }
}

export function delCart(params){
  return {
    type:'DELCART'
  }
}

export const calTotal=data=>{
  return {
    type:'CALTOTAL',
    data
  }
}

export const calCountnum=data=>{
  return {
    type:'CALCOUNTNUM',
    data
  }
}

export const modSingle=data=>{
  return {
    type:'MODSINGLE',
    data
  }
}

export function fetchList(params){
  console.log(params,'098098098')
  params['page']=params.page||1
  var total=0
  return dispatch=>{
    var host="http://localhost:3000"
    // var url=`data.json`;
    // var url = 'http://api.douban.com/v2/movie/top250'
    // var url = 'api/v2/movie/top250';
    //var start  = 20*(params.page-1);
    //var page  = 6*(params.page-1);
    var url=`${host}/${params.url}?_page=${params.page}&_limit=6`;
    return fetch(url)
    .then(res=>{
      //console.log(res.headers.get('X-Total-Count'),'resresresresresresres')
      total=res.headers.get('X-Total-Count')
      return res.json()
    })
    .then((data) => {
        dispatch(getListData(Object.assign({},{subjects:data},{total:total})))
    })
  }
}