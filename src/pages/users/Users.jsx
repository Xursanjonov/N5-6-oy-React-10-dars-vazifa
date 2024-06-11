import React, { memo, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import UserWrapper from '../../components/users-wrapper/UserWrapper'
import baseUrl from '../../config'

const Users = () => {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        baseUrl.get(`users`)
            .then(res => setUsers(res.data))
            .catch(er => console.error(er))
    }, [])

    return (
        <section>
            <UserWrapper key={nanoid()} users={users} title={'Users'} />
        </section>
    )
}

export default memo(Users)