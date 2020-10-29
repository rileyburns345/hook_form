import React, {useState} from 'react'


const UserForm = props => {
    // console.log(props)
    const [inputs, setInputs] = useState({
        fName:"",
        lName: "",
        email: "",
        password: "",
        cPassword: ""
      })
    const [fNameError, setFNameError] = useState('first name must be longer than 1 characters')
    const [lNameError, setLNameError] = useState('last name must be longer than 1 characters')
    const [emailError, setEmailError] = useState('email must be lat least 5 characters')
    const [passwordError, setPasswordError] = useState('passowrd must be at least eight characters')
    const [cPasswordError, setCPasswordError] = useState('passwords must match')
    
    const passwordValidator = e => {
        console.log('p: ', inputs.password)
        console.log('cp: ', inputs.cPassword)
        if (inputs.password === e.target.value){
            setCPasswordError('')
        }
    }

    const onChange = e => {  

        if (e.target.name === 'fName' && e.target.value.length > 1) {
            setFNameError('')
        }
        if (e.target.name === 'lName' && e.target.value.length > 1){
            setLNameError('')
        }
        if (e.target.name === 'email' && e.target.value.length > 4){
            setEmailError('')
        }
        if (e.target.name === 'password' && e.target.value.length > 7){
            setPasswordError('')
        }

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const createUser = e => {

        e.preventDefault()
        props.setUser({fName: inputs.fName, lName: inputs.lName, email: inputs.email, password: inputs.password, cPassword: inputs.cPassword}) 
        console.log(props.user)
        // const newUser = {}
        // console.log("Welcome", newUser)
    }

    

    return (
        <form onSubmit={createUser}>
            
            <div>
                <label htmlFor="fName">First Name</label>
                <input type="text" name="fName" onChange={onChange}/>
                {fNameError.length > 1 ? <p>{fNameError}</p> : '' }
            </div>
            <div>
                <label htmlFor="lName">Last Name</label>
                <input type="text" name="lName" onChange={onChange}/>
                {lNameError.length > 1 ? <p>{lNameError}</p> : '' }
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={onChange}/>
                {emailError.length > 1 ? <p>{emailError}</p> : '' }
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={onChange}/>
                {passwordError.length>1?<p>{passwordError}</p>:''}
            </div>
            <div>
                <label htmlFor="cPassword">Confirm Password</label>
                <input type="password" name="cPassword" onChange={passwordValidator}/>
                {cPasswordError.length>1?<p>{cPasswordError}</p>:''}
            </div>
            
            <button type="submit">Create User</button>
        </form>

    )
}

export default UserForm