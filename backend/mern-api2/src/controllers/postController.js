


// async function getPost(req, res, next) {
//     res.json({
//         'name': 'Harry potter book 1',
//         'price': '$600'
//     })

//     next()
// }

const getPost = (req, res, next) => {
    res.json(
            { 
                status: 200, 
                message: 'Get Data Success', 
                data : { 
                    'name': 'Harry potter book 1',
                    'price': '$650'
                }
            } 
        )

    next()
}

module.exports = { getPost }