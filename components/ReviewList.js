app.component('review-list',{
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    `<div class="review-container">
        <h3>Reviews</h3>
        <ul>
            <li v-for="(review,index) in reviews" :key="index">
                {{review.name}} gave this {{review.rating}} stars
                <br/>
                {{review.review}}
                <br/>
                {{review.recommend != false ? "Recommends this product." : "Does not recommend"}}
            </li>
        </ul>
    </div>`,
    data() {
        return {
            review: 'hello'
        }
    }
})