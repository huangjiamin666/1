localStorage.setItem('userInfo',JSON.stringfy(res.data.data))
this.$store.commit('setUserInfo')

state:{
    userInfo:localstorage.getItem('userInfo')?JSON.parse(localstorage.getItem('userInfo')):{}
},
mutations:{
    setUserInfo(state,result){
        //更新一个对象
        Vue.set(state.'userInfo',localstorage.getItem('userInfo')?JSON.parse(localstorage.getItem('userInfo')):{})
    }
},
getters:{
    userInfo(state)=>state.userInfo
}