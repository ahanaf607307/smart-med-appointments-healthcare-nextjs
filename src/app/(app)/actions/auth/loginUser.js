"use server";




export const loginUser = async (payload) => {

    const { email, password } = payload;

    // TO DO 


    
    // const user = {}

    // if (!user) return null
    // const isPasswordOK = bcrypt.compare(user.password, password)
    // if (!isPasswordOK) return null

    return { email, password };
}