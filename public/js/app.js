new Vue({
    el: '#app',
    data: {
        query: '' //입력데이터를 받아서 저장한다
    },
    methods: {
        onSubmit(e){
            debugger
        },
        onKeyup(){
            if(!this.query.length) this.onReset()
        },
        onReset(){
            this.query= '' //this 는 vue인스턴스를 의미
            //todo 검색결과를 숨기는 ...
            debugger
        }
        
    }
})