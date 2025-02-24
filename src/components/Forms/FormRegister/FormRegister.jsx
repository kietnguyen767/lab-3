import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import google from "../../../images/z6326305906215_91f5c28bec5ebbfb531cf8d0ec6986cb.jpg"
import { Link } from "react-router-dom"
import { useState } from "react"
function FormRegister() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const [valueEmail, setValueEmail] = useState('');
        const [valuePassword, setValuePassword] = useState('');
        const [valueRepeatPassword, setValueRepeatPassword] = useState('')
        const [validEmail, setValidEmail] = useState('');
        const [validPassword, setValidPassword] = useState('');
        const [validRepeatPassword, setValidRepeatPassword] = useState('')
        const [errorEmail, setErrorEmail] = useState('');
        const [errorPassword, setErrorPassword] = useState('');
        const [errorRepeatPassword, setErrorRepeatPassword] = useState('');
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
        const handleChangeRepeat = (e) => {
            if (e.target.value === valuePassword) {
                setValueRepeatPassword(e.target.value);
                setValidRepeatPassword('border-green-500');
                setErrorRepeatPassword('')
            } else {
                setValidRepeatPassword('border-red-500');
                setErrorRepeatPassword('Password không trùng khớp!');
            }
        }
        const handleSubmit = () => {
            if (valueEmail === '' || valuePassword === '' || valueRepeatPassword === '') {
                setValidEmail('border-red-500');
                setErrorEmail('Email không hợp lệ!');
                setValidPassword('border-red-500');
                setErrorPassword('Password không hợp lệ!');
                setErrorSubmit('Vui lòng hoàn thành các mục trên!');
                setValidRepeatPassword('border-red-500');
                setErrorRepeatPassword('Password không trùng khớp!');
            } else {
                setValidEmail('border-green-500');
                setErrorEmail('');
                setValidPassword('border-green-500');
                setErrorPassword('');
                setValidRepeatPassword('border-green-500');
                setErrorRepeatPassword('');
                setErrorSubmit('');
            }
        }
    return (
        <>
            <div className="w-full">
                <div className=" w-full items-center gap-1.5 mb-[20px]">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder='Enter your mail' onChange={handleChangeEmail} className={validEmail}/>
                    <span className="text-red-600 text-[0.8rem]">{errorEmail}</span>
                </div>
                <div className=" w-full items-center gap-1.5 mb-[20px]">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder='Enter your password' onChange={handleChangePassword} className={validPassword}/>
                    <span className="text-red-600 text-[0.8rem]">{errorPassword}</span>
                </div>
                <div className=" w-full items-center gap-1.5 ">
                    <Label htmlFor="password">Repeat password</Label>
                    <Input id="repeat-password" type="password" placeholder='Enter your repeat password' onChange={handleChangeRepeat} className={validRepeatPassword}/>
                    <span className="text-red-600 text-[0.8rem]">{errorRepeatPassword}</span>
                </div>
                <div className="mt-[40px] mb-[20px]">
                    <Button variant="destructive" size='lg' className='w-full bg-[#5BBD2B]' onClick={handleSubmit}>Create account</Button>
                    <span className="text-red-600 text-[0.8rem]">{errorSubmit}</span>
                </div>
                <div className="text-center mt-[10px] mb-[10px]">
                    <p className="text-[0.8rem]">Already have an account? <Link to='/login'><span className="text-[#367517] font-bold">Log in</span></Link></p>
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
export default FormRegister;