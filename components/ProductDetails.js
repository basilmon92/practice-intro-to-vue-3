app.component('product-details',{
    props: {
        details: {
            type: String,
            required: true
        }
    },
    template: `<p>{{moreDetailsOfProduct}}</p>`,
    computed: {
        moreDetailsOfProduct() {
            if (this.details) {
                return this.details + " " + "..."
            } return "No details found"
        }
    }
})