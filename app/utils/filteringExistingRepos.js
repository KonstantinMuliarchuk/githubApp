import _ from 'lodash'

export const filterExistingOrders = (existing, newRepos) => {
    let filtered = []
    let arr = []
    existing.map(order => {
        newRepos.map((newOrder, index) =>{
            if(_.isEqual(order, newOrder)) {
                newRepos.splice(index, 1)
            }
        })
    })
    filtered = [...existing, ...newRepos]
    return filtered
}