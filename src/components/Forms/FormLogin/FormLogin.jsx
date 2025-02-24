import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useState } from "react"
import google from '../../../images/z6326305906215_91f5c28bec5ebbfb531cf8d0ec6986cb.jpg'

function FormLogin() {
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [validEmail, setValidEmail] = useState('');
    const [validPassword, setValidPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorSubmit, setErrorSubmit] = useState('');

    const handleChangeEmail = (e) => {
        if (emailPattern.test(e.target.value)) {
            setValueEmail(e.target.value);
            setValidEmail('border-green-500');
            setErrorEmail('');
        } else {
            setValidEmail('border-red-500');
            setErrorEmail('Email không hợp lệ!');
        }
    }
    const handleChangePassword = (e) => {
        if (passwordPattern.test(e.target.value)) {
            setValuePassword(e.target.value);
            setValidPassword('border-green-500');
            setErrorPassword('')
        } else {
            setValidPassword('border-red-500');
            setErrorPassword('Password không hợp lệ!');
        }
    }
    const handleSubmit = () => {
        if (valueEmail === '' || valuePassword === '') {
            setValidEmail('border-red-500');
            setErrorEmail('Email không hợp lệ!');
            setValidPassword('border-red-500');
            setErrorPassword('Password không hợp lệ!');
            setErrorSubmit('Vui lòng hoàn thành các mục trên!')
        } else {
            setValidEmail('border-green-500');
            setErrorEmail('');
            setValidPassword('border-green-500');
            setErrorPassword('');
            setErrorSubmit('')
        }
    }
    return (
        <>
            <div className="w-full">
                <div className=" w-full items-center gap-1.5 mb-[20px]">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder='Enter your email' className={validEmail} onChange={handleChangeEmail} />
                    <span className="text-red-600 text-[0.8rem]">{errorEmail}</span>
                </div>
                <div className=" w-full items-center gap-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder='Enter your password' className={validPassword} onChange={handleChangePassword} />
                    <span className="text-red-600 text-[0.8rem]">{errorPassword}</span>
                </div>
                <div className="flex items-center mt-[20px]">
                    <div className="space-x-2 flex items-center justify-start w-1/2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-[0.8rem] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="mt-[10px] mb-[30px]">
                    <Button  size='lg' className='w-full bg-[#5BBD2B]' onClick={handleSubmit}>Log in</Button>
                    <span className="text-red-600 text-[0.8rem]">{errorSubmit}</span>
                </div>
                <div className="text-center mt-[10px] mb-[10px]">
                    <p className="text-[0.8rem]">Dont have an account? <Link to='/register'><span className="text-[#367517] font-bold">Sign up</span></Link></p>
                </div>
                <div className="flex items-center justify-center mb-[30px]">
                    <div className="border-t-[1px] border-t-[#ddd] w-full"></div>
                    <span className="whitespace-nowrap text-[0.8rem] px-[50px]">Or sign up with email</span>
                    <div className="border-t-[1px] border-t-[#ddd] w-full"></div>
                </div>
                <div>
                    <Button variant="outline" className='w-full'>  
                        <img src={google} className="h-full"/>
                        <span className="text-[#367517]">Sign in with Google</span>
                    </Button>
                </div>
                
            </div>
        </>
    )
}
export default FormLogin;