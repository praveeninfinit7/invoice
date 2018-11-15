exports.resolvers ={
    Query:{
        //Fetching All Client Invoice 
        getAllClientInvoice: async(root, args, { Invoice }) =>{
            const clinetAllInvoice = await Invoice.find();
            return clinetAllInvoice;
        },
        //Fetching Client Invoice By ID 
        getClientInvoice:async(root, {_id }, { Invoice })=>{
            const clientInvoice = await Invoice.findOne({ _id });
            return clientInvoice;
        },
        //Fetching All Invoice 
        getAllInvoice: async(root, args, { Invoice }) =>{
            const allInvoice = await Invoice.find();
            return allInvoice;
        },
        //Fetching Invoice By ID 
        getInvoice:async(root, {_id }, { Invoice })=>{
            const invoice = await Invoice.findOne({ _id });
            return invoice;
        },
        //Fetching All User 
        getAllUser: async(root, args, { User }) =>{
            const allUser = await User.find();
            return allUser;
        }, 
        //Fetching Current User or Finding User By ID 
        getCurrentUser:async(root, {_id }, { User })=>{
          
            const currentUserId = await User.findOne({ _id });
            return currentUserId;
        },
        //Fetching All User Invoice 
        getAllUserInvoice:async(root, { Invoice })=>{
            const userAllInvoice = await Invoice.find();
            return userInvoice;
        },
        //Fetching User Invoice By ID 
        getUserInvoice:async(root, {_id }, { Invoice })=>{
            const userInvoice = await Invoice.findOne({ _id });
            return userInvoice;
        }

    }, 
    Mutation:{
        //Client Invoice Add
        addClientInvoice: async(root, params , { Invoice })=>{
            const newClientInvoice = await new Invoice({...params}).save();
            return newClientInvoice;
        },
         //Client Invoice Update
        // updateInvoice: async(root, { _id  , clientId, nameForm,emailForm,addressForm,mobileForm, businessNumber, invoiceNumber, date, terms, due, price, quantity, amount, tax, gst, description, nameTo, emailTo, addressTo, mobileTo }, { Invoice })=>{    
            updateClientInvoice: async(root, params, { Invoice }) => {
            const clientInvoiceUpdate = await Invoice.findByIdAndUpdate( params._id, {...params} , { new: true } );
            return clientInvoiceUpdate;

        },

          //Client Invoice Delete
        deleteClientInvoice: async(root, { _id }, { Invoice })=>{
            const clientInvoiceDelete = await Invoice.findOneAndRemove({ _id });
            return clientInvoiceDelete;
        },
        //Invoice Add
        addInvoice: async(root, params , { Invoice })=>{
            const newInvoice = await new Invoice({...params}).save();
            return newInvoice;
        },

        //Invoice Delete
        deleteInvoice: async(root, { _id }, { Invoice })=>{
            const invoiceDelete = await Invoice.findOneAndRemove({ _id });
            return invoiceDelete;
        },
        //Invoice Update
        updateInvoice: async(root, params, { Invoice }) => {
            const invoiceUpdate = await Invoice.findByIdAndUpdate( params._id, {...params} , { new: true } );
            return invoiceUpdate;

        },

        //User Signup 
        signupUser: async(root, { username, email, password } , { User })=>{
            const user = await User.findOne({ username });
            if(user){
                throw new Error('User already exists');

            }
            const newUser = await new User({
                username, 
                email, 
                password
            }).save();
            return newUser;
        },

        //delete user
        deleteUser: async(root, { _id }, { User })=>{
            const userDelete = await User.findOneAndRemove({ _id });
            return userDelete;
        },
        //User signin 
        signinUser: async(root, { username, password }, { User }) =>{
            const userLogin = await User.findOne({username});
            const passwords = await User.findOne({password});
            if(!userLogin){
                throw new Error('user not exists');
            }else if(!passwords){
                throw new Error('password invalid')
            }
            return userLogin;
        },
        //User reset password 
        resetPassword: async(root, params, { User }) => {
            const passwordUpdate = await User.findByIdAndUpdate( params._id, {...params} , { new: true } );
            return passwordUpdate;

        },

        //User Invoice creating 
        addUserInvoice: async(root, params , { Invoice })=>{
            const newUserInvoice = await new Invoice({...params}).save();
            return newUserInvoice;
        },

        //User Invoice Update 
        updateUserInvoice: async(root, params, { Invoice }) => {
            const userInvoiceUpdate = await Invoice.findByIdAndUpdate( params._id, {...params} , { new: true } );
            return userInvoiceUpdate;

        },
          //User Invoice  delete
          deleteUserInvoice: async(root, { _id }, { Invoice })=>{
            const userInvoiceDelete = await Invoice.findOneAndRemove({ _id });
            return userInvoiceDelete;
        }
        


    }
};