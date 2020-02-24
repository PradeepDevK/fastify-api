module.exports = {
    getSingleCar: {
        description: 'Get car details',
        tags: ['cars'],
        summary: 'Get single cars detail',
        operationId: 'getSingleCar',
        produces: [
            "application/json",
            "application/xml"
        ],
        parameters: [{
            name: "_id",
            in: "path",
            description: "id that needs to fetch the car details",
            required: true,
            type: "string"
        }],
        response: {
            200: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    _id: {
                        type: 'string'
                    },
                    title: {
                        type: 'string'
                    },
                    brand: {
                        type: 'string'
                    },
                    price: {
                        type: 'string'
                    },
                    age: {
                        type: 'number'
                    },
                    services: {
                        type: 'object'
                    },
                    __v: {
                        type: 'number'
                    }
                }
            }
        }
    },
    addCarSchema: {
        description: 'Create a new car',
        tags: ['cars'],
        summary: 'Creates new car with given values',
        body: {
            type: 'object',
            properties: {
                title: {
                    type: 'string'
                },
                brand: {
                    type: 'string'
                },
                price: {
                    type: 'string'
                },
                age: {
                    type: 'number'
                },
                services: {
                    type: 'object'
                }
            }
        },
        response: {
            200: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    _id: {
                        type: 'string'
                    },
                    title: {
                        type: 'string'
                    },
                    brand: {
                        type: 'string'
                    },
                    price: {
                        type: 'string'
                    },
                    age: {
                        type: 'number'
                    },
                    services: {
                        type: 'object'
                    },
                    __v: {
                        type: 'number'
                    }
                }
            }
        }
    }
}