exports.typeDefs =`

type Invoice {
    _id:ID
    clientId:String!
    nameForm:String! 
    emailForm:String!
    addressForm:String!
    mobileForm:String!
    businessNumber:String!
    invoiceNumber:String!
    date:String!
    terms:String!
    due:String!
    price:String!
    quantity:String!
    amount:String!
    tax:String!
    gst:String!
    description:String!
    nameTo:String!
    emailTo:String!
    addressTo:String!
    mobileTo:String!
}

type User {
    _id:ID
    username:String! @unique
    password:String!
    email:String!
}

type Query {
    getAllClientInvoice:[Invoice]
    getClientInvoice(_id:ID!):Invoice
    getAllInvoice:[Invoice]
    getInvoice(_id:ID!):Invoice
    getAllUser:[User]
    getCurrentUser(_id:ID!):User
    getAllUserInvoice:[Invoice]
    getUserInvoice(_id:ID!):Invoice
}


type Mutation {
    addClientInvoice(
        clientId:String!,
        nameForm:String!,
        emailForm:String!,
        addressForm:String!,
        mobileForm:String!,
        businessNumber:String!,
        invoiceNumber:String!,
        date:String!,
        terms:String!,
        due:String!,
        price:String!,
        quantity:String!,
        amount:String!,
        tax:String!,
        gst:String!,
        description:String!,
        nameTo:String!,
        emailTo:String!,
        addressTo:String!,
        mobileTo:String!
        ):Invoice
        
    updateClientInvoice(
        _id:ID!,
        clientId:String,
        nameForm:String,
        emailForm:String,
        addressForm:String,
        mobileForm:String,
        businessNumber:String,
        invoiceNumber:String,
        date:String,
        terms:String,
        due:String,
        price:String,
        quantity:String,
        amount:String,
        tax:String,
        gst:String,
        description:String,
        nameTo:String,
        emailTo:String,
        addressTo:String,
        mobileTo:String
    ):Invoice
        
    deleteClientInvoice(_id:ID!):Invoice
    
    addInvoice(
        clientId:String!,
        nameForm:String!,
        emailForm:String!,
        addressForm:String!,
        mobileForm:String!,
        businessNumber:String!,
        invoiceNumber:String!,
        date:String!,
        terms:String!,
        due:String!,
        price:String!,
        quantity:String!,
        amount:String!,
        tax:String!,
        gst:String!,
        description:String!,
        nameTo:String!,
        emailTo:String!,
        addressTo:String!,
        mobileTo:String!
        ):Invoice

        updateInvoice(
            _id:ID!,
            clientId:String,
            nameForm:String,
            emailForm:String,
            addressForm:String,
            mobileForm:String,
            businessNumber:String,
            invoiceNumber:String,
            date:String,
            terms:String,
            due:String,
            price:String,
            quantity:String,
            amount:String,
            tax:String,
            gst:String,
            description:String,
            nameTo:String,
            emailTo:String,
            addressTo:String,
            mobileTo:String
        ):Invoice


    deleteInvoice(_id:ID!):Invoice

    addUserInvoice(
        clientId:String!,
        nameForm:String!,
        emailForm:String!,
        addressForm:String!,
        mobileForm:String!,
        businessNumber:String!,
        invoiceNumber:String!,
        date:String!,
        terms:String!,
        due:String!,
        price:String!,
        quantity:String!,
        amount:String!,
        tax:String!,
        gst:String!,
        description:String!,
        nameTo:String!,
        emailTo:String!,
        addressTo:String!,
        mobileTo:String!
        ):Invoice


        updateUserInvoice(
            _id:ID!,
            clientId:String,
            nameForm:String,
            emailForm:String,
            addressForm:String,
            mobileForm:String,
            businessNumber:String,
            invoiceNumber:String,
            date:String,
            terms:String,
            due:String,
            price:String,
            quantity:String,
            amount:String,
            tax:String,
            gst:String,
            description:String,
            nameTo:String,
            emailTo:String,
            addressTo:String,
            mobileTo:String
        ):Invoice
        deleteUserInvoice(_id:ID!):Invoice


    
    
    signinUser(username: String!, password: String!):User
    signupUser(username:String!,password:String!, email:String!):User
    resetPassword(_id:ID!, password:String!):User
    deleteUser(_id:ID!):User
    
}





`;