import { Server, Model } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
    let server = new Server({
        environment,

        models: {
            user: Model,
        },

        seeds(server) {
            server.create('users',
                { username: 'admin', password: 'admin', solo: 34, duo: 76
                }
            )
        },

        routes() {
            this.namespace = 'api';

            this.get('/users', schema => {
                return schema.users.all()
            })
        },
    })

    return server
}
