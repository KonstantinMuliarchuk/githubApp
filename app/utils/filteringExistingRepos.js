export const filterExistingOrders = (existing, newRepos) => {
    let filtered = []
    let arr = []
    existing.map(order => {
        newRepos.map((newOrder, index) =>{
            if(order.id === newOrder.id) {
                newRepos.splice(index, 1)
            }
        })
    })
    filtered = [...existing, ...newRepos]
    return filtered
}