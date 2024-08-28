
// // the below export statement is used to export the state and mutations
// export const state=()=>({
//     // items are the state variables
//     posts:[]
// })

// // The below mutation is used to update the state
// export const mutations={
//     setPosts(state,posts){
//         state.posts=posts;
//     }
// }


// // The below getters is used to get the state
// export default getters = {
//     allPosts: (state) => state.posts
// }

// // the below actions functions is used to fetch the data
// export const actions ={
//     async fetchPosts({commit}){
//         try{
//             const posts = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts')
//             commit('setPosts',posts)
//         }
//         catch(error){
//             console.log("Error in fetching posts",error)
//         }
        
//     }
// }