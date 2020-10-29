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
    
    const onChange = e => {
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
            </div>
            <div>
                <label htmlFor="lName">Last Name</label>
                <input type="text" name="lName" onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="cPassword">Confirm Password</label>
                <input type="password" name="cPassword" onChange={onChange}/>
            </div>
            
            <button type="submit">Create User</button>
        </form>

    )
}

export default UserForm