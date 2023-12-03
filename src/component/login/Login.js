import '../login/Login.css'
import {useForm} from "react-hook-form"



function Login(){ 
    const {register,handleSubmit,formState:{errors}} = useForm();

    console.log(errors)

    handleSubmit((e)=>{
        console.log(e.target.value)
    })
    return(
        <div>
            <section className="login-container">
                <div className="container">
                    <div className="row">
                        <div className="col6">
                            <div className="form-sec">
                            <form onSubmit={handleSubmit}>
                                <h2>Login</h2>
                                <input type="text" id="name1" {...register("name",{required:"Name is required"})}placeholder="Enter the name" name="name1" />
                                {/* {errors.name && <span>{errors.name.message}</span>} */}
                                <input type="email" id="email" {...register("email",{required:"Email is required"})} placeholder="Enter the Email" name="email1" />
                                {/* {errors.email && <span>{errors.email.message}</span>} */}

                                <input type="password" id="password" {...register("password",{required:"password is required"})} placeholder="Enter the password" name="password1" />
                                {/* {errors.password && <span>{errors.password.message}</span>} */}

                                <button className='forget-sec'>forget password ?</button>
                                <div className='flex'>
                                    <button type="submit">Login</button>
                                    <button type="submit">Sign Up</button>
                                </div>
                             </form>   
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Login;