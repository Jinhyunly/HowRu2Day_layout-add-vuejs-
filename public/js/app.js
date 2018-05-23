import SearchModel from './models/SearchModel.js'
new Vue({
    el: '#app',
    data: {
        query: '', //입력데이터를 받아서 저장한다
        submitted: false,
        searchResult: []
    },
    methods: {
        onSubmit(e){
            // debugger
            this.search()
        },
        onKeyup(e){
            if(!this.query.length) this.onReset()
        },
        onReset(e){
           this.resetForm()
        },
        search(){
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
        },
        resetForm(){
            this.query= '' //this 는 vue인스턴스를 의미
            this.submitted = false
            this.searchResult = []
            //todo 검색결과를 숨기는 ...
            // debugger
        }
        
    }
})