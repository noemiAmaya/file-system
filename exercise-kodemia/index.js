const fs = require('fs')

const express = require('express')

const mentorsKodemia = JSON.parse(fs.readFileSync('mentorsKodemia.json'))

const server = express()

server.use(express.json())

server.get('/mentors', (request, response) => {
    response.json({
        message: 'All the mentors',
        data: {
            mentors: mentorsKodemia.mentors
        }
    })

})

server.post('/mentors', (request, response) => {
    const newMentor = {
        name: request.body.name,
        class: request.body.class
    }

    mentorsKodemia.mentors.push(newMentor)

    response.json({
        message: 'New mentor added',
        data: {
            mentor: newMentor
        }
    })

})

server.listen(8080, () => {
    console.log('server is running')
})
