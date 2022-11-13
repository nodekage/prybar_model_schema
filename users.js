const userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            trim : true,
            unique : true,
            required : true 
        },
        email : {
            type : String,
            trim : true,
            unique : true,
            required : true,
        },
        signup_type : {
            type :  String,
            trim : true,
            enum : ["email", "third-party"],
            default : "email",
            required : true
        },
        password : {
            type : String,
            trim : true
        }
    }, {
        timestamps : true,
        toJSON : { virtuals : true},
        toObject: { virtuals : true}
    }
)
