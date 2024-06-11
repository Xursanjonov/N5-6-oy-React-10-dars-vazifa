import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setStorage } from '../../../lib';
import { axiosToken } from '../../../config';

const Login = () => {
    let navigate = useNavigate();
    const [password, setPassword] = useState('emilyspass');
    const [username, setUsername] = useState('emilys');
    const [loading, setLoading] = useState(false);

    const handleLogin = e => {
        e.preventDefault()
        let user = { username, password }
        setLoading(true)

        axiosToken.post('/auth/login', user)
            .then(res => {
                setStorage("x-auth-token", res.data.token)
                toast.success("Token localStorage setItem Token 😎")
                navigate("/admin/create")
            })
            .catch(err => {
                console.log(err);
                toast.error("username or password is incorrect")
            })
            .finally(() => setLoading(false))
    }

    return (
        <div className="login-div w-[1534px] py-32">
            <div className="login w-[500px] h-[380px] mx-auto pb-5 flex flex-col items-center justify-center gap-8 border-2 rounded-lg shadow-md">
                <h2 className='text-4xl mb-5 font-bold text-black'>Login</h2>
                <form onSubmit={handleLogin} className="w-[350px] grid grid-cols-1 gap-5">
                    <input
                        className='input input-success border-2 text-black font-semibold bg-white'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder='username' />
                    <input
                        className='input input-primary border-2 text-black font-semibold bg-white'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="password" />
                    <div className="w-[350px] flex items-center justify-between gap-4">
                        <button onClick={() => navigate("/")} className='btn w-[100px] font-bold btn-info'>Go Home</button>
                        <button onClick={() => navigate(-1)} className='btn w-[100px] font-bold btn-warning'>Go Back</button>
                        <button disabled={loading} type='submit' className='btn w-[100px] font-bold btn-success text-lg text-black'>
                            {loading ? "Loading..." : "Next"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default memo(Login)