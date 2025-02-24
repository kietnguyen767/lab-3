import pictuteLeft from "../../images/snapedit_1739874117604 2 (1).png"
import title from '../../images/Job Finder.png'
import FormLogin from "../../components/Forms/FormLogin/FormLogin";
function Login() {
    return (
        <>
            <div className="flex items-center">
                <div className="w-[30%] bg-[#C8E2B1] h-[100vh] flex flex-col items-center justify-center">
                    <img src={pictuteLeft} className="w-[250px]" />
                    <img src={title} className="w-[200px]" />
                </div>
                <div className="flex flex-col items-center w-[70%] px-[300px]">
                    <div className="flex flex-col items-center">
                        <img src={pictuteLeft} className="w-[250px]" />
                        <img src={title} className="w-[200px]" />
                    </div>
                    <FormLogin />
                </div>
            </div>
        </>
    )
}
export default Login;